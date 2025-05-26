const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 8080;

// Routes for API 1
app.use('/api1', createProxyMiddleware({ 
  target: 'http://api1:3000',
  pathRewrite: {'^/api1': ''},
  changeOrigin: true
}));

// Routes for API 2
app.use('/api2', createProxyMiddleware({ 
  target: 'http://api2:3000',
  pathRewrite: {'^/api2': ''},
  changeOrigin: true
}));

app.get('/', (req, res) => {
  res.send('API Gateway running. Use /api1 or /api2 to access the services.');
});

app.listen(port, () => {
  console.log(`API Gateway running on port ${port}`);
});