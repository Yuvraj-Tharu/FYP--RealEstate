const UserSchema = require("../Models/UserSchema");
const speakeasy = require("speakeasy");
require("dotenv").config();
const email = process.env.Email;
const password = process.env.Password;

const secret = speakeasy.generateSecret({ length: 20 });
