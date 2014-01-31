var SerialPort = require("serialport").SerialPort
var serialPort = new SerialPort("/dev/ttyUSB0", {
    baudrate: 9600//like Serial.begin(9600);
}, false); // this is the openImmediately flag [default is true]
var oldStringCache='';
var serialCache='';
serialPort.open(function () {
    console.log('open');
    serialPort.on('data', function(data) {
        if(data==' '||data=='\n'||data=='\r'){
            if(String(serialCache)!==''){
                serialCache=Number(serialCache);
                if(!isNaN(serialCache)){
                    console.log('room temperature is '+serialCache+' degrees Celsius.');
                }
                serialCache='';
            }
            oldStringCache=data;
        }else{
            serialCache+=data;
        }
    });
    serialPort.write("ls\n", function(err, results) {
        console.log('err ' + err);
        console.log('results ' + results);
    });
});