const nodemailer = require("nodemailer");
const speakeasy = require("speakeasy");
const User = require("../Models/UserSchema");
const jwk = require("jsonwebtoken");
const SECRET_KEY = "NOTESAPI";

const secret = speakeasy.generateSecret({ length: 20 });

const signupUser = async (req, res) => {
  try {
    const { firstName, lastName, userName, email, password, confirmPassword } =
      req.body;

    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      res.status(404).json({ message: "user already exists" });
    } else {
      if (password !== confirmPassword) {
        return res.status(403).json({ message: "password not match" });
      } else {
        const transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: "yuvrajtharu123@gmail.com",
            pass: "wqot zipt zmje jhum",
          },
        });

        const otp = speakeasy.totp({
          secret: secret.base32,
          encoding: "base32",
        });

        const mailOptions = {
          from: "yuvrajtharu123@gmail.com",
          to: email,
          subject: "Your OTP",
          text: `Your verification OTP is: ${otp}`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            res.status(500).json({ message: "Failed to send OTP" });
          } else {
            // console.log("Email sent: " + info.response);
            res.status(200).json({ message: "OTP sent successfully" });
          }
        });

        const result = await User.create({
          firstName,
          lastName,
          userName,
          email,
          password,
          confirmPassword,
          otp,
        });
        // console.log(" result:", result);

        jwk.sign({ result }, SECRET_KEY, { expiresIn: "2h" }, (err, token) => {
          if (err) {
            res
              .status(410)
              .json({ message: "some thing went wrong with the token" });
          } else {
            res.status(200).json({ result: result, token });
            console.log(result, token);
          }
        });
      }
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "something went wrong " });
  }
};

const sendOTP = async (req, res) => {
  try {
    const { otp } = req.body;
    const existingOTP = await User.findOne({ otp: otp });

    if (existingOTP) {
      if (existingOTP.otp === otp) {
        const UpdateUser = await User.findByIdAndUpdate(existingOTP._id, {
          $set: { isVerified: true },
          $unset: { otp: "" },
        });

        res.status(200).json({ message: "User signed up, OTP matched!" });
      } else {
        res.status(401).json({ message: "Invalid OTP" });
      }
    } else {
      res.status(404).json({ message: "User not found with provided OTP" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { signupUser, sendOTP };
