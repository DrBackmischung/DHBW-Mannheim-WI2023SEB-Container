const express = require('express');
const app = express();
const port = 3002;

app.get('/health', (req, res) => res.send('OK'));

app.get('/user', (req, res) => {
  res.json({ 
    id: 1, 
    name: 'Max Mustermann', 
    email: 'max@example.com',
    created: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`User API läuft auf http://localhost:${port}`);
});
