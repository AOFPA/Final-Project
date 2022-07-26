Blockly.Arduino.relayonemodule = function (block) {


  // ---------------------------------------------------------

  var relaypin = block.getFieldValue('RelayPin');
  var state = block.getFieldValue('State');

  //ส่วน Define
  pin_df = 'RELAY_PIN_' + relaypin
  Blockly.Arduino.definitions_['define_' + pin_df] = '#define ' + pin_df + ' ' + relaypin + '\n';


  //void setup
  Blockly.Arduino.setups_['setup_' + pin_df] = 'pinMode(' + pin_df + ',OUTPUT);\n';

  //void loop
  var code = 'digitalWrite(' + pin_df + ',' + state + ');\n';
  return code;




  //-------------------------------------------------------
};
