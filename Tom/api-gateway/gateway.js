const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

app.use('/api1', createProxyMiddleware({ target: 'http://app1:3001', changeOrigin: true }));
app.use('/api2', createProxyMiddleware({ target: 'http://app2:3002', changeOrigin: true }));

app.listen(3000, () => {
    console.log('API Gateway listening on port 3000');
});
