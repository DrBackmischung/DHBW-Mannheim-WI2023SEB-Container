const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();
const port = 8080;

// Proxy configuration for greeting service
app.use('/greeting', createProxyMiddleware({
  target: 'http://hello_world-service:3000',
  changeOrigin: true,
  pathRewrite: {
    '^/greeting': '/'
  }
}));

// Proxy configuration for counter service
app.use('/counter', createProxyMiddleware({
  target: 'http://ping_pong-service:3001',
  changeOrigin: true,
  pathRewrite: {
    '^/counter': '/'
  }
}));

// Root endpoint
app.get('/', (req, res) => {
  res.json({
    message: 'API Gateway',
    endpoints: {
      greeting: '/hello',
      counter: '/ping',
      counterCount: '/ping_pong/count'
    }
  });
});

app.listen(port, () => {
  console.log(`API Gateway listening on port ${port}`);
});
