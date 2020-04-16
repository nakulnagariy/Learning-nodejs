const path = require("path");
const express = require("express");
const hbs = require("hbs");

const app = express();

// Define path for express config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

// Setup handlebars and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

// Setup static directory to serve
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Home Page",
    author: "Nakul Nagariya",
    name: "Nakul Nagariya",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    src: "/img/DSC_0328.JPG",
    name: "Nakul Nagariya",
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help Page",
    name: "Nakul Nagariya",
  });
});

app.get("/weather", (req, res) => {
  res.send({
    forcast: "its snowing outside",
    location: "bengaluru",
  });
});

app.get("/help/*", (req, res) => {
  res.render("404", {
    name: "Nakul Nagariya",
    message: "Help blog not found!",
    title: "Blog not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    name: "Nakul Nagariya",
    message: "Page not found!",
    title: "404 ",
  });
});

app.listen(3000, () => {
  console.log("Your server started on port 3000");
});
