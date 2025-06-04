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

// CRUD für Products
app.get('/multiply', (req, res) => proxyRequest(res, 'post', 'http://multiply-service:3010/multiply'));

// CRUD für Orders
app.get('/random-number', (req, res) => proxyRequest(res, 'get', 'http://random-number-service:3011/'));

app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
