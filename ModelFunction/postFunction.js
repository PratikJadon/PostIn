import postModel from "../Models/postModel.js";
import postModel from "../Models/postModel.js";

export default class postFunction{
    constructor(){
        this.postFunction = postFunction;
    }
    async getAll(){
        const posts = await postModel.getPosts();
        console.log(posts);
        return posts;
    }
    async addPost(title, caption, imgUrl){
        const data = {title, caption, imgUrl};
        const newModel = new postModel(data);
        await newModel.save();
        return newModel;
    }
}