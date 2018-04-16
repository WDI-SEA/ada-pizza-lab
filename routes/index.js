/* setting up router */
const express = require('express');
const indexRoute = express.Router();
const pizza = require('../db/pizza.js');

indexRoute.get('/', function(req, res) {
  res.render('index', {pizza:pizza});

  });

module.exports = indexRoute;