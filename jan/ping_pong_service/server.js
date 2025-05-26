const express = require('express');
const app = express();
const port = 3001;

let pingCount = 0;

app.get('/', (req, res) => {
  pingCount++;
  res.json({ 
    message: 'pong',
    pings: pingCount 
  });
});

app.get('/ping', (req, res) => {
  pingCount++;
  res.json({ 
    message: 'pong',
    pings: pingCount 
  });
});

app.get('/count', (req, res) => {
  res.json({ count: pingCount });
});

app.listen(port, () => {
  console.log(`Ping-Pong service listening on port ${port}`);
});
