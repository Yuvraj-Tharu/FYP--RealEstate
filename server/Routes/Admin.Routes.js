const express = require("express");
const AdminRouter = express.Router();
const { adminAprove, adminVerify } = require("../adminController/admin.aprove");
const { showUser } = require("../adminController/showUserData");
const { CountListing } = require("../adminController/showCount");

AdminRouter.get("/api/admin-approve", adminAprove);
AdminRouter.put("/api/admin-verify/:id", adminVerify);
AdminRouter.get("/api/allUsers", showUser);
AdminRouter.get("/api/CountListing", CountListing);

module.exports = AdminRouter;
