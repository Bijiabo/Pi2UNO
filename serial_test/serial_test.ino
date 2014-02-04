#define LED 13
String serialData="";
String charData="";
int dataState = 0;//0->close;1->open
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
  if(Serial.available()>0){
    char charData = Serial.read();
    if(charData=='^'){
      dataState=1;
    }
    else if(charData=='$'){
      dataState=0;
      serialData = "";
    }
    else if(dataState==1){
      serialData += char(charData);
    }
    //Serial.println(serialData);
  }
  
  if(serialData=="1"){
    digitalWrite(LED,HIGH);
  }
  else if(serialData=="0"){
    digitalWrite(LED,LOW);
  }
  //delay
  delay(100);
}

