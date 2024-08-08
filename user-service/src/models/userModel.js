import { DataTypes, Model } from "sequelize";
import { sequelize } from '../infrastructure/database.js';

export class User extends Model{}

User.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
} , {
    sequelize,
    modelName: "User"
});