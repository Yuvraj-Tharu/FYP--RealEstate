const AuctionParticipate = require("../Models/AuctionParticipateSchema");

const participate = async (req, res) => {
  try {
    const { userDetails, auctionId, bidAmount } = req.body;

    // Check if the user has already participated in this auction
    const existingParticipation = await AuctionParticipate.findOne({
      userDetails,
      auctionId,
    });

    // If participation exists, return a 400 response
    if (existingParticipation) {
      return res
        .status(400)
        .json({ message: "You have already participated in this auction" });
    }

    // Create a new participation entry
    const participation = new AuctionParticipate({
      userDetails,
      auctionId,
      bidAmount,
    });

    // Save the new participation entry
    const savedParticipation = await participation.save();

    // Respond with the saved participation entry
    return res.status(201).json(savedParticipation);
  } catch (error) {
    console.error("Error participating in auction:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { participate };
