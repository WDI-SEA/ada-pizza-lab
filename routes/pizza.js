/* set up the router */

/* import the pizza data */

/* you'll need two routes:
  - all pizza
  - individual pizza
  - BONUS: can you get individual pizza to work with the `flavorKey` property in the database? Maybe use some array methods... it would be convenient to be able to go to `/pizza/pepperoni` instead of `/pizza/0`.
*/

/* export the router */


const express = require('express');
const pizzaRoute = express.Router();
const pizza = require('../db/pizza');

pizzaRoute.get('/pizza', (req, res) => {
	res.render('./pizza/pizza-index', {pizza:pizza});
})

pizzaRoute.get('/pizza/:flavorKey', (req, res) => {
	const pizzaFlavor = pizza.filter((item) => {
		if(item.flavorKey === req.params.flavorKey)
	{
		return item;
	}});
	res.render('./pizza/pizza-single', {pizza:pizzaFlavor});
});


module.exports = pizzaRoute;