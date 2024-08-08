import { CreateUserService } from './createUserService.js';

export class CreateUserController{

    constructor(){
        this.createUserService = new CreateUserService();
    }

    async handle(req , res){
        const {name} = req.body;
        const user = await this.createUserService.execute(name);
        res.status(201).json(user);
    }
}