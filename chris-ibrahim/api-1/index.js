const express = require('express');
const app = express();
const PORT = 3001;

app.get('/api1/hello', (req, res) => {
  res.json({ message: 'Hello from API 1 🎉' });
});

app.listen(PORT, () => {
  console.log(`API 1 läuft auf Port ${PORT}`);
});
