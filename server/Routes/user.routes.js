// routes/userRoutes.js
const express = require("express");
const { sendOTP, signupUser } = require("../Controller/UserSignup");

const userRouter = express.Router();

userRouter.post("/api/signup-user", signupUser);
userRouter.post("/api/activate-User", sendOTP);

module.exports = userRouter;
