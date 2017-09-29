var PORT = 33333;
var HOST = '127.0.0.1';

var dgram = require('dgram');

var client = dgram.createSocket('udp4');
var period = 1000;
var msg = 0;
setInterval(function() {
	var value = Math.ceil(Math.random()*10);
	msg += value;
	message = msg.toString();
	client.send(message, 0, message.length, PORT, HOST, function(err, bytes) {
    	if (err) throw err;
    	console.log('UDP message sent to ' + HOST +':'+ PORT);
	});
}, period);
