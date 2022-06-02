"use strict";

/*
---------------------------------------------------
|   define init servo block
---------------------------------------------------
| สามารถกำหนดขา ตัวแปร pin
| สามารถกำหนดมุม ตัวแปร angle
---------------------------------------------------
*/
Blockly.Blocks['servo_init'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("Init Servo Motor Pin");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("https://hackster.imgix.net/uploads/attachments/543071/blob_sKvliM1hRk.blob?auto=compress%2Cformat&w=400&h=300&fit=min", 100, 80, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Pin")
            .appendField(new Blockly.FieldDropdown([
                ["D2 / CS / ADC2_2 / GPIO2", "2"],
                ["D4 / ADC2_0 / GPIO4", "4"],
                ["D12 / ADC2_5 / GPIO12", "12"],
                ["D13 / ADC2_6 / GPIO13", "13"],
                ["D14 / ADC2_3 / GPIO14", "14"],
                ["D15 / ADC2_3 / GPIO15", "15"],
                ["D18 / SCK / GPIO18", "18"],
                ["D19 / MISO / GPIO19", "19"],
                ["D21 / SDA / GPIO21", "21"],
                ["D22 / SCL / GPIO22", "22"],
                ["D23 / MOSI / GPIO23", "23"],
                ["D25 / DAC 1 / ADC2_8 / GPIO25", "25"],
                ["D26 / DAC 2 / ADC2_9 / GPIO26", "26"],
                ["D27 / ADC2_7 / GPIO27", "27"],
                ["D32 / ADC1_4 / GPIO32", "32"],
                ["D33 / ADC1_5 / GPIO33", "33"],
                ["D34 / ADC1_6 / GPIO34", "34"],
                ["D35 / ADC1_7 / GPIO35", "35"],
                ["VP / ADC1_0 / GPIO36", "36"],
                ["VN / ADC1_3 / GPIO39", "39"],
                ["CS / GPIO05", "5"],
                ["TXD0 / GPIO01", "1"],
                ["RXD0 / GPIO03", "3"],
                ["RXD 1 / GPIO09", "9"],
                ["TXD 1 / GPIO10", "10"],
                ["RTS 1 / GPIO11", "11"],
                ["TXD2 / GPIO17", "17"],
                ["RXD2 / GPIO16", "16"],
                ["ADC2_1 / GPIO0", "0"],
                ["CTS2 / SPI_D GPIO08", "8"],
                ["RTS2 / SPI_Q / GPIO07", "7"],
                ["CTS1 / SPI_CLK / GPIO06", "6"]
            ]), "pin");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("Angle")
            .appendField(new Blockly.FieldAngle(90), "angle");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};

/*
---------------------------------------------------
|   define servo_value Block
---------------------------------------------------
| เอาไว้ get value ใช้ในกรณีจะใช้ใน if else เป็นต้น
| 
---------------------------------------------------
*/

Blockly.Blocks['servo_value'] = {
    init: function() {
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("https://hackster.imgix.net/uploads/attachments/543071/blob_sKvliM1hRk.blob?auto=compress%2Cformat&w=400&h=300&fit=min", 50, 50, { alt: "*", flipRtl: "FALSE" }))
            .appendField("the angle of servo motor");
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("pin")
            .appendField(new Blockly.FieldDropdown([
                ["D2 / CS / ADC2_2 / GPIO2", "2"],
                ["D4 / ADC2_0 / GPIO4", "4"],
                ["D12 / ADC2_5 / GPIO12", "12"],
                ["D13 / ADC2_6 / GPIO13", "13"],
                ["D14 / ADC2_3 / GPIO14", "14"],
                ["D15 / ADC2_3 / GPIO15", "15"],
                ["D18 / SCK / GPIO18", "18"],
                ["D19 / MISO / GPIO19", "19"],
                ["D21 / SDA / GPIO21", "21"],
                ["D22 / SCL / GPIO22", "22"],
                ["D23 / MOSI / GPIO23", "23"],
                ["D25 / DAC 1 / ADC2_8 / GPIO25", "25"],
                ["D26 / DAC 2 / ADC2_9 / GPIO26", "26"],
                ["D27 / ADC2_7 / GPIO27", "27"],
                ["D32 / ADC1_4 / GPIO32", "32"],
                ["D33 / ADC1_5 / GPIO33", "33"],
                ["D34 / ADC1_6 / GPIO34", "34"],
                ["D35 / ADC1_7 / GPIO35", "35"],
                ["VP / ADC1_0 / GPIO36", "36"],
                ["VN / ADC1_3 / GPIO39", "39"],
                ["CS / GPIO05", "5"],
                ["TXD0 / GPIO01", "1"],
                ["RXD0 / GPIO03", "3"],
                ["RXD 1 / GPIO09", "9"],
                ["TXD 1 / GPIO10", "10"],
                ["RTS 1 / GPIO11", "11"],
                ["TXD2 / GPIO17", "17"],
                ["RXD2 / GPIO16", "16"],
                ["ADC2_1 / GPIO0", "0"],
                ["CTS2 / SPI_D GPIO08", "8"],
                ["RTS2 / SPI_Q / GPIO07", "7"],
                ["CTS1 / SPI_CLK / GPIO06", "6"]
            ]), "pin");
        this.setOutput(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};


/*
---------------------------------------------------
|   define servo_value
---------------------------------------------------
| เอาไว้ get value ใช้ในกรณีจะใช้ใน if else เป็นต้น
| 
---------------------------------------------------
*/
Blockly.Blocks['servo_rotate_by_value'] = {
    init: function() {
        this.appendDummyInput()
            .appendField("servo rotate by variable");
        this.appendDummyInput()
            .appendField(new Blockly.FieldImage("https://hackster.imgix.net/uploads/attachments/543071/blob_sKvliM1hRk.blob?auto=compress%2Cformat&w=400&h=300&fit=min", 100, 80, { alt: "*", flipRtl: "FALSE" }));
        this.appendDummyInput()
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("servo pin")
            .appendField(new Blockly.FieldDropdown([
                ["D2 / CS / ADC2_2 / GPIO2", "2"],
                ["D4 / ADC2_0 / GPIO4", "4"],
                ["D12 / ADC2_5 / GPIO12", "12"],
                ["D13 / ADC2_6 / GPIO13", "13"],
                ["D14 / ADC2_3 / GPIO14", "14"],
                ["D15 / ADC2_3 / GPIO15", "15"],
                ["D18 / SCK / GPIO18", "18"],
                ["D19 / MISO / GPIO19", "19"],
                ["D21 / SDA / GPIO21", "21"],
                ["D22 / SCL / GPIO22", "22"],
                ["D23 / MOSI / GPIO23", "23"],
                ["D25 / DAC 1 / ADC2_8 / GPIO25", "25"],
                ["D26 / DAC 2 / ADC2_9 / GPIO26", "26"],
                ["D27 / ADC2_7 / GPIO27", "27"],
                ["D32 / ADC1_4 / GPIO32", "32"],
                ["D33 / ADC1_5 / GPIO33", "33"],
                ["D34 / ADC1_6 / GPIO34", "34"],
                ["D35 / ADC1_7 / GPIO35", "35"],
                ["VP / ADC1_0 / GPIO36", "36"],
                ["VN / ADC1_3 / GPIO39", "39"],
                ["CS / GPIO05", "5"],
                ["TXD0 / GPIO01", "1"],
                ["RXD0 / GPIO03", "3"],
                ["RXD 1 / GPIO09", "9"],
                ["TXD 1 / GPIO10", "10"],
                ["RTS 1 / GPIO11", "11"],
                ["TXD2 / GPIO17", "17"],
                ["RXD2 / GPIO16", "16"],
                ["ADC2_1 / GPIO0", "0"],
                ["CTS2 / SPI_D GPIO08", "8"],
                ["RTS2 / SPI_Q / GPIO07", "7"],
                ["CTS1 / SPI_CLK / GPIO06", "6"]
            ]), "pin");
        this.appendValueInput("value")
            .setCheck(null)
            .setAlign(Blockly.ALIGN_RIGHT)
            .appendField("value name");
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
        this.setColour(230);
        this.setTooltip("");
        this.setHelpUrl("");
    }
};