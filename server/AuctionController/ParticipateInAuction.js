const AuctionParticipate = require("../Models/AuctionParticipateSchema");

const participate = async (req, res) => {
  try {
    const { userDetails, auctionId, bidAmount } = req.body;

    const existingParticipation = await AuctionParticipate.findOne({
      userDetails,
      auctionId,
    });

    if (existingParticipation) {
      return res
        .status(400)
        .json({ message: "You have already participated in this auction" });
    }

    const participation = new AuctionParticipate({
      userDetails,
      auctionId,
      bidAmount,
    });

    const savedParticipation = await participation.save();

    return res.status(201).json(savedParticipation);
  } catch (error) {
    console.error("Error participating in auction:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { participate };
