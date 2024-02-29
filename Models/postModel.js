import mongoose, { Mongoose } from 'mongoose';
const postSchema = new mongoose.Schema([
    {
        Title:{
            type : String,
            required: true,
        },
        Image:{
            type : String,
            required: true,
        },
        Caption:{
            type : String,
        },
        totalCount:{
            type : Number,
            default: 0
        },  
        Likes:[{type : mongoose.Types.ObjectId , ref : "User"}] 
        ,
        Comments:[{type:mongoose.Types.ObjectId, ref : "User"},
                 {Caption :String}],
    }
])
export default mongoose.model( "post",postSchema);