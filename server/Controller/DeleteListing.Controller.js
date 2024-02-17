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

const getListing = async (req, res) => {
  try {
    let data = await Listing.findOne({ _id: req.params.id });

    if (!data) {
      res.status(400).json({ message: "data not found" });
    }

    // console.log(data);
    res.status(200).json({ message: "Show listing data sucessfully", data });
  } catch (error) {
    res
      .status(405)
      .json({ message: "some thing went wrong with the server", error });
  }
};

const updateListing = async (req, res) => {
  try {
    const check = await Listing.findOne({ _id: req.params.id });
    if (!check) {
      res.status(402).json({ message: "user not found" });
    }
    const api = await Listing.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.send(api);
  } catch (error) {}
};

module.exports = { deleteListing, getListing, updateListing };
