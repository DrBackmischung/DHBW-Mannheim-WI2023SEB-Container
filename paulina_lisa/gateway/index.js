const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/api/compliment', async (req, res) => {
    try {
        const response = await axios.get('http://api1:3001/compliment');
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: 'Fehler beim Abrufen des Kompliments' });
    }
});

app.get('/api/joke', async (req, res) => {
    try {
        const response = await axios.get('http://api2:3002/joke');
        res.json(response.data);
    } catch (err) {
        res.status(500).json({ error: 'Fehler beim Abrufen des Witzes' });
    }
});

app.listen(port, () => {
    console.log(`Gateway läuft auf Port ${port}`);
});
