import express from "express";
import fileUpload from "express-fileupload";
//Routes
import userRouter from "./Routes/userRoutes.js";
import postRouter from "./Routes/postsRoutes.js";

const app = express();

app.use(express.json());
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

export default app;
