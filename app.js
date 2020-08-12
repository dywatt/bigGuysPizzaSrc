const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("stylesheets"));

app.get("/", function(req, res) {
  res.render("index");
});

app.get("/menu", function(req, res) {
  res.render("menu");
});

app.get("/pizza", function(req, res) {
  res.render("pizza");
});

app.get("/gour", function(req, res) {
  res.render("gour");
});

app.get("/bev", function(req, res) {
  res.render("bev");
});

app.get("/houg", function(req, res) {
  res.render("houg");
});

app.get("/ny", function(req, res) {
  res.render("ny");
});

app.get("/pasta", function(req, res) {
  res.render("pasta");
});

app.get("/salads", function(req, res) {
  res.render("salads");
});

app.get("/apps", function(req, res) {
  res.render("apps");
});

const host = "0.0.0.0";
const port = process.env.PORT || 3000;

app.listen(port, host, function() {
  console.log("Server running :)");
});
