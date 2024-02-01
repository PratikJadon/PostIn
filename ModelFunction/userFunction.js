import UserModel from "../Models/userModel.js";

export default class userFunction{
    constructor(){
        this.UserModel = UserModel;
    }
    async signup(name, password, email){
        const data = {name,password,email};
        const newUser = new UserModel(data);
        await newUser.save();
        newUser.password = undefined;
        return newUser;
    }
    async signin(email){
        try{
            return await  UserModel.findOne({email});
        }
        catch(err){
            console.log(err);
        }
    }
}

