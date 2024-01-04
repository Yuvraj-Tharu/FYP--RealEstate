const express = require("express");
const ResetPasswordRouter = express.Router();
const {
  ForgotPassword,
  resetPassword,
} = require("../Controller/ResetPassword.Controller");

ResetPasswordRouter.post("/forgot-password", ForgotPassword);
ResetPasswordRouter.post("/reset-password", resetPassword);
module.exports = ResetPasswordRouter;
