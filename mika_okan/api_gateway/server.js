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

app.get('/api_1', (req, res) => proxyRequest(res, 'get', 'http://api_1:3001/hello'));
app.get('/api_2', (req, res) => proxyRequest(res, 'get', 'http://api_2:3002/user'));

app.listen(PORT, () => {
    console.log(`API Gateway running on port ${PORT}`);
  });