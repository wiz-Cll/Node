
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 1337);


app.use( function( req, res, next ){
	console.log('middleware test,');
	next();
} );

app.use( function( req, res ){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello, Middleware World!');
} );

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
