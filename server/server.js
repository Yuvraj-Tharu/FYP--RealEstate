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

const MessageRouter = require("./Routes/Message.Routes");

// ?
const AdminRouter = require("./Routes/Admin.Routes");

const MsgRoutes = require("./Routes/Msg.Routes");
const auctionRoutes = require("./Routes/Auction.Routes");
app.use(express.json());
app.use(cors());
const path = require("path");
// const __dirname = path.resolve();

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

app.use("/", AdminRouter);

app.use("/", MessageRouter);

app.use("/", MsgRoutes);
app.use("/", auctionRoutes);

// app.use(express.static(path.join(__dirname, "/client/dist")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
// });

const fs = require("fs");

const staticPath = path.join(__dirname, "client", "dist");
console.log("Static files are served from:", staticPath);

app.use(express.static(staticPath));

app.get("*", (req, res) => {
  const indexPath = path.join(staticPath, "index.html");
  console.log("Sending file:", indexPath);

  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath, (err) => {
      if (err) {
        console.error("Error sending file:", err);
        res.status(err.status || 500).end();
      }
    });
  } else {
    console.error("Index file does not exist:", indexPath);
    res.status(404).send("File not found");
  }
});
app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
