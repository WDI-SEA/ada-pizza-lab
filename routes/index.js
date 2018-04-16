/* setting up router */
const express = require('express');
const indexRoute = express.Router();

indexRoute.get('/', function(req, res) {
   let data = {
      title: "Ada's Pizza Express",
      message: "Welcome to Ada's! Proudly serving only the best pizza from around the world.",
      menuUrl: "/pizza"
   }
   res.render('index', data);
});

module.exports = indexRoute;