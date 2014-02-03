/**
 * Created by boooo on 14-2-2.
 */
var express = require('express'),
    route = require('./core/route'),
    http = require('http'),
    socket = require('./core/sockets'),
    mongo = require('mongo');



var app = express();
var server = http.createServer(app);
app.use(express.static(__dirname + '/static'));
//app.use(express.methodOverride());
app.set('view engine','jade');
route(app);
var io = require('socket.io').listen(server);
socket(io.sockets);
/*io.sockets.on('connection', function (socket) {
    socket.emit('news', { hello: 'world' });
    socket.on('my other event', function (data) {
        console.log(data);
    });
});*/
server.listen(8080);