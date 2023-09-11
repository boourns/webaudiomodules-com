/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!**********************************!*\
  !*** ../shared/SlewProcessor.ts ***!
  \**********************************/

class SlewProcessor extends AudioWorkletProcessor {
    constructor() {
        super(...arguments);
        this.currentValue = 0;
    }
    static get parameterDescriptors() {
        return [
            {
                name: 'riseSpeed',
                defaultValue: 1.0,
                minValue: 0.0001,
                maxValue: 1,
                automationRate: 'k-rate'
            },
            {
                name: 'fallSpeed',
                defaultValue: 1.0,
                minValue: 0,
                maxValue: 1,
                automationRate: 'k-rate'
            },
            {
                name: 'input',
                defaultValue: 0.0,
                minValue: -1,
                maxValue: 1,
                automationRate: 'a-rate'
            },
            {
                name: 'gain',
                defaultValue: 1.0,
                minValue: -1,
                maxValue: 1,
                automationRate: 'a-rate'
            },
            {
                name: 'destroyed',
                defaultValue: 0.0,
                minValue: 0,
                maxValue: 1,
                automationRate: 'k-rate'
            },
        ];
    }
    process(inputs, outputs, parameters) {
        const output = outputs[0][0];
        const input = (inputs != undefined && inputs.length > 0 && inputs[0].length > 0) ? inputs[0][0] : parameters.input;
        const riseSpeed = parameters.riseSpeed[0];
        const fallSpeed = parameters.fallSpeed[0];
        if (parameters.destroyed[0] > 0.5) {
            return false;
        }
        for (let i = 0; i < output.length; i++) {
            let inputValue = (input.length == 1) ? input[0] : input[i];
            let gain = (parameters.gain.length == 1) ? parameters.gain[0] : parameters.gain[i];
            if (this.currentValue > inputValue) {
                this.currentValue += (inputValue - this.currentValue) * riseSpeed;
            }
            else if (this.currentValue < inputValue) {
                this.currentValue += (inputValue - this.currentValue) * fallSpeed;
            }
            output[i] = this.currentValue * gain;
        }
        return true;
    }
}
try {
    registerProcessor('slew-processor', SlewProcessor);
}
catch (error) {
    console.warn(error);
}

/******/ })()
;