
const express = require('express');
const pizzaRoute = express.Router()
/* import the pizza data */
const pizzaList = require('../db/pizza')
/* you'll need two routes:
  - all pizza
  - individual pizza
  - BONUS: can you get individual pizza to work with the `flavorKey` property in the database? Maybe use some array methods... it would be convenient to be able to go to `/pizza/pepperoni` instead of `/pizza/0`.
*/

pizzaRoute.get('/', (req, res) => {
  res.render('pizza/pizza-index', { pizza: pizzaList })
})

pizzaRoute.get('/:id', (req, res) => {
  let choosenPizza = parseInt(req.params.id)
  console.log(pizzaList[choosenPizza])
  res.render('pizza/pizza-single'), { pizza: pizzaList[choosenPizza] }
})


/* export the router */
module.exports = pizzaRoute;