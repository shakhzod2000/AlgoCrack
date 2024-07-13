const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User = require('./models/User');

const app = express();

// Middleware für Bodyparser
app.use(express.json());

// Statische Dateien bereitstellen
app.use(express.static('public'));

// Verbindung zur MongoDB
mongoose.connect('mongodb://localhost:27017/algocrack')
    .then(() => console.log('Connection to database successful'))
    .catch(err => console.log('Connection to database failed:', err));


// Beispiel-Route
app.get('/', (req, res) => {
    res.send('Hello Welt');
});

// Benutzer-Route einbinden(hinzufügen)
app.use('/api/users', require('./routes/userRoutes'));

// Server starten
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});