/* set up the router */
const express    = require('express');
const pizzaRoute = express.Router();
/* import the pizza data */
const pizza = require("../db/pizza");

/* you'll need two routes:
  - all pizza
  - individual pizza
  - BONUS: can you get individual pizza to work with the `flavorKey` property in the database? Maybe use some array methods... it would be convenient to be able to go to `/pizza/pepperoni` instead of `/pizza/0`.
*/

pizzaRoute.get("/", function(req,res){
	res.render("pizza/pizza-index", {pizza: pizza});
})

pizzaRoute.get("/:id", function(req,res){
	let id = req.params.id;
	console.log("req.params.id type is ", typeof id);
	res.render("pizza/pizza-single", {pizza: pizza, id: id});
})

/* export the router */
module.exports = pizzaRoute;