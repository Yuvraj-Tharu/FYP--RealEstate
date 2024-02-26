const approve = require("../Models/userListingSchema");

const adminAprove = async (req, res) => {
  try {
    const listings = await approve.find({ isVerified: false });
    console.log(listings);
    if (listings.length > 0) {
      return res.status(200).json({ message: "Success", listings });
    } else {
      return res.status(404).json({ message: "No unverified listings found" });
    }
  } catch (error) {
    console.error("Error while fetching unverified listings:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { adminAprove };
