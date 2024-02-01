const User = require("../Models/UserSchema");
const bcrypt = require("bcrypt");

const updateProfile = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword, avatar } =
      req.body;
    const userId = req.params.id;
    const existingUser = await User.findOne({ _id: userId });

    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }

    const updateFields = {};

    if (firstName !== undefined) updateFields.firstName = firstName;
    if (lastName !== undefined) updateFields.lastName = lastName;
    if (password !== undefined) {
      const hashPassword = await bcrypt.hash(password, 10);
      updateFields.password = hashPassword;
    }
    if (confirmPassword !== undefined) {
      const hashConfirmPassword = await bcrypt.hash(confirmPassword, 10);
      updateFields.confirmPassword = hashConfirmPassword;
    }
    if (avatar !== undefined) updateFields.avatar = avatar;
    if (email !== undefined) updateFields.email = email;

    const updatedUser = await User.findByIdAndUpdate(
      existingUser._id,
      { $set: updateFields },
      { new: true }
    );

    if (!updatedUser) {
      return res
        .status(503)
        .json({ message: "You can only update with your own account" });
    }

    res.status(208).json({
      message: "Update user successfully",
      result: updatedUser,
    });
  } catch (error) {
    console.error("Internal Server Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { updateProfile };
