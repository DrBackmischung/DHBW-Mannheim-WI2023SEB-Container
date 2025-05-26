const express = require('express');
const app = express();
const port = 3002;

const jokes = [
    "Warum können Geister so schlecht lügen? – Weil man durch sie hindurchsehen kann.",
    "Was macht ein Informatiker im Garten? – Er pflanzt ein Rootkit.",
    "Wie nennt man einen Bumerang, der nicht zurückkommt? – Ein Stock.",
    "Warum hat der Programmierer seine Brille weggeworfen? – Weil er keinen Java-Skript mehr sehen konnte!"
];

app.get('/joke', (req, res) => {
    const random = jokes[Math.floor(Math.random() * jokes.length)];
    res.json({ joke: random });
});

app.listen(port, () => {
    console.log(`Joke API läuft auf Port ${port}`);
});
