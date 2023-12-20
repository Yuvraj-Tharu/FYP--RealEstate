const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema(
  {
    FirstName: {
      typeof: String,
      trim: true,
    },
    LastName: {
      typeof: String,
      trim: true,
    },
    Email: {
      typeof: String,
      require: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    Password: {
      typeof: String,
      require: [true, "password is required"],
      minlength: 5,
      maxlength: 10,
    },
    ConfirmPassword: {
      typeof: String,
      require: [true, "password is required"],
      minlength: 5,
      maxlength: 10,
    },
    otp: {
      typeof: String,
      require: true,
      trim: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("users", UserSchema);

module.exports = User;
