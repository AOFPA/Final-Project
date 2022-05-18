// define blocks
'use strict';

Blockly.Blocks['LCD_TEST'] = {
    init: function() {
      this.setColour("#646464");
      this.appendDummyInput("")
          .appendField("LCD_I2C")
      this.appendDummyInput("")
      .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/LCD_I2C/lcd.png', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
          .appendField(new Blockly.FieldDropdown([["0x27","0x27"], ["0x3F","0x3F"]]),"special")
          .appendField(new Blockly.FieldDropdown([["16","16"], ["20","20"]]),"firstZide")
          .appendField(new Blockly.FieldDropdown([["2","2"], ["4","4"]]),"seconZide");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT91);
    }
  };

  Blockly.Blocks['SET_CURSOR'] = {
    init: function() {
      this.setColour("#646464");
      this.appendDummyInput("")
          .appendField("CurSor")
      this.appendDummyInput("")
          .appendField(new Blockly.FieldDropdown([["0","0"],["1","1"],["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"]]),"CurSorRow")
          .appendField(new Blockly.FieldDropdown([["0","0"],["1","1"],["2","2"], ["3","3"]]),"CurSorCol");
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT91);
    }
  };

  Blockly.Blocks['LCD_PRINT'] = {
    init: function() {
      this.setColour("#646464");
      this.setHelpUrl('');
      this.appendDummyInput("")
          .appendField("LCD-Print")
      this.appendDummyInput("")
          .appendField(new Blockly.FieldDropdown([["0","0"],["1","1"],["2","2"], ["3","3"], ["4","4"], ["5","5"], ["6","6"], ["7","7"], ["8","8"], ["9","9"], ["10","10"], ["11","12"], ["13","13"], ["14","14"], ["15","15"], ["16","16"], ["17","17"], ["18","18"], ["19","19"]]),"print")
      this.setPreviousStatement(true, null);
      this.setNextStatement(true, null);
      this.setTooltip(Blockly.Msg.TECHNOZONE51_TEXT91);
    }
  };
  Blockly.Blocks['LCD_PRINT_TEXT'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("PRINT_TEXT")
            .appendField("")
        this.appendValueInput("Text", 'String')
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("");
        this.setInputsInline(false);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour("#646464");
        this.setTooltip('');
    }
};