const express = require('express');
const app = express();
const PORT = process.env.PORT || 3010;

app.use(express.json());

app.get('/health', (req, res) => res.send('OK'));

app.post('/multiply', (req, res) => {
  const { number1, number2 } = req.body;
  if (typeof number1 !== 'number' || typeof number2 !== 'number') {
    return res.status(400).json({ error: 'Both number1 and number2 must be provided as numbers' });
  }
  const product = number1 * number2;
  res.status(200).json({ product });
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
