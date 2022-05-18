Blockly.Arduino.dht22_config= function(block) {
    var pin = block.getFieldValue('PINOUT');
    // TODO: Assemble JavaScript into code variable.
    //define
    Blockly.Arduino.definitions_['define_dht22_config'] = 
    '#include "DHT.h"'+ '\n'+                       
    '#define DHTPIN ' + pin + '\n'+
    '#define DHTTYPE DHT22'+'\n'+
    'DHT dht(DHTPIN, DHTTYPE);';     
    //include "DHT.h"
    //define DHTPIN 2
    //define DHTTYPE DHT22
    //DHT dht(DHTPIN, DHTTYPE);

   // setup
   Blockly.Arduino.setups_['setup_dht22_config'] =
   '\n  Serial.begin(9600);\n' +
   '  Serial.println(F(DHT22 test!));\n' +
   '  dht.begin();\n';
    // Serial.begin(9600);
    // Serial.println(F("DHTxx test!"));
    // dht.begin();

   //loop
var code = '// Reading temperature \n';
    code += 'float h = dht.readHumidity();\n';  
    code += 'float t = dht.readTemperature();\n';
    code += 'Serial.print(F("Humidity: "));\n';
    code += 'Serial.print(h);\n';
    code += 'Serial.print(F("% Temperature: "));\n';
    code += 'Serial.print(t);\n';

    //float h = dht.readHumidity();
    //float t = dht.readTemperature();

   // Serial.print(F("Humidity: "));
   // Serial.print(h);
   // Serial.print(F("% Temperature: "));
   // Serial.print(t);

    return code;
  };


