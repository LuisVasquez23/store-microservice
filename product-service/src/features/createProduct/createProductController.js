import { CreateProductService } from './createProductService.js';

export class CreateProductController {
    constructor() {
        this.createProductService = new CreateProductService();
    }

    async handle(req, res) {
        const { name } = req.body;
        const product = await this.createProductService.execute(name);
        res.status(201).json(product);
    }
}
