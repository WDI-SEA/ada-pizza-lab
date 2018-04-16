/*  setting up router */
const express = require("express");
const indexRoute = express.Router();

indexRoute.get("/", function(req, res) {
  let data = {
    title: "Ada's Pizza Cafe",
    message: "Welcome, enjoy a hot slice of cheesy goodness",
    menuURL: '/pizza'
  }
  res.render("index",  data );
});

module.exports = indexRoute;
