Blockly.Arduino.LCD_TEST = function() {
    var dropdown_LCD_I2C = this.getTitleValue('special');
    var dropdown_LCD_I2C_firstZide = this.getTitleValue('firstZide');
    var dropdown_LCD_I2C_seconZide = this.getTitleValue('seconZide');
    Blockly.Arduino.definitions_['define_u8g' + dropdown_LCD_I2C] = '#include <Wire.h>\n#include <LiquidCrystal_I2C.h>\nLiquidCrystal_I2C lcd(' + dropdown_LCD_I2C + ',' + dropdown_LCD_I2C_firstZide+ ','+ dropdown_LCD_I2C_seconZide +');';
    Blockly.Arduino.setups_['setup_u8g'] = 'lcd.begin();\n'+ '  '+ 'lcd.backlight();'
    var code='';
    return code;
  };

  Blockly.Arduino.SET_CURSOR = function() {
    var dropdown_CurSorRow = this.getTitleValue('CurSorRow');
    var dropdown_LCD_I2C_CurSorCol = this.getTitleValue('CurSorCol');
    var code='lcd.setCursor('+ dropdown_CurSorRow +',' + dropdown_LCD_I2C_CurSorCol +');\n';
    return code;
  };

  Blockly.Arduino.LCD_PRINT = function() {
    var dropdown_print = this.getTitleValue('print');
    var code='lcd.print('+ dropdown_print +');\n';
    return code;
  };

  Blockly.Arduino.LCD_PRINT_TEXT = function() {
    var value_text = Blockly.Arduino.valueToCode(this, 'Text', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';  
    var code ='lcd.print(' + value_text +');\n';
    return code;
};