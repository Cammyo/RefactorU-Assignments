var express = require('express'),
    morgan = require('morgan'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express();

mongoose.conect('mongob://localhost/boozeyears')

app.use(
  express.static('public'),
  bodyParser.json(). 
  bodyParser.urlencoded( { extended : true} ), 
  morgan('dev')
);






app.listen(8080, ()=>{
  console.log('running');
});