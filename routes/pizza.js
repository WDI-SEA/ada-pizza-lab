/* set up the router */
const express = require('express');
const indexRoute = express.Router();

/* import the pizza data */
const pizza = require('../db/pizza.js');

// route to all pizzas
indexRoute.get("/", function(req,res) {
   res.render('pizza/pizza-index', { pizza: pizza });
})

// route to individual pizzas, providing ability to type in pizza flavor rather than only id
indexRoute.get("/:id", function(req,res) {
   let id = req.params.id;
   let idInt = parseInt(id);
   let individualPizza;
   
   if (isNaN(idInt)) {
      pizza.forEach( (item) => {
         if (id === item.flavorKey) {
            individualPizza = item;
         }
      })
   } else if (idInt < pizza.length) {
      individualPizza = pizza[id];
   } else {
      res.status(404).send({message: 'Oops! Not found.'});
   };

   res.render('pizza/pizza-single', { individualPizza });  
})

/* export the router */
module.exports = indexRoute;