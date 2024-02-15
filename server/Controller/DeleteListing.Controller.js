const Listing = require("../Models/userListingSchema");

const deleteListing = async (req, res) => {
  try {
    const data = await Listing.deleteOne({ _id: req.params.id });
    if (!data) {
      res.status(400).json({ message: "data is not found" });
    }
    res.status(200).json({ message: "data is successfully deleted" + data });
  } catch (error) {
    res.status(402).json({ message: "Error deleting", error });
  }
};

module.exports = { deleteListing };
