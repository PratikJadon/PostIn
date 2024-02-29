import { StatusCodes } from "http-status-codes";
import postFunction from "../ModelFunction/postFunction.js";
const postService = new  postFunction();

export default class postController{
   
    static async addPost(req,res){
        const {title, caption, imgPath} = req.body;
        const imgUrl = await uploadToIMG(imgPath);
        console.log(title,caption,imgUrl);
        const result = await postService.addPost(title, caption, imgUrl);
        if(!result){
            res.send(StatusCodes.BAD_REQUEST).json({"message":"Database Error"});
        }
        res.status(StatusCodes.ACCEPTED).send(result);
    }
    static async getAllPost(req,res){
        const allPost = await postService.getAll();
        return  res.status(StatusCodes.ACCEPTED).send(allPost);
    }
    static async deletePost(req,res){

    }
    static async updatePost(req,res){

    }
    static async getPostByID(req,res){
        
    }

}