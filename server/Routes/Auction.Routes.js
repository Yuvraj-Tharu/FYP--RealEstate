const express = require("express");

const auctionRoutes = express.Router();
const {
  createAuction,
  displayAuctionList,
  displaySingleAuctionList,
} = require("../AuctionController/Auction");

const { participate } = require("../AuctionController/ParticipateInAuction");

auctionRoutes.post("/api/createAuction", createAuction);
auctionRoutes.get("/api/showAuction", displayAuctionList);
auctionRoutes.get("/api/showSingleAuction/:id", displaySingleAuctionList);
auctionRoutes.post("/api/participate", participate);

module.exports = auctionRoutes;
