/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!***********************************************!*\
  !*** ../shared/EnvelopeGeneratorProcessor.ts ***!
  \***********************************************/

let STATE_IDLE = -1;
let STATE_ATTACK = 0;
let STATE_DECAY = 1;
let STATE_SUSTAIN = 2;
let STATE_RELEASE = 3;
var logger = 0;
class EnvelopeGeneratorProcessor extends AudioWorkletProcessor {
    constructor() {
        super();
        this.startValue = 0;
        this.currentValue = 0;
        this.previousValue = 0;
        this.currentState = STATE_IDLE;
        this.stateChanged = false;
        this.targetValue = 0;
        this.segmentPosition = 0;
        this.segmentIncrement = 0;
        this.pendingTriggerEvents = [];
        this.port.onmessage = (ev => {
            if (ev.data.event == "trigger") {
                this.pendingTriggerEvents.push({ high: ev.data.high, samples: ev.data.time * sampleRate });
            }
        });
    }
    static get parameterDescriptors() {
        return [
            {
                name: 'velocity',
                defaultValue: 1,
                minValue: 0,
                maxValue: 1,
                automationRate: 'k-rate'
            },
            {
                name: 'attackTime',
                defaultValue: 0.1,
                minValue: 0,
                maxValue: 10,
                automationRate: 'k-rate'
            },
            {
                name: 'decayTime',
                defaultValue: 0.2,
                minValue: 0,
                maxValue: 10,
                automationRate: 'k-rate'
            },
            {
                name: 'sustain',
                defaultValue: 0.5,
                minValue: 0,
                maxValue: 1,
                automationRate: 'k-rate'
            },
            {
                name: 'releaseTime',
                defaultValue: 0.2,
                minValue: 0,
                maxValue: 10,
                automationRate: 'k-rate'
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
    incrementState() {
        this.stateChanged = true;
        switch (this.currentState) {
            case STATE_ATTACK:
                this.currentState = STATE_DECAY;
                break;
            case STATE_DECAY:
                this.currentState = STATE_SUSTAIN;
                break;
            case STATE_RELEASE:
                this.currentState = STATE_IDLE;
                break;
        }
    }
    updateState(parameters) {
        this.stateChanged = false;
        var targetTime = 0;
        switch (this.currentState) {
            case STATE_IDLE:
                targetTime = 0;
                this.targetValue = 0;
                break;
            case STATE_ATTACK:
                targetTime = 0.001 + parameters.attackTime[0];
                this.currentValue = 0;
                this.targetValue = parameters.velocity[0];
                break;
            case STATE_DECAY:
                targetTime = 0.001 + parameters.decayTime[0];
                this.targetValue = parameters.velocity[0] * parameters.sustain[0];
                break;
            case STATE_SUSTAIN:
                targetTime = 0;
                this.targetValue = parameters.velocity[0] * parameters.sustain[0];
                break;
            case STATE_RELEASE:
                targetTime = 0.001 + parameters.releaseTime[0];
                this.targetValue = 0;
                break;
        }
        this.startValue = this.currentValue;
        let totalSegmentSamples = targetTime * sampleRate;
        this.segmentPosition = 0;
        if (totalSegmentSamples > 0) {
            this.segmentIncrement = 1 / totalSegmentSamples;
        }
        else {
            this.currentValue = this.targetValue;
            this.segmentIncrement = 0;
        }
    }
    process(inputs, outputs, parameters) {
        if (parameters.destroyed[0] > 0.5) {
            return false;
        }
        var recalculate = true;
        var valueIncrement = 0;
        let output = outputs[0][0];
        for (let i = 0; i < output.length; i++) {
            for (let triggerEvent of this.pendingTriggerEvents) {
                triggerEvent.samples--;
                if (triggerEvent.samples <= 0) {
                    if ((this.currentState == STATE_IDLE || this.currentState == STATE_RELEASE) && triggerEvent.high) {
                        this.stateChanged = true;
                        this.currentState = STATE_ATTACK;
                    }
                    else if (this.currentState != STATE_IDLE && this.currentState != STATE_RELEASE && !triggerEvent.high) {
                        this.stateChanged = true;
                        this.currentState = STATE_RELEASE;
                    }
                }
            }
            this.pendingTriggerEvents = this.pendingTriggerEvents.filter(e => e.samples > 0);
            if (this.stateChanged) {
                this.updateState(parameters);
                recalculate = true;
            }
            if (this.segmentIncrement > 0) {
                if (recalculate) {
                    recalculate = false;
                    let remaining = output.length - i;
                    let finalValue = this.startValue + ((this.targetValue - this.startValue) * Math.pow(this.segmentPosition + (this.segmentIncrement * remaining), 1 / 2));
                    valueIncrement = (finalValue - this.currentValue) / remaining;
                }
                this.segmentPosition += this.segmentIncrement;
                this.currentValue += valueIncrement;
                if (this.currentValue > 1.0) {
                    this.currentValue = 1.0;
                }
                if (this.currentValue < 0) {
                    this.currentValue = 0;
                }
                if (this.segmentPosition > 1.0) {
                    this.incrementState();
                }
            }
            let result = this.previousValue + ((this.currentValue - this.previousValue) * 0.08);
            output[i] = result;
            this.previousValue = result;
        }
        return true;
    }
}
try {
    registerProcessor('envelope-generator-processor', EnvelopeGeneratorProcessor);
}
catch (error) {
    console.warn(error);
}

/******/ })()
;