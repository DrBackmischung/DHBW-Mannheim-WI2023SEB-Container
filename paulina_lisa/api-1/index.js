const express = require('express');
const app = express();
const port = 3001;

const compliments = [
    "Du bist fantastisch!",
    "Dein Code ist eleganter als ein Einhorn im Anzug.",
    "Heute wird dein Tag – ganz sicher!",
    "Du bist der Grund, warum der Server schneller läuft.",
    "Niemand loggt Fehler so charmant wie du!"
];

app.get('/compliment', (req, res) => {
    const random = compliments[Math.floor(Math.random() * compliments.length)];
    res.json({ compliment: random });
});

app.listen(port, () => {
    console.log(`Compliment API läuft auf Port ${port}`);
});
