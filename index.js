const express = require("express");
const app = express();
const router = express.Router();
const port = 3000;
const path = require("path");

app.use(express.static(path.join(__dirname, "client/contact_us")));
app.use(express.static(path.join(__dirname, "client/reach_your_audience")));
app.use(express.static(path.join(__dirname, "client/whats_new")));
app.use(express.static(path.join(__dirname, "client/template_library")));
app.use(
  express.static(path.join(__dirname, "client/individual_template_page"))
);
app.use(
  express.static(path.join(__dirname, "client/template_block_generator"))
);

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
app.get("/whats-new", function (req, res) {
  res.sendFile(publicPath + "/whats_new/index.html");
});
app.get("/template-library", function (req, res) {
  res.sendFile(publicPath + "/template_library/index.html");
});
app.get("/template-library/template", function (req, res) {
  res.sendFile(publicPath + "/individual_template_page/index.html");
});
app.get("/template-library/block-generator", function (req, res) {
  res.sendFile(publicPath + "/template_block_generator/index.html");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
