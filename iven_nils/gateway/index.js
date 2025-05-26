import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();

// leitet "/" an Hello-Service weiter (Port 3000)
app.use('/', createProxyMiddleware({
  target: 'http://hello-service:3000',
  changeOrigin: true
}));

// leitet "/users" an Users-Service weiter (Port 3001)
app.use('/users', createProxyMiddleware({
  target: 'http://users-service:3001',
  changeOrigin: true
}));

app.listen(4000, () => {
  console.log('API Gateway läuft auf http://localhost:4000');
});
