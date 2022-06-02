/**
 * @fileoverview Helper functions for generating Arduino blocks.
 * @author gasolin@gmail.com (Fred Lin)
 */
'use strict';

goog.provide('Blockly.Arduino.base');

goog.require('Blockly.Arduino');



/* 
------------------------------------------
| servo_init gen code
------------------------------------------
| เอาไว้กำหนดขาของ servo motor
| และมุมุ
------------------------------------------
*/

Blockly.Arduino.servo_init = function(block) {
    //value
    var pin = block.getFieldValue('pin');
    var angle = block.getFieldValue('angle');

    //define
    Blockly.Arduino.definitions_['servo_motor'] = '#include <Servo.h>' + '\n';
    Blockly.Arduino.definitions_['servo_servo_' + pin] = 'Servo myservo_' + pin + ';\n';
    Blockly.Arduino.definitions_['servo_motor_define'] = '#define SERVO_PIN_' + pin + ' ' + pin + '\n';


    //setup
    let servo = 'myservo_' + pin;
    let num_pin = pin;
    pin = 'SERVO_PIN_' + pin;
    Blockly.Arduino.setups_['servo_motor' + num_pin] = servo + '.attach(' + pin + ');' + '\n';


    //loop
    var code = servo + '.write(' + angle + ');' + '\n';
    return code;
};


/* 
------------------------------------------
| servo_value
------------------------------------------
| เอาไว้ดึงค่าจาก servo motor ที่ต่อกับขานั้น ๆ
| 
------------------------------------------
*/
Blockly.Arduino.servo_value = function(block) {
    var pin = block.getFieldValue('pin');
    // TODO: Assemble JavaScript into code variable.
    pin = 'myservo_' + pin;

    var code = pin + '.read()';
    // TODO: Change ORDER_NONE to the correct strength.
    return [code]; //fix bug show first of strings
};

/* 
------------------------------------------
| servo_rotate_by_value
------------------------------------------
| หมุนตามค่าของตัวแปร
| 
------------------------------------------
*/
Blockly.Arduino.servo_rotate_by_value = function(block) {
    var pin = block.getFieldValue('pin');
    var value = Blockly.Arduino.valueToCode(block, 'value', Blockly.Arduino.ORDER_ATOMIC);

    // TODO: Assemble JavaScript into code variable.

    //define
    Blockly.Arduino.definitions_['servo_motor'] = '#include <Servo.h>' + '\n';
    Blockly.Arduino.definitions_['servo_servo_' + pin] = 'Servo myservo_' + pin + ';\n';
    Blockly.Arduino.definitions_['servo_motor_define'] = '#define SERVO_PIN_' + pin + ' ' + pin + '\n';


    //setup
    let servo = 'myservo_' + pin;
    let num_pin = pin;
    pin = 'SERVO_PIN_' + pin;
    Blockly.Arduino.setups_['servo_motor' + num_pin] = servo + '.attach(' + pin + ');' + '\n';


    //loop
    var code = servo + '.write(' + value + ');' + '\n';
    return code;
};