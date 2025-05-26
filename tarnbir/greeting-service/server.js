const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.json({ message: 'Hello from Greeting Service!' });
});

app.listen(port, () => {
  console.log(`Greeting service listening on port ${port}`);
});
