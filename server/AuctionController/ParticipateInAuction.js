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

// Maximum number of bids allowed per minute per user
const MAX_BIDS_PER_MINUTE = 1;

// Maintain a map to track user bids with timestamps
const userBidTimestamps = new Map();

const participate = async (req, res) => {
  try {
    const { userDetails, auctionId, bidAmount } = req.body;

    // Check if the user has reached the bid limit
    const currentTime = Date.now();
    if (userBidTimestamps.has(userDetails)) {
      const lastBidTime = userBidTimestamps.get(userDetails);
      const timeDifference = currentTime - lastBidTime;
      if (timeDifference < 60000) {
        // 60,000 milliseconds = 1 minute
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

module.exports = { participate };
