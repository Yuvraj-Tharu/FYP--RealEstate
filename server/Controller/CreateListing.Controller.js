const createListing = require("../Models/userListingSchema");

const UserListing = async (req, res) => {
  try {
    const { isVerified, ...rest } = req.body;
    const listing = new createListing({
      ...rest,
      isVerified: isVerified || false,
    });
    let result = await listing.save();
    res.status(200).json({ result: result });
  } catch (error) {
    console.log("Internal error: " + error);
    res.status(500).json({ error: "Internal server  error" });
  }
};

const getUserListing = async (req, res) => {
  if (req.params.id) {
    try {
      const listings = await createListing.find({ userRef: req.params.id });
      console.log(listings);
      res.status(200).json(listings);
    } catch (error) {
      res.status(404).json({ message: "something went wrong" });
    }
  } else {
    res.status(404).json({ message: "User not found" });
  }
};

module.exports = { UserListing, getUserListing };
