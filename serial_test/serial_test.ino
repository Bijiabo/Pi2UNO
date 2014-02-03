 #define LED 13
 void setup(){
   pinMode(13,OUTPUT);
   Serial.begin(9600);
 }
 void loop(){
   //read temperature
   int n=analogRead(0);
   float c=n* (5.0 / 1023.0*100);
   Serial.println('s');
   Serial.println(c);
   //serial,read
   if(Serial.available()>0){
     int data = Serial.read();
     Serial.println(data);
     if(data==1){
       digitalWrite(LED,HIGH);
     }else if(data==0){
       digitalWrite(LED,LOW);
     }
   }else{
//     digitalWrite(LED,LOW);
   }
   //delay
   delay(100);
 }
