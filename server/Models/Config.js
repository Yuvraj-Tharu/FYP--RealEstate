const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/HamroSampati")
  // .connect(
  //   `mongodb+srv://yuvraj:12345@hamrosampati.u1mmn23.mongodb.net/HamroSampati`
  // )
  .then(console.log("Connected to database"))
  .catch((err) => console.log(err));

module.exports = mongoose;
