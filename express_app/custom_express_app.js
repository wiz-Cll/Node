var express = require('express');

var app = express();

app.get('/a', function( req, res){
	res.send('Hello Express World!' +  req.url +' -|- ' + req.method );
});



var port = 3030;
app.listen( port );
console.log('my first express app is listening ar port:' + port);

