// * Function แปลง Hex to RGB Colour
String.prototype.convertToRGB = function () {
    if (this.length != 6) {
        throw "Only six-digit hex colors are allowed.";
    }

    var aRgbHex = this.match(/.{1,2}/g);

    var aRgb = [
        parseInt(aRgbHex[0], 16),
        parseInt(aRgbHex[1], 16),
        parseInt(aRgbHex[2], 16)
    ];
    return aRgb;
}

Blockly.Arduino.led_rgb_config = function (block) {
    const r_pin = block.getFieldValue('R_PIN');
    const g_pin = block.getFieldValue('G_PIN');
    const b_pin = block.getFieldValue('B_PIN');
    const colour = block.getFieldValue('colour');
    // TODO: Assemble JavaScript into code variable.
    // aRgb = colour.convertToRGB()

    //Hex to RGB
    let hex = colour.substring(1, 7);
    aRgb = hex.convertToRGB();
    // define
    //#define R_PIN 0
    Blockly.Arduino.definitions_[`define_led_rgb_${r_pin}_${g_pin}_${b_pin}`] =
        `#define R_PIN_${r_pin} ${r_pin}\n` +
        `#define G_PIN_${g_pin} ${g_pin}\n` +
        `#define B_PIN_${b_pin} ${b_pin}\n`;

    //void setup
    Blockly.Arduino.setups_[`setup_led_rgb_${r_pin}_${g_pin}_${b_pin}`] =
        `\n  pinMode(${r_pin},OUTPUT);\n` +
        `  pinMode(${g_pin},OUTPUT);\n` +
        `  pinMode(${b_pin},OUTPUT);\n`;

    // void loop()
    let code = `analogWrite(${r_pin},${aRgb[0]});\n`;
    code += `analogWrite(${g_pin},${aRgb[1]});\n`;
    code += `analogWrite(${b_pin},${aRgb[2]});\n`;



    return code;
};


/*
analogWrite(R, 255);
analogWrite(G, 255);
analogWrite(B, 255);
*/


// define
// #define R_PIN 0

// void setup()
// pinMode(R_PIN,OUTPUT)

// void loop()
// digitalWrite(R_PIN,HIGH)