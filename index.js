const express = require("express");
const app = express();
const router = express.Router();
const port = 3001;
const path = require("path");

app.use(express.static(path.join(__dirname, "client/reach_your_audience")));
app.use(express.static(path.join(__dirname, "client/contact_us")));

var publicPath = path.join(__dirname, "client");

router.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/"));
});

app.get("/contact-us", function (req, res) {
  res.sendFile(publicPath + "/contact_us/index.html");
});
app.get("/reach-your-audience", function (req, res) {
  res.sendFile(publicPath + "/reach_your_audience/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
