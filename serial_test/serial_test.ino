 #define LED 13
 void setup(){
   pinMode(13,OUTPUT);
   Serial.begin(9600);
 }
 void loop(){
//   Serial.print("\nhelloworld\n");
   int n=analogRead(0);
   int light=analogRead(1);
   float c=n* (5.0 / 1023.0*100);
   Serial.println(c);
   Serial.println(light);
   delay(100);
 }
