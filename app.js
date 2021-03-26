const express = require("express");
const bodyParser = require("body-parser");

if (typeof localStorage === "undefined" || localStorage === null) {
  var LocalStorage = require("node-localstorage").LocalStorage;
  localStorage = new LocalStorage("./scratch");
}

var app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("home");
});
app.get("/participate", (req, res) => {
  res.render("participate", { validate: 1 });
});
app.get("/sponsors", (req, res) => {
  res.render("sponsor");
});
app.get("/gallery", (req, res) => {
  res.render("gallery");
});
app.get("/faq", (req, res) => {
  res.render("faq");
});
app.get("/event", (req, res) => {
  res.render("event");
});
app.get("/campus", (req, res) => {
  res.render("campus");
});
app.get("/reachus", (req, res) => {
  res.render("reachus");
});
app.get("/team", (req, res) => {
  res.render("team");
});

app.get("/register", (req, res) => {
  res.render("participate");
});

app.get("/adminlogin", (req, res) => {
  res.render("adminlogin");
});

app.get("*", (req, res) => {
  res.send("Error 404: Not Found!!");
});

app.listen(5000, () => {
  console.log("Connected to Server on port 5000");
});
