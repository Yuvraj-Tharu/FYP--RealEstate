const User = require("../Models/UserSchema");
const bcrypt = require("bcrypt");

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });
    console.log("exists user", existingUser);

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    if (!existingUser.isVerified) {
      return res.status(406).json({ message: "user not verified" });
    }

    const matchPassword = await bcrypt.compare(password, existingUser.password);

    if (!matchPassword) {
      return res.status(401).json({ message: "Password mismatch" });
    }
    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error("Error in userLogin:", error);
    res.status(500).json({ message: "Something went wrong" });
  }
};

module.exports = { userLogin };
