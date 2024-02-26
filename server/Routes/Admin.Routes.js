const express = require("express");
const AdminRouter = express.Router();
const { adminAprove, adminVerify } = require("../adminController/admin.aprove");

AdminRouter.get("/api/admin-approve", adminAprove);
AdminRouter.put("/api/admin-verify/:id", adminVerify);

module.exports = AdminRouter;
