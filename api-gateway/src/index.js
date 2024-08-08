import express from 'express';
import proxy from 'express-http-proxy';

const app = express();

app.use('/users', proxy('http://user-service:3001'));
app.use('/products', proxy('http://product-service:3002'));

const port = 3000;

app.listen(port, () => {
    console.log(`API Gateway running on port ${port}`);
});
