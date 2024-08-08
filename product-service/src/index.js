import express from 'express';
import { sequelize } from './infrastructure/database.js';
import { CreateProductController } from './features/createProduct/createProductController.js';

const app = express();
app.use(express.json());

const createProductController = new CreateProductController();

app.get('/products', (req , res) => res.send("working products") );
app.post('/products', (req , res) => createProductController.handle(req , res));

sequelize.sync().then(() => {
    app.listen(3002, () => {
        console.log('Product service running on port 3002');
    });
});
