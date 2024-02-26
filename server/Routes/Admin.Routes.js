const express = require("express");
const AdminRouter = express.Router();
const { adminAprove } = require("../adminController/admin.aprove");

AdminRouter.get("/api/admin-approve", adminAprove);

module.exports = AdminRouter;
