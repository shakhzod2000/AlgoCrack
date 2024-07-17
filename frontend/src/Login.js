import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        const response = await fetch('/api/users/login',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        const result = await response.json();
        if (response.ok) {
            alert('Login successful');
            // Weiterleitung zur Startseite
            window.location.href = '/';
        } else {
            alert('Login failed: ' + result.message);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required
                />
                <br /> {/* Zeilenumbruch */}
                <label htmlFor="password">Password:</label> 
                <input
                    type="password"
                    id="password"  
                    name="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required
                />
                <br /> {/* Zeilenumbruch */}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login; // Export der Komponente