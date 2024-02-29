import express  from "express";
//Routes
import userRouter from "./Routes/userRoutes.js";
// import postRouter from "./Routes/postsRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/users",userRouter);
// app.use("/api/posts",postRouter);



export default app;