const express = require('express');
const app = express();
const port = 3001;

app.get('/api1', (req, res) => {
    res.send('Hello from API 1!');
});

app.listen(port, () => {
    console.log(`API 1 listening at http://localhost:${port}`);
});
