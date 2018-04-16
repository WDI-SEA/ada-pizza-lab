/* setting up router */
const express = require('express');
const app = express();
const pizza = require('../db/pizza.js');
//create express object
const indexRoute = express.Router();

indexRoute.get('/', function(req, res) {

  res.render('index', {pizza: pizza});
});

module.exports = indexRoute;