const express = require("express");

const auctionRoutes = express.Router();
const {
  createAuction,
  displayAuctionList,
  displaySingleAuctionList,
  displayUniqueSingleList,
  deleteAuctionListing,
  updateAuctionListing,
} = require("../AuctionController/Auction");

const { participate } = require("../AuctionController/ParticipateInAuction");

auctionRoutes.post("/api/createAuction", createAuction);
auctionRoutes.get("/api/showAuction", displayAuctionList);
auctionRoutes.get("/api/showSingleAuction/:id", displaySingleAuctionList);
auctionRoutes.post("/api/participate", participate);
auctionRoutes.get("/api/showuniqueAuction/:id", displayUniqueSingleList);
auctionRoutes.delete("/api/deleteAuctionListing/:id", deleteAuctionListing);
auctionRoutes.put("/api/updateAuctionListing/:id", updateAuctionListing);

module.exports = auctionRoutes;
