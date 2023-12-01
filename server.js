const express = require("express");
const app = express();

// set the view engine to ejs
app.set("view engine", "ejs");

// use res.render to load up an ejs view file

// index page
app.get("/", function (req, res) {
  const friends = [
    { name: "Jason", department: "Engineer", interest: "Singing" },
    { name: "Zeke", department: "Engineer", interest: "Leetcode" },
    { name: "Talitha", department: "Product Management", interest: "Dancing" },
  ];
  const tagline = "These are my top 3 friends in OGP!!! ";

  res.render("pages/index", {
    friends: friends,
    tagline: tagline,
  });
});

// work page
app.get("/work", function (req, res) {
  const works = [
    {
      name: "PaySG",
      description: "PaySG stuff",
    },
    {
      name: "Paulfessor",
      description: "Teach PM stuff",
    },
  ];

  res.render("pages/work", {
    works: works,
  });
});

// about page
app.get("/interest", function (req, res) {
  res.render("pages/interest");
});

app.listen(3000);
console.log("Server is listening on port 3000");
