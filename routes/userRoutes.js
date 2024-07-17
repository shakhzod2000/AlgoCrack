const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/User');

const router = express.Router();

// Route: POST /api/users
// Beschreibung: Erstellt einen neuen Benutzer
router.post('/', async (req, res) => {
    try {
        const { name, email, password } = req.body;

        // Überprüfen, ob alle Felder ausgefüllt sind
        if ( !name || !email || !password) {
            return res.status(400).json({ error: 'Please enter all fields' });
        }
        // Überprüfen, ob Benutzer bereits existiert
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ error: 'User already exists'});
        }
        
        // Passwort hashen
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        
        // Neuen Benutzer erstellen
        user = new User({ name, email, password: hashedPassword });

        // Benutzer in die Datenbank speichern
        await user.save();
        
        res.status(201).json({ message: 'User created successfully', user });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});


// Route: POST /api/users/login
// Beschreibung: Einloggen eines Benutzers
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        // Überprüfen, ob alle Felder ausgefüllt sind
        if ( !email || !password) {
            return res.status(400).json({ error: 'Please enter all fields'});
        }

        // Überprüfen, ob Benutzer existiert
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: 'Invalid credentials' });
        }

        // Passwort überprüfen
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: 'Invalid credentials'});
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;