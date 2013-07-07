// var express = require('express');

// var app = express();

// app.get('/', function( req, res){
// 	res.send('Hello Express World!');
// });

// app.listen('8080');
// console.log('my first express app is listening ar port: 8080');




var express = require('express');
var app = express();

app.get('/', function(req, res){
  res.send('hello world');
});

app.listen(3000);