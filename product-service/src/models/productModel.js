import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../infrastructure/database.js';

export class Product extends Model {}

Product.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    sequelize,
    modelName: 'Product',
});
