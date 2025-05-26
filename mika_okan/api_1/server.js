const express = require('express');
const app = express();
const port = 3001;

app.get('/health', (req, res) => res.send('OK'));

app.get('/hello', (req, res) => {
  res.json({ message: 'Hello World!', timestamp: new Date().toISOString() });
});

app.listen(port, () => {
  console.log(`Hello API läuft auf http://localhost:${port}`);
});
