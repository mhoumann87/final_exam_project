// get the things we need
var express = require('express');
var app     = express();
var path = require('path');
var config = require('./config');

// set the public folder to serve public assets
app.use(express.static(__dirname + '/public'));

// set up our one route to the index.html file
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

// Initialize the app
var server = app.listen(config.port, function () {
	var port = server.address().port;
	console.log("App now running on port", port);
});
