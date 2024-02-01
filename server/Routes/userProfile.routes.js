const express = require("express");
const { updateProfile } = require("../Controller/Update.Profile.Controller");

const UserProfileUpdateRouter = express.Router();

UserProfileUpdateRouter.post("/api/userProfileUpdate/:id", updateProfile);

module.exports = UserProfileUpdateRouter;
