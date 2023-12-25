const express = require("express");
const { userLogin } = require("../Controller/User.LoginController");

const loginRoutes = express.Router();

loginRoutes.post("/login-user", userLogin);

module.exports = loginRoutes;
