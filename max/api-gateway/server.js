const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Health-Check
app.get('/health', (req, res) => res.send('OK'));

// Proxy-Helper
const proxyRequest = (res, method, url, data = null) => {
  axios({ method, url, data })
    .then(response => res.json(response.data))
    .catch(error => {
      const status = error.response?.status || 500;
      res.status(status).json({ error: error.message });
    });
};

app.get('/player', (req, res) => proxyRequest(res, 'get', 'http://player-api:3001/player'));

app.get('/weapons', (req, res) => proxyRequest(res, 'get', 'http://weapons-api:3002/weapons'));

app.get('/game', (req, res) => proxyRequest(res, 'get', 'http://game-api:3003/game'));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});