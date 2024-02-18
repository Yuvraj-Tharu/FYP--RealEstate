const express = require("express");
const app = express();
require("./Models/Config");
const cors = require("cors");
require("dotenv").config();
const userRouter = require("./Routes/user.routes");
const loginRouter = require("./Routes/user.loginRoutes");
const ResetPasswordRouter = require("./Routes/resetpassword.routes");
// const AdminLoginRoutes = require("./Routes/AdminLogin.routes");
const UserProfileUpdateRouter = require("./Routes/userProfile.routes");
const createListingRouter = require("./Routes/createListing.routes");
// const getListingRouter = require("./Routes/createListing.routes");
const deleteRouter = require("./Routes/deleteListing.routes");

const getUserRouter = require("./Routes/getUser.routes");
const searchRoutes = require("./Routes/searchListing.routes");

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.use("/", userRouter);
app.use("/", loginRouter);
app.use("/", ResetPasswordRouter);
app.use("/", UserProfileUpdateRouter);
// app.use("/", AdminLoginRoutes);
app.use("/", createListingRouter);
// app.use("/", getListingRouter);

app.use("/", deleteRouter);

app.use("/", getUserRouter);
app.use("/", searchRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
