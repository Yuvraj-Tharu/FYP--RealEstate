const express = require("express");
const { UserListing } = require("../Controller/CreateListing.Controller");
const createListingRouter = express.Router();

createListingRouter.post("/api/usersListing", UserListing);

module.exports = createListingRouter;
