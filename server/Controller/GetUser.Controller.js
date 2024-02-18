const User = require("../Models/UserSchema");
const getUser = async (req, res) => {
  try {
    const result = await User.findById(req.params.id);
    if (!result) {
      res.status(404).json({ message: "User not found" });
    }
    res
      .status(200)
      .json({ message: "User successfully found", result: result });
  } catch (error) {
    res.status(404).json({ message: "some thing went wrong", error });
  }
};

module.exports = { getUser };
