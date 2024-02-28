const express = require("express");
const AdminRouter = express.Router();
const { adminAprove, adminVerify } = require("../adminController/admin.aprove");
const { showUser } = require("../adminController/showUserData");

AdminRouter.get("/api/admin-approve", adminAprove);
AdminRouter.put("/api/admin-verify/:id", adminVerify);
AdminRouter.get("/api/allUsers", showUser);

module.exports = AdminRouter;
