// const AuctionParticipate = require("../Models/AuctionParticipateSchema");

// const participate = async (req, res) => {
//   try {
//     const { userDetails, auctionId, bidAmount } = req.body;

//     const currentBid = await AuctionParticipate.findOne({
//       userDetails,
//       auctionId,
//     });

//     if (currentBid) {
//       currentBid.bidAmount = bidAmount;
//       await currentBid.save();
//       return res.status(200).json(currentBid);
//     }

//     const newBid = new AuctionParticipate({
//       userDetails,
//       auctionId,
//       bidAmount,
//     });

//     const savedBid = await newBid.save();

//     return res.status(201).json(savedBid);
//   } catch (error) {
//     console.error("Error participating in auction:", error);
//     return res.status(500).json({ error: "Internal server error" });
//   }
// };

// module.exports = { participate };

const AuctionParticipate = require("../Models/AuctionParticipateSchema");

const MAX_BIDS_PER_MINUTE = 1;

const userBidTimestamps = new Map();

const participate = async (req, res) => {
  try {
    const { userDetails, auctionId, bidAmount } = req.body;

    const currentTime = Date.now();
    if (userBidTimestamps.has(userDetails)) {
      const lastBidTime = userBidTimestamps.get(userDetails);
      const timeDifference = currentTime - lastBidTime;
      if (timeDifference < 60000) {
        return res
          .status(429)
          .json({ error: "Too many requests. Please try again later." });
      }
    }

    // Save the bid and update the timestamp
    userBidTimestamps.set(userDetails, currentTime);

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

const getHighestBidder = async (req, res) => {
  try {
    const { auctionId } = req.params;
    const highestBidAuction = await AuctionParticipate.findOne({ auctionId })
      .sort({ bidAmount: -1 })
      .populate("userDetails")
      .limit(1);

    if (!highestBidAuction) {
      return res.status(404).json({ error: "No bids found" });
    }

    const { userDetails, bidAmount } = highestBidAuction;

    return res.status(200).json({ userDetails, bidAmount });
  } catch (error) {
    console.error("Error getting highest bidder:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = { participate, getHighestBidder };
