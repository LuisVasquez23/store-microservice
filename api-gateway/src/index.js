import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

const app = express();
const port = 3000;

// Redirige todas las solicitudes a /products al servicio en http://product-service:3002
app.use('/products', createProxyMiddleware({
    target: 'http://product-service:3002',
    changeOrigin: true,
}));

// Redirige todas las solicitudes a /users al servicio en http://user-service:3001
app.use('/users', createProxyMiddleware({
    target: 'http://user-service:3001',
    changeOrigin: true,
}));


app.get('/test', (req, res) => {
    res.send('Test route is working!');
});

app.listen(port, () => {
    console.log(`API Gateway running on port ${port}`);
});
