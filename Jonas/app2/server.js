const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());

app.get('/health', (req, res) => res.send('OK'));


app.listen(PORT, () => {
    console.log(`App2 running on port ${PORT}`);
  });