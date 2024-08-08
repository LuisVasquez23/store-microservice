import { CreateProductModel } from './createProductModel.js';

export class CreateProductService {
    constructor() {}

    async execute(name) {
        const productModel = new CreateProductModel(name);
        return await productModel.save();
    }
}
