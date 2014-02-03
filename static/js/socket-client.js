/**
 * Created by boooo on 14-2-3.
 */
var socket = io.connect('http://localhost:8080');
socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
});

socket.on('temperature',function(data){
    console.log(data);
    $('.t-info').text(Math.round(data*10)/10);

})

setInterval(function(){
    socket.emit('get_temperature',{des:'get_temperature'+new Date()});
},500);
