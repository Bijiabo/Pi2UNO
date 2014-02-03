/**
 * Created by boooo on 14-2-2.
 */
var uno = require('./listen');
var temperature;
uno(function(t){
    temperature=t;
})
module.exports=function(io){
    io.on('connection', function (socket) {
        socket.emit('news', { hello: temperature });
        socket.on('my other event', function (data) {
            console.log(data);
        });
        socket.on('get_temperature',function(data){
            console.log(data);
            socket.emit('temperature',temperature);
        })
    });
}
