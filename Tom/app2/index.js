const express = require('express');
const app = express();
const port = 3002;

app.get('/api2', (req, res) => {
    res.send('Hello from API 2!');
});

app.listen(port, () => {
    console.log(`API 2 listening at http://localhost:${port}`);
});
