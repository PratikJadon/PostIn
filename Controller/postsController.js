import { StatusCodes } from "http-status-codes";
import postFunction from "../ModelFunction/postFunction.js";
import uploadToImgBB from "../utils/img_uploader.js";
import getDataUri from "../utils/dataURI.js";
import { v2 as cloudinary } from "cloudinary";
const postService = new postFunction();

export default class postController {
  static async addPost(req, res) {
    const { title, caption } = req.body;
  //  To upload file and convert it to its buffer
    const imgData = req.file;
    console.log("Files ->", imgData);
    const imgURI = getDataUri(imgData);
  // Uploading the buffer to cloudinary to create the URL.
    const myCloud = await cloudinary.uploader.upload(imgURI.content);
    const imgUrl = myCloud.url;
    console.log(title, caption, imgUrl);
    const result = await postService.addPost(title, caption, imgUrl);
    if (!result) {
      res.send(StatusCodes.BAD_REQUEST).json({ message: "Database Error" });
    }
    res.status(StatusCodes.ACCEPTED).send(result);
  }
  static async getAllPost(req, res) {
    const allPost = await postService.getAll();
    return res.status(StatusCodes.ACCEPTED).send(allPost);
  }
  static async deletePost(req, res) {
    
  }
  static async updatePost(req, res) {}
  static async getPostByID(req, res) {}
}
