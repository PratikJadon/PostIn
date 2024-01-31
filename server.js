import { connectDB } from './Database/connectDB.js';
import app from './index.js';
require("dotenv").config()

async function start(){
    await connectDB();
    app.listen(3000,()=>{
        console.log("Server is listening at 3000");
    })
}


start()

