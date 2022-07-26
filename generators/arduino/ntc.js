//code ref https://www.cybertice.com/article/447/สอนใช้งาน-arduino-analog-thermistor-temperature-sensor-waterproof-ntc-10k-เซ็นเซอร์วัดอุณหภูมิ

//Block เอาไว้กำหนดขา แล้วค่าตัว R
Blockly.Arduino.ntc_config = function (block) {
    const R_NTC = Blockly.Arduino.valueToCode(this, 'R_NTC', Blockly.Arduino.ORDER_ATOMIC) || '\'\'';
    const R = Blockly.Arduino.valueToCode(this, 'R', Blockly.Arduino.ORDER_ATOMIC);
    const pin = block.getFieldValue('pin')
    /*
    define ที่ใช้ร่วมกัน
        - B
        - VCC
        - LN
        - T0
        - 
    */
    Blockly.Arduino.definitions_["define_ntc_config"] =
        '#define B 3977      // K\n' +
        '#define VCC 3.3    //Supply voltage\n' +
        'float T0 ; \n'
        ;

    /*
    define แยกกัน
        - Read
        - VR
        - RT
        - Temp
    */
    const RT0 = 'RT0_' + pin;
    const PIN_NTC = 'PIN_NTC_' + pin;
    const R0 = 'R_' + pin;
    const Read = 'Read_' + pin;
    const VR = 'VR_' + pin;
    const RT = 'RT_' + pin;
    const Temp = 'Temp_' + pin;
    //TEMP
    const cel = `Cel_${pin}`;
    const fah = `Fah_${pin}`;
    const kel = `Kel_${pin}`;
    const ln = `ln_${pin}`;

    Blockly.Arduino.definitions_["define_ntc_config_" + PIN_NTC] =
        '#define ' + RT0 + ' ' + R_NTC + ' // Ω\n' +
        '#define ' + PIN_NTC + ' ' + pin + '\n' +
        '#define ' + R0 + ' ' + R + ' //Ω\n' +
        'float ' + Read + ',' + VR + ',' + RT + ',' + Temp + ';\n';

    //ส่วน void setup() รวม
    Blockly.Arduino.setups_["setup_ntc_config"] =
        'T0 = 25+273.15;  //Temperature T0 from datasheet, conversion from Celsius to kelvin\n'
        ;

    //ส่วน void setup() แยกกัน 
    Blockly.Arduino.setups_["setup_ntc_config" + PIN_NTC] =
        `pinMode(${PIN_NTC},INPUT);\n`;
    //ส่วน void loop()
    var code = `\n//NTC_${PIN_NTC} Section\n`;
    code += `${Read} = analogRead(${PIN_NTC});              //Acquisition analog value Read\n`
    code += `${Read} = (5.00 / 1023.00) * ${Read};      //Conversion to voltage\n`
    code += `${VR} = VCC - ${Read};\n`
    code += `${RT} = ${Read} / (${VR} / ${R0});               //Resistance of RT\n`;
    code += `${ln} = log(${RT} / ${RT0});\n`
    code += `${Temp} = (1 / ((${ln} / B) + (1 / T0))); //Temperature from sensor\n`

    //แปลงเป็นหน่วยอุญหภูมิต่าง ๆ
    code += `${cel} = ${Temp} - 273.15;                 //Conversion to Celsius\n`
    code += `${kel} = ${Temp};                           //Conversion to kelvin\n`
    code += `${fah} = (${Temp} * 1.8) + 32;          //Conversion to Fahrenheit\n`
    return code;
};



Blockly.Arduino.ntc_value = function (block) {
    const unit = block.getFieldValue('unit');
    const pin = block.getFieldValue('pin');
    // TODO: Assemble JavaScript into code variable.
    let code = `${unit}_${pin}`;
    // TODO: Change ORDER_NONE to the correct strength.
    // printf(cel_2)
    return [code];

    //return [code, Blockly.Arduino.ORDER_NONE];
    //ex. printf((cel_2))
};