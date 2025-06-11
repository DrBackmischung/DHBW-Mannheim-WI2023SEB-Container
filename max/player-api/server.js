const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

const player = {
  id: 1,
  name: 'mazus',
  kills: 1000,
  deaths: 50,
  wins: 100,
  rank: "unreal",
  level: 1000,
};

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'Player API' });
});

// CRUD
app.get('/player', (req, res) => res.json(player));

app.listen(PORT, () => {
  console.log(`Player API running on port ${PORT}`);
});
