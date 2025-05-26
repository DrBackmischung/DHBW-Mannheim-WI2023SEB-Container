const express = require('express');
const app = express();
const PORT = 3002;

app.get('/api2/hello', (req, res) => {
  res.json({ message: 'Hello from API 2 🚀' });
});

app.listen(PORT, () => {
  console.log(`API 2 läuft auf Port ${PORT}`);
});
