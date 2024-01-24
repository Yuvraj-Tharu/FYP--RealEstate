const express = require("express");
const app = express();
require("./Models/Config");
const cors = require("cors");
require("dotenv").config();
const userRouter = require("./Routes/user.routes");
const loginRouter = require("./Routes/user.loginRoutes");
const ResetPasswordRouter = require("./Routes/resetpassword.routes");
// const AdminLoginRoutes = require("./Routes/AdminLogin.routes");
app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;

app.use("/", userRouter);
app.use("/", loginRouter);
app.use("/", ResetPasswordRouter);
// app.use("/", AdminLoginRoutes);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
