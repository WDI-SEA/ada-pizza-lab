/* set up the router */
const express = require('express');
const app = express();
const pizza = require('../db/pizza.js');
const pizzaRoute = express.Router();

//rending pizza array
pizzaRoute.get('/pizza', function(req, res) {
	// let pizzaArray = JSON.stringfy(pizza)
	res.render('./pizza/pizza-index', {pizza: pizza});
});

//rending single pizza
pizzaRoute.get('/pizza/:id', function (req, res) {
	res.render('./pizza/pizza-single', {pizza: pizza});
});

module.exports = pizzaRoute;

/* import the pizza data */

/* you'll need two routes:
  - all pizza
  - individual pizza
  - BONUS: can you get individual pizza to work with the `flavorKey` property in the database? Maybe use some array methods... it would be convenient to be able to go to `/pizza/pepperoni` instead of `/pizza/0`.
*/
