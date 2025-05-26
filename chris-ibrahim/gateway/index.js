const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const PORT = 8080;

app.use('/api1', createProxyMiddleware({ target: 'http://api-1:3001', changeOrigin: true }));
app.use('/api2', createProxyMiddleware({ target: 'http://api-2:3002', changeOrigin: true }));

app.listen(PORT, () => {
  console.log(`Gateway läuft auf Port ${PORT}`);
});
