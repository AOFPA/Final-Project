Blockly.Arduino.TEMP_SENSOR = function() {
    
    var dropdown_TEMP_SENSOR = this.getTitleValue('PIN');

    Blockly.Arduino.definitions_['define_TEMP_SENSOR'] =
    '#include <OneWire.h>\n#include <DallasTemperature.h>\nOneWire oneWire(' + "ONE_WIRE_BUS" + ');\nDallasTemperature sensors(&oneWire);\n';
    Blockly.Arduino.definitions_['define_u8g' + dropdown_TEMP_SENSOR] = '#define ONE_WIRE_BUS_'+dropdown_TEMP_SENSOR+ ' '  + dropdown_TEMP_SENSOR ;
    Blockly.Arduino.setups_['setup_u8g'] = 'sensors.begin();'
    var code= '';
    return code;
  };

  Blockly.Arduino['value_temp_senssor'] = function(block) {
    var dropdown_unit = block.getFieldValue('unit');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_unit + ';\n';
    // TODO: Change ORDER_NONE to the correct strength.
    return code;
};

Blockly.Arduino.temp_senssor_18B20 = function(){
    var dropdown_VALUE_TEMP_SENSOR = this.getTitleValue('VALUE_TEMP_SENSOR');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_VALUE_TEMP_SENSOR;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code];
};

