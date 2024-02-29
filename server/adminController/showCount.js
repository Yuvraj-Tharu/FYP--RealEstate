const listing = require("../Models/userListingSchema");

const CountListing = async (req, res) => {
  try {
    const data = await listing.find({ isVerified: true });
    if (!data) {
      res.status(404).json({ message: "Couldn't find data" });
    }
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: "sth went wrong" });
  }
};

module.exports = { CountListing };
