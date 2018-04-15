
const express = require('express');
const pizzaRoute = express.Router();
const pizza = require('../db/pizza');

pizzaRoute.get('/pizza', (req, res) => {
	res.render('./pizza/pizza-index', {pizza:pizza});
})


pizzaRoute.get('/pizza/:flavorKey', (req, res) => {
	const pizzaFilter = pizza.filter((element) => {
		if (element.flavorKey === req.params.flavorKey) {
		return element;
	}});
	res.render('./pizza/pizza-single', {pizza: pizzaFilter});
});

module.exports = pizzaRoute;