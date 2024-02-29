import express from "express";
import cloudinaryConnect from './utils/cloudinary.js';
import multer from "multer";
import path from 'path';
//Routes
import userRouter from "./Routes/userRoutes.js";
import postRouter from "./Routes/postsRoutes.js";

const app = express();
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads');
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    },
    file: (req, file, cb) => {
        cb(null, file.buffer);
    }
});
cloudinaryConnect();

const upload = multer({storage});
app.use(express.json());
app.use(upload.single("imgData"));

app.use(express.urlencoded());
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);

export default app;
