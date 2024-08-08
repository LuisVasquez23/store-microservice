import express from 'express';
import { sequelize } from './infrastructure/database.js';
import { CreateProductController } from './features/createProduct/createProductController.js';

const app = express();
app.use(express.json());

const createProductController = new CreateProductController();

app.post('/products', createProductController.handle.bind(createProductController));

sequelize.sync().then(() => {
    app.listen(3002, () => {
        console.log('Product service running on port 3002');
    });
});
