const express = require('express');
const app = express();
const PORT = 3001;

app.get('/api1', (req, res) => {
    res.json({ message: 'Hallo von API 1!' });
});

app.listen(PORT, () => {
    console.log(`API 1 läuft auf Port ${PORT}`);
});
