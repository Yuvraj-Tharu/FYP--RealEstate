const nodemailer = require("nodemailer");
const speakeasy = require("speakeasy");
const User = require("../Models/UserSchema");

const ForgotPassword = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    //
    const secret = speakeasy.generateSecret({ length: 20 });
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
      text: `Your Reset password OTP is: ${otp}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        return res.status(500).json({ message: "Failed to send OTP" });
      } else {
        console.log("Email sent: " + info.response);
        return res.status(200).json({ message: "OTP sent successfully" });
      }
    });

    //

    const updatedUser = await User.findByIdAndUpdate(
      user._id,
      { $set: { otp: otp } },
      { new: true } // { new: true } ensures that the updated document is returned
    );

    if (!updatedUser) {
      return res.status(500).json({ message: "Internal Server Error" });
    }
  } catch (error) {
    console.log(error);
  }
};

const resetPassword = async (req, res) => {
  try {
    const { otp, password, confirmPassword } = req.body;
    const existingUser = await User.findOne({ otp: otp });
    if (!existingUser) {
      return res.status(410).json({ message: "Invalid OTP" });
    }
    if (existingUser.otp !== otp) {
      return res.status(412).json({ message: "Invalid OTP" });
    }
    const updatedUser = await User.findByIdAndUpdate(existingUser._id, {
      $set: { password: password, confirmPassword: confirmPassword },
      $unset: { otp: "" },
    });

    if (!updatedUser) {
      return res.status(503).json({ message: "Internal Server Error" });
    }

    if (password === confirmPassword) {
      return res.status(220).json({ message: "new password matched !!" });
    }
    res.status(208).json({ message: "Password changed successfully" });
  } catch (error) {
    // console.log(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { ForgotPassword, resetPassword };
