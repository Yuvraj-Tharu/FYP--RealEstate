const express = require("express");
const app = express();
require("./Models/Config");
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 3000;
app.get("/", (req, res) => {
  res.send("Hellow BBBB");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
