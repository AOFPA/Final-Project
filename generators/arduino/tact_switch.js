Blockly.Arduino['buttonState'] = function(block) {
    var dropdown_unit = block.getFieldValue('unit');
    // TODO: Assemble JavaScript into code variable.
    var code = dropdown_unit;
    // TODO: Change ORDER_NONE to the correct strength.
    return [code, Blockly.Arduino.ORDER_NONE];
};

Blockly.Arduino.buttonState_Read = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_button_State = this.getTitleValue('button_State');
    //var value_num = Blockly.Arduino.valueToCode(this, 'NUM', Blockly.Arduino.ORDER_ATOMIC);
    Blockly.Arduino.setups_['setup_output'+dropdown_pin] = 'pinMode('+dropdown_pin+', INPUT);';
    var code = dropdown_button_State + '= digitalRead(' + dropdown_pin + ');\n';
    return code;
  };
  Blockly.Arduino.buttonPin = function() {
    var dropdown_pin = this.getFieldValue('PIN');
    var dropdown_buttonPin = this.getTitleValue('buttonPin');
    var dropdown_button_State = this.getTitleValue('button_State');
    Blockly.Arduino.definitions_['define_u8g' + dropdown_pin + dropdown_button_State] = 'int'+ ' ' + dropdown_buttonPin +' '+ '='+' '+dropdown_pin +';'+'\n'+ 
                                                                                        'int'+ ' ' + dropdown_button_State +' '+ '='+' '+ '0'+ ';' ;
    Blockly.Arduino.setups_['setup_input'] = 'pinMode('+dropdown_buttonPin+', INPUT);';
    var code =dropdown_button_State + '= digitalRead(' + dropdown_buttonPin + ');\n';
    return code;
  };



  