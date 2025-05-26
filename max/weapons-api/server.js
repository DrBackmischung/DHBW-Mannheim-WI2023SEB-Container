const express = require('express');
const app = express();
const PORT = process.env.PORT || 3003;

app.use(express.json());

const weapons = [
  {
    id: 1,
    name: 'Assault Rifle',
    damage: 41,
    fireRate: 10,
    magazineSize: 30,
    reloadTime: 2.5,
    accuracy: 0.1,
  },
  {
    id: 2,
    name: 'Sniper Rifle',
    damage: 100,
    fireRate: 1,
    magazineSize: 5,
    reloadTime: 2.5,
    accuracy: 0.1,
  },
  {
    id: 3,
    name: 'Pump Shotgun',
    damage: 100,
    fireRate: 1,
    magazineSize: 5,
    reloadTime: 2.5,
    accuracy: 0.1,
  },
  {
    id: 4,
    name: 'Pistol',
    damage: 100,
    fireRate: 1,
    magazineSize: 5,
    reloadTime: 2.5,
    accuracy: 0.1,
  },
];

app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'Weapons API' });
});

// CRUD
app.get('/weapons', (req, res) => res.json(weapons));

app.listen(PORT, () => {
  console.log(`Weapons API running on port ${PORT}`);
});
