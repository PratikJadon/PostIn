import express from "express";
const router = express.Router();
import userController from "../Controller/userController.js";

const user = new userController();

router.post("/signup", (req, res) => user.signUP(req, res));
router.get("/signin", (req, res) => user.signIn(req, res));
router.post("/logout", (req, res) => user.logout(req, res));

export default router;
