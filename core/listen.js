var SerialPort = require("serialport").SerialPort;
var serialPort = new SerialPort("/dev/ttyUSB0", {
    baudrate: 9600//like Serial.begin(9600);
}, false); // this is the openImmediately flag [default is true]
var oldStringCache='';
var serialCache='';
module.exports=function(callback){
    serialPort.open(function () {
        console.log('open');
        serialPort.on('data', function(data) {
            var data2buffer=new Buffer(data);
            console.log(data2buffer.toString('utf8',0));
            if(data=='^'){
                console.log('^^^^^^^^^^^^^^^^');
            }
            if(data=='s'){
                if(String(serialCache)!==''){
                    serialCache=Number(serialCache);
                    if(!isNaN(serialCache)){
                        //console.log('room temperature is '+serialCache+' degrees Celsius.');
//                        return serialCache;
                        callback(serialCache);
                        if(serialCache>=27){
                            /*console.log('so hot!!!!!');
                            serialPort.write("hot",function(err,results){
                                console.log('results ' + results);
                            })*/
                        }
                    }
                    serialCache='';
                }
                oldStringCache=data;
            }else{
                serialCache+=data;
            }
        });
        setInterval(function(){
            serialPort.write("^1$",function(err,results){
                console.log('writed');
            });
        },500);
        setInterval(function(){
            serialPort.write("^0$",function(err,results){
                console.log('writed');
            });
        },750);
    });
}
