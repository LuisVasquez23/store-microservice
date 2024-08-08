import { CreateUserModel } from './createUserModel.js';
 
export class CreateUserService{
   
    constructor(){}

    async execute(name){
        const userModel = new CreateUserModel(name);
        return await userModel.save();
    }
}