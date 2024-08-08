import { Product } from '../../models/productModel.js';

export class CreateProductModel {
    constructor(name) {
        this.name = name;
    }

    async save() {
        return await Product.create({ name: this.name });
    }
}
