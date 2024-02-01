import modelfunction from "../ModelFunction/userFunction.js";

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
}
export default userController;