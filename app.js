/* dependencies & app setup */
const express    = require('express');
const path       = require('path');
const logger     = require('morgan');
const app        = express();
const pizza      = require("./db/pizza");
const pizzaRoute = require("./routes/pizza");

/* setting up port & listen */
const PORT = process.env.PORT || 3000;
app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});

/* set the view engine */
app.set('views', './views');
app.set('view engine', 'ejs');

/* error logger, static routes */
app.use(logger('dev'));
app.use('/static', express.static(path.join(__dirname, 'public')));
app.use('/pizza', pizzaRoute);


//test

app.get("/", function(req,res){
	res.render("index", {pizza: pizza});
})

// app.get("/pizza", function(req,res){
// 	res.render("pizza/pizza-index", {pizza: pizza});
// })

// app.get("/pizza/:id", function(req,res){
// 	let id = Number(req.params.id) + 1;
// 	res.render("pizza/pizza-single", {pizza: pizza, id: id});
// })

//test



/* error handler */
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});

// pizza-index.ejs
// <!-- When rendered in the browser, the /pizza view should:
//   - have a list of every pizza flavor
//   - the pizza flavors should also have the location and the picture
// --> 

// pizza-single.ejs
// <!--
//   This view should only display one pizza, with flavor, location, and picture.
// -->

