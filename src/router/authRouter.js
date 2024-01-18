import express from "express";
import authController from "../controller/auth.js";

let authRouter = express.Router()

authRouter.post("/signup", authController.signup)
authRouter.post("/signIn", authController.signIn)


export default authRouter