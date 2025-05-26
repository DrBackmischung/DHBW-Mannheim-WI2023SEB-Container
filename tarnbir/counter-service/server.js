const express = require('express');
const app = express();
const port = 3001;

let visitCount = 0;

app.get('/', (req, res) => {
  visitCount++;
  res.json({ 
    message: 'Welcome to Counter Service!',
    visits: visitCount 
  });
});

app.get('/count', (req, res) => {
  res.json({ count: visitCount });
});

app.listen(port, () => {
  console.log(`Counter service listening on port ${port}`);
});
