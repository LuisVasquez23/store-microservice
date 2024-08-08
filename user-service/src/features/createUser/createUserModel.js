import { User } from '../../models/userModel.js';

export class CreateUserModel{

    constructor(name){
        this.name = name;
    }

    async save(){
        return await User.create({name: this.name});
    }
}