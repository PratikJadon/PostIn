import { json } from "express";
import userModel from "../Models/userModel.js";

export class userController{
    signUP=(req,res)=>{
        try{
            const {name,email,password} = req.body;
            const user =  new userModel({name, email , password});  
            console.log(user);
            return res.status(200).json({message:"User Credentials updated",UserID: user._id});
        }
        catch(err){
            console.log(err);
            return res.status(404).json({message:"Invalid Format"});
        }
    }
}