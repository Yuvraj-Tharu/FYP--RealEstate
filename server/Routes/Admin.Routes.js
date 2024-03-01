const express = require("express");
const AdminRouter = express.Router();
const {
  adminAprove,
  adminVerify,
  adminCancel,
} = require("../adminController/admin.aprove");
const { showUser } = require("../adminController/showUserData");
const { CountListing } = require("../adminController/showCount");

AdminRouter.get("/api/admin-approve", adminAprove);
AdminRouter.put("/api/admin-verify/:id", adminVerify);
AdminRouter.put("/api/admin-cancel/:id", adminCancel);
AdminRouter.get("/api/allUsers", showUser);
AdminRouter.get("/api/CountListing", CountListing);

module.exports = AdminRouter;
