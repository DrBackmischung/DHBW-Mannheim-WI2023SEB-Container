const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from API 1!' });
});

app.get('/info', (req, res) => {
  res.json({ service: 'API 1', version: '1.0' });
});

app.listen(port, () => {
  console.log(`API 1 running on port ${port}`);
});