const createListing = require("../Models/userListingSchema");

const UserListing = async (req, res) => {
  try {
    const listing = new createListing(req.body);
    let result = await listing.save();
    res.status(200).json({ result: result });
  } catch (error) {
    console.log("Internal error: " + error);
    res.status(500).json({ error: "Internal server  error" });
  }
};

module.exports = { UserListing };
