/* dependencies & app setup */
const express = require('express');
const path = require('path');
const logger = require('morgan');
const app = express();
const indexRoute = require('./routes/index')
const pizzaRoute = require('./routes/pizza')
/* setting up port & listen */
const PORT = process.env.PORT || 3000;

/* set the view engine */
app.set('views', './views');
app.set('view engine', 'ejs');

/* error logger, static routes */
app.use(logger('dev'));
app.use('/static', express.static(path.join(__dirname, 'public')));


app.get("/sample", function(req,res){
	// here's a sample route
})

/* error handler */
// app.get('*', function(req, res) {
//   res.status(404).send({message: 'Oops! Not found.'});
// });

app.use('/', indexRoute)
app.use('/', pizzaRoute)

app.listen(PORT, function() {
  console.log(`listening on port ${PORT}`);
});
