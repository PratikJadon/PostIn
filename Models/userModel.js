import mongoose from "mongoose";
import bcrypt from 'bcrypt';

const UserSchema = new mongoose.Schema([
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
UserSchema.pre("save",async function(next){
    if(!this.isModified("password")){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);

});
export default mongoose.model("User",UserSchema);

