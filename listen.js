var SerialPort = require("serialport").SerialPort;
var serialPort = new SerialPort("/dev/ttyUSB0", {
    baudrate: 9600//like Serial.begin(9600);
}, false); // this is the openImmediately flag [default is true]
var oldStringCache='';
var serialCache='';
serialPort.open(function () {
    console.log('open');
    serialPort.on('data', function(data) {
        console.log(data);
        /*if(data==' '||data=='\n'||data=='\r'){
            if(String(serialCache)!==''){
                serialCache=Number(serialCache);
                if(!isNaN(serialCache)){
                    console.log('room temperature is '+serialCache+' degrees Celsius.');
                    if(serialCache>=27){
                        console.log('so hot!!!!!');
                        serialPort.write("hot",function(err,results){
                            console.log('results ' + results);
                        })
                    }
                }
                serialCache='';
            }
            oldStringCache=data;
        }else{
            serialCache+=data;
        }*/
    });
    serialPort.write("ls\n", function(err, results) {
        console.log('err ' + err);
        console.log('results ' + results);
    });
    var serialWriteTest = function(){
        serialPort.write(1,function(err,results){
            setTimeout(function(){
                serialPort.write(0);
            },300);
        })
    }
    setInterval(serialWriteTest,1000);
});