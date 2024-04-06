const Auction = require("../Models/AuctionListingSchema");

const createAuction = async (req, res) => {
  try {
    const {
      title,
      description,
      address,
      bathrooms,
      bedrooms,
      furnished,
      parking,
      imageUrl,
      userRef,
      MinimumPrice,
      time,
    } = req.body;

    const startTime = new Date();
    const endTime = new Date(startTime.getTime() + time * 60000);

    const auction = new Auction({
      title,
      description,
      address,
      bathrooms,
      bedrooms,
      furnished,
      parking,
      imageUrl,
      userRef,
      MinimumPrice,
      time: endTime,
    });

    const savedAuction = await auction.save();

    res.status(201).json(savedAuction);
  } catch (error) {
    console.error("Error creating auction:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

const displayAuctionList = async (req, res) => {
  try {
    const result = await Auction.find();
    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(203).json({ message: "result not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error", error });
  }
};

const displaySingleAuctionList = async (req, res) => {
  try {
    const result = await Auction.findOne({ _id: req.params.id });
    if (result) {
      return res.status(200).json(result);
    } else {
      return res.status(203).json({ message: "result not found" });
    }
  } catch (error) {
    res.status(500).json({ message: "sth went wrong", error });
  }
};

module.exports = {
  createAuction,
  displayAuctionList,
  displaySingleAuctionList,
};
