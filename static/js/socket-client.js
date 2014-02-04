/**
 * Created by boooo on 14-2-3.
 */
var socket = io.connect('http://'+window.location.host);
socket.on('news', function (data) {
    console.log(data);
    socket.emit('my other event', { my: 'data' });
});

socket.on('temperature',function(data){
//    console.log(data);
    var t=Math.round(data*10)/10;
    if(/^[0-9]+$/.test(t)){t=t+'.0';}
    $('.t-info').text(t);

})

setInterval(function(){
    socket.emit('get_temperature',{des:'get_temperature'+new Date()});
},500);
