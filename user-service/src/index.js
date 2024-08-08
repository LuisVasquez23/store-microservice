import express from "express";
import { CreateUserController } from './features/createUser/createUserController.js';
import { sequelize } from "./infrastructure/database.js";

const app = express();

app.use(express.json());

const createUserController = new CreateUserController();

app.post("/users" , (req, res) => createUserController.handle(req, res));


sequelize
    .sync()
    .then(()=>{
        app.listen(3001 , ()=>{
            console.log('User service running on port 3001');
        });
    });