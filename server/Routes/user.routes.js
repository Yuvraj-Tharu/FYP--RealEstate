// routes/userRoutes.js
const express = require("express");
const { sendOTP, signupUser } = require("../Controller/UserSignup");

const userRouter = express.Router();

userRouter.post("/signup-user", signupUser);
userRouter.post("/activate-User", sendOTP);

module.exports = userRouter;
