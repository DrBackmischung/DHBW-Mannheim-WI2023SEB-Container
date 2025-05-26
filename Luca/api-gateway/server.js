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

app.get('/random-video', (req, res) => proxyRequest(res, 'get', 'http://video-service:3001/random-video'));
app.get('/random-meme', (req, res) => proxyRequest(res, 'get', `http://meme-service:3002/random-meme`));
a
app.listen(PORT, () => {
  console.log(`API Gateway running on port ${PORT}`);
});
