const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  // .connect("mongodb://127.0.0.1:27017/HamroSampati")
  .connect(process.env.MONGODB_URI)
  .then(console.log("Connected to database"))
  .catch((err) => console.log(err));

module.exports = mongoose;
