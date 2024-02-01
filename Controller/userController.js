import { StatusCodes } from "http-status-codes";
import modelfunction from "../ModelFunction/userFunction.js";
import sendToken from "../utils/SendToken.js";
import tokenListFunction from "../ModelFunction/tokenListFunction.js";

const userFunction = new modelfunction();
const tokenList = new tokenListFunction();

export class userController {
  async signUP(req, res) {
    try {
      const { name, email, password } = req.body;
      console.log(name, email, password);
      const result = await userFunction.signup(name, password, email);
      const token = result.getJWT();
      await tokenList.addToken(token);
      return res.status(200).json({
        message: "User Created",
        UserID: result._id,
        token: token,
      });
    } catch (err) {
      console.log(err);
      return res.status(404).json({ message: "Invalid Format" });
    }
  }
  async signIn(req, res) {
    try {
      const { email, password } = req.body;
      const result = await userFunction.findMail(email);
      if (!result) {
        return res
          .status(StatusCodes.UNAUTHORIZED)
          .json({ message: "Not Registered" });
      } else {
        const isValidPassword = await result.isValidPassword(password);
        if (!isValidPassword) {
          return res
            .status(StatusCodes.UNAUTHORIZED)
            .json({ message: "Incorrect Password" });
        }
        result.password = undefined;
        sendToken(result, StatusCodes.ACCEPTED, res);
      }
    } catch (err) {
      console.error(err);
      return res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: "Server Error" });
    }
  }
  async logout(req, res) {
    try {
      const token = req.headers.authorization;

      const result = await tokenList.removeToken(token);
      console.log(result);
      if (!result) {
        console.log("Throwing");
        throw new Error("Invalid Token not removed.");
      }
      console.log("Thrown");
      res.status(StatusCodes.ACCEPTED).json({
        success: true,
        message: "Token successfully removed from list.",
      });
    } catch (error) {
      res
        .status(StatusCodes.INTERNAL_SERVER_ERROR)
        .json({ message: error.message });
    }
  }
}
export default userController;
