/* dependencies & app setup */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();

/* setting up port & listen */
app.listen(process.env.PORT || 3000, function() {
  console.log(`listening on port`);
});

/* set the view engine */
//app.set('views', './views');
app.set('view engine', 'ejs');

/* error logger, static routes */
app.use(logger('dev'));
app.use('/static', express.static(path.join(__dirname, 'public')));

// HOME
app.get('/', function(req,res){
	res.render('index');
});

// -------------
// Includes the pizza routes
app.use('/pizza', require('./routes/pizza'));

// -------------

/* error handler */
app.get('*', function(req, res) {
  res.status(404).send({message: 'Oops! Not found.'});
});









