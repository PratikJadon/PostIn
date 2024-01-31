import mongoose from "mongoose";
const UserModel = new mongoose.Schema([
    {
        name:{
            type:String,
            required: true
        },
        email:{
            type: String,
            unique : true,  
            required: true,
            match:[/.+\@.+\../,"Please enter a valid Email"]
        },
        password:{
            type: String,
            validate:{
            validator: function(value){
                return /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,12}$/.test(value)
            },
            message:"Password should be between 8-12 charachetrs and have a special character"
        }
        }
    }
])
export  default mongoose.model("User",UserModel);