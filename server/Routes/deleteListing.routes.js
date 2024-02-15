const express = require("express");
const { deleteListing } = require("../Controller/DeleteListing.Controller");
const deleteRouter = express.Router();

deleteRouter.delete("/api/deleteListing/:id", deleteListing);

module.exports = deleteRouter;
