var http = require('http');

var app = http.createServer(function( req, res){
	res.writeHead(200,{'Content-Type': 'text/plain'});
	res.end('hello, http wolrd');
});

var port = 8080;
var ipAddress = '127.0.0.1';
app.listen( port, ipAddress);
console.log('app is lintening at port:' +　port + ' of this address: ' + ipAddress);