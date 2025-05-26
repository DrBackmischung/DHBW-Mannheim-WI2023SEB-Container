const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health-Check
app.get('/health', (req, res) => res.send('OK'));


app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
  });
  