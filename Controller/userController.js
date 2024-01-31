import { json } from "express";
import userSchema from "../Models/userModel.js";
import bcrypt from 'bcrypt'; 

export class userController{
    async signUP(req,res){
        try{
            const {name,email,password} = req.body;
            const hashpassword = await bcrypt.hash(password,12);
            const user = new userModel(
                name,
                email,
                hashpassword
            );
            console.log(user);
            await this.signUP(name,hashpassword,email);
            return res.status(200).json({message:"User Credentials updated",UserID: user._id});
        }
        catch(err){
            console.log(err);
            return res.status(404).json({message:"Invalid Format"});
        }
    }
}
export default userController;