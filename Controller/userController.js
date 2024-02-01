import { StatusCodes } from "http-status-codes";
import modelfunction from "../ModelFunction/userFunction.js";
import sendToken from "../utils/SendToken.js";

const userFunction = new modelfunction();

export class userController{
    async signUP(req,res){
        try{
            const {name,email,password} = req.body;
            console.log(name,email,password);
            const result = await userFunction.signup(name,password,email);
            console.log(result.getJWT());
            return res.status(200).json({message:"User Created",UserID: result._id, token: result.getJWT()});
        }
        catch(err){
            console.log(err);
            return res.status(404).json({message:"Invalid Format"});
        }
    }
    async signIn(req,res){
        try{
            const {email,password} = req.body;
            console.log(email,password);
            const result = await userFunction.findMail(email);
            if(!result){
                return res.status(StatusCodes.UNAUTHORIZED).json({message:"Not Registered"});
            }
            else{
                const isValidPassword = await result.isValidPassword(password);
                if(!isValidPassword){
                    return res.status(StatusCodes.UNAUTHORIZED).json({message:"Incorrect Password"});
                }
                result.password = undefined;
                sendToken(result,StatusCodes.ACCEPTED,res);
            }
        }
        catch(err){
            console.error(err);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({message:"Server Error"});
        }
    }
}
export default userController;