/* setting up router */
const express    = require('express');
const indexRoute = express.Router();
const pizza      = require('../db/pizza');

indexRoute.get('/', function(req, res) {
  res.render('index', {title: "Ada's Pizza"});
});

module.exports = indexRoute;