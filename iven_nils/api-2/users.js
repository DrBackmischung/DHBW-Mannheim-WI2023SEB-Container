import express from 'express';
const app = express();

const users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

app.get('/users', (req, res) => {
  res.json(users);
});

app.listen(3001, () => {
  console.log('Server läuft auf http://localhost:3001');
});
