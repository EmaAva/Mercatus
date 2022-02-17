const Dispatcher = require('./myDispatcher');
var http = require('http');
var fs = require('fs');
var url = require('url');
var path = require('path');

var server = http.createServer(function (req, res) {
    res.write('Ciao merda');
    res.end();
}).listen(8080);
