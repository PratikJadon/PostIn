import { UserModel } from "../Models/userModel.js";

export default class userFunction{
    constructor(){
        this.UserModel = UserModel;
    }
    async signup(name, password, email){
        const data = {name,password,email};
        const newUser = new UserModel(data);
        await newUser.save();
        return newUser;
    }
}
