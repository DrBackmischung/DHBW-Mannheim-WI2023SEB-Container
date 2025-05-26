const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from API 2!' });
});

app.get('/status', (req, res) => {
  res.json({ service: 'API 2', status: 'active' });
});

app.listen(port, () => {
  console.log(`API 2 running on port ${port}`);
});