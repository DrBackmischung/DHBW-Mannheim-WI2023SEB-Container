const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

const game = {
  id: 1,
  name: 'Fortnite',
  description: 'Fortnite is a sandbox survival game where players build and battle in a persistent world.',
  website: 'https://www.fortnite.com/',
  version: '1.0.0',
  price: 0,
};

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'Game API' });
});

// CRUD
app.get('/game', (req, res) => res.json(game));

app.listen(PORT, () => {
  console.log(`Game API running on port ${PORT}`);
});
