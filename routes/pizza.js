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

pizzaRoute.get("/pizza/:flavorKey", function (req, res) {
	let pizzaId = pizza.filter((object) => {
	if(object.flavorKey === req.params.flavorKey) {
 		return object
	}});
	res.render('./pizza/pizza-single', {pizza: pizzaId});
});

module.exports = pizzaRoute;

/* import the pizza data */

/* you'll need two routes:
  - all pizza
  - individual pizza
  - BONUS: can you get individual pizza to work with the `flavorKey` property in the database? Maybe use some array methods... it would be convenient to be able to go to `/pizza/pepperoni` instead of `/pizza/0`.
*/
