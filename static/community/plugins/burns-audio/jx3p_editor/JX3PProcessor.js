/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/JX3PKernel.ts":
/*!***************************!*\
  !*** ./src/JX3PKernel.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   JX3PKernel: () => (/* binding */ JX3PKernel)
/* harmony export */ });
/* harmony import */ var _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/midi/SelectParameter */ "../shared/midi/SelectParameter.ts");
/* harmony import */ var _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/midi/IntParameter */ "../shared/midi/IntParameter.ts");
/* harmony import */ var _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/midi/ControlChangeMessager */ "../shared/midi/ControlChangeMessager.ts");



class JX3PKernel {
    constructor() {
        this.parameters = {};
        this.parameters["env_attack"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("env_attack", "Env Attack", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(26), 0, 0, 127);
        this.parameters["env_decay"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("env_decay", "Env Decay", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(27), 0, 0, 127);
        this.parameters["env_sustain"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("env_sustain", "Env Sustain", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(28), 0, 0, 127);
        this.parameters["env_release"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("env_release", "Env Release", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(29), 0, 0, 127);
        const range = [
            { value: 0, label: "16'" },
            { value: 32, label: "8'" },
            { value: 64, label: "4'" },
        ];
        const wave1 = [
            { value: 0, label: "Ramp" },
            { value: 32, label: "Pulse" },
            { value: 64, label: "Square" }
        ];
        const wave2 = [...wave1, { value: 96, label: "Noise" }];
        this.parameters["dco1_octave"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("dco1_octave", "DCO1 Octave", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(72), 0, range);
        this.parameters["dco1_wave"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("dco1_wave", "DCO1 Wave", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(73), 0, wave1);
        const off_on = [
            { value: 0, label: "Off" },
            { value: 64, label: "On" }
        ];
        this.parameters["dco1_lfo"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("dco1_lfo", "LFO->DCO1", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(82), 0, off_on);
        this.parameters["dco1_env"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("dco1_env", "Env->DCO1", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(81), 0, off_on);
        this.parameters["dco2_octave"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("dco2_octave", "DCO2 Octave", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(74), 0, range);
        this.parameters["dco2_wave"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("dco2_wave", "DCO1 Wave", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(75), 0, wave2);
        const cross_mod = [
            { value: 0, label: "Off" },
            { value: 32, label: "Sync" },
            { value: 64, label: "Metal" }
        ];
        const polarity = [
            { value: 0, label: "Neg" },
            { value: 64, label: "Pos" }
        ];
        this.parameters["dco2_mod"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("dco2_mod", "DCO2 Crossmod", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(76), 0, cross_mod);
        this.parameters["dco2_tune"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("dco2_tune", "DCO2 Coarse Tune", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(13), 0, 0, 127);
        this.parameters["dco2_fine"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("dco2_fine", "DCO2 Fine Tune", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(12), 0, 0, 127);
        this.parameters["dco2_lfo"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("dco2_lfo", "LFO->DCO2", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(80), 0, off_on);
        this.parameters["dco2_env"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("dco2_env", "Env->DCO2", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(79), 0, off_on);
        this.parameters["osc_lfo"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("osc_lfo", "Osc LFO Mod", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(15), 0, 0, 127);
        this.parameters["osc_env"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("osc_env", "Osc Env Mod", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(14), 0, 0, 127);
        this.parameters["osc_env_polarity"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("osc_env_polarity", "Osc Env Polarity", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(77), 0, polarity);
        this.parameters["mix"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("mix", "Source Mix", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(16), 0, 0, 127);
        this.parameters["hpf"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("hpf", "High-pass Filter", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(17), 0, 0, 127);
        this.parameters["cutoff"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("cutoff", "Filter Cutoff", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(19), 0, 0, 127);
        this.parameters["res"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("res", "Filter Res", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(18), 0, 0, 127);
        this.parameters["filter_lfo"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("filter_lfo", "Filter Envelope", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(20), 0, 0, 127);
        this.parameters["filter_env"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("filter_env", "Filter LFO", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(21), 0, 0, 127);
        this.parameters["filter_env_polarity"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("filter_env_polarity", "Filter Env Polarity", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(77), 0, polarity);
        this.parameters["filter_pitch"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("filter_pitch", "Filter Pitch Follow", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(22), 0, 0, 127);
        this.parameters["level"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("level", "Patch level", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(23), 0, 0, 127);
        this.parameters["chorus"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("chorus", "Chorus", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(85), 0, off_on);
        const gate = [
            { value: 0, label: "gate" },
            { value: 64, label: "env" }
        ];
        this.parameters["gate"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("gate", "Gate mode", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(78), 0, gate);
        const lfo_waves = [
            { value: 0, label: "Sine" },
            { value: 32, label: "Square" },
            { value: 64, label: "Random" }
        ];
        this.parameters["lfo_wave"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("lfo_wave", "LFO Wave", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(99), 0, off_on);
        this.parameters["lfo_delay"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("lfo_delay", "LFO Delay", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(25), 0, 0, 127);
        this.parameters["lfo_rate"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("lfo_rate", "LFO Rate", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(24), 0, 0, 127);
    }
    wamParameters() {
        let result = {};
        for (let id of Object.keys(this.parameters)) {
            result[id] = this.parameters[id].toWAM();
            if (id != this.parameters[id].id) {
                throw new Error(`Parameter ${id}: key does not match parameter id ${this.parameters[id].id}`);
            }
        }
        return result;
    }
    ingestMIDI(channel, event) {
        let result = false;
        for (let id of Object.keys(this.parameters)) {
            if (this.parameters[id].ingestMIDI(channel, event)) {
                result = true;
            }
        }
        return result;
    }
    parameterUpdate(values) {
        let result = false;
        const params = this.parameters;
        for (let id of Object.keys(values)) {
            if (params[id].parameterUpdate(values[id])) {
                result = true;
            }
        }
        return result;
    }
    automationMessages(force) {
        const params = this.parameters;
        return Object.keys(params).map(id => params[id].automationMessage(force)).filter(ev => ev !== undefined);
    }
    sysexNeeded() {
        return false;
    }
    toSysex(channel) {
        throw new Error("sysex not supported");
    }
    fromSysex(channel, sysex) {
        return false;
    }
    midiMessages(channel, force = false) {
        let results = [];
        for (let id of Object.keys(this.parameters)) {
            results.push(...this.parameters[id].midiMessage(channel, force));
        }
        return results;
    }
}


/***/ }),

/***/ "../shared/midi/ControlChangeMessager.ts":
/*!***********************************************!*\
  !*** ../shared/midi/ControlChangeMessager.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ControlChangeMessager: () => (/* binding */ ControlChangeMessager),
/* harmony export */   MIDI_CC: () => (/* binding */ MIDI_CC)
/* harmony export */ });
const MIDI_CC = 0xB0;
class ControlChangeMessager {
    constructor(ccNumber) {
        this.ccNumber = ccNumber;
    }
    ingestMIDI(currentChannel, currentValue, event) {
        if ((currentChannel < 0 && (event.bytes[0] & 0xf0) == MIDI_CC) ||
            ((event.bytes[0] == MIDI_CC + currentChannel))) {
            if (event.bytes[1] == this.ccNumber) {
                return event.bytes[2];
            }
        }
        return undefined;
    }
    toMIDI(channel, value) {
        return [
            {
                type: "wam-midi",
                data: {
                    bytes: [MIDI_CC + channel, this.ccNumber, value]
                }
            }
        ];
    }
    sysexNeeded() {
        return false;
    }
}


/***/ }),

/***/ "../shared/midi/IntParameter.ts":
/*!**************************************!*\
  !*** ../shared/midi/IntParameter.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IntParameter: () => (/* binding */ IntParameter)
/* harmony export */ });
const MIDI_CC = 0xB0;
class IntParameter {
    constructor(id, label, messager, defaultValue, minValue = 0, maxValue = 127) {
        this.id = id;
        this.label = label;
        this.messager = messager;
        this.defaultValue = defaultValue;
        this.minValue = minValue;
        this.maxValue = maxValue;
        this.value = this.defaultValue;
    }
    toWAM() {
        return {
            type: "int",
            label: this.label,
            defaultValue: this.defaultValue,
            minValue: this.minValue,
            maxValue: this.maxValue,
        };
    }
    ingestMIDI(currentChannel, event) {
        let currentValue = this.value;
        if (this.minValue < 0) {
            currentValue += (this.minValue * -1);
        }
        let value = this.messager.ingestMIDI(currentChannel, this.value, event);
        if (value === undefined) {
            return false;
        }
        if (value === currentValue) {
            return false;
        }
        if (this.minValue < 0) {
            this.value = value + this.minValue;
        }
        else {
            this.value = value;
        }
        if (value > this.maxValue) {
            value = this.maxValue;
        }
        if (value < this.minValue) {
            value = this.minValue;
        }
        this.automationDirty = true;
        return true;
    }
    updateFromSysex(value) {
        if (value > this.maxValue || value < this.minValue) {
            console.error(`Param ${this.id}: updateFromSysex called with value out of range(${this.minValue}-${this.maxValue}): ${value}`);
            return;
        }
        this.value = value;
        this.automationDirty = true;
    }
    sysexNeeded(force = false) {
        if (!this.midiDirty && !force) {
            return false;
        }
        return this.messager.sysexNeeded();
    }
    parameterUpdate(newValue) {
        const dirty = this.value != newValue;
        if (dirty) {
            this.midiDirty = true;
        }
        this.value = newValue;
        return dirty;
    }
    midiMessage(channel, force = false) {
        if (!this.midiDirty && !force) {
            return [];
        }
        this.midiDirty = false;
        let value = this.value;
        if (this.minValue < 0) {
            value -= this.minValue;
        }
        return this.messager.toMIDI(channel, value);
    }
    automationMessage(force = false) {
        if (!this.automationDirty && !force) {
            return undefined;
        }
        this.automationDirty = false;
        return {
            type: "wam-automation",
            data: {
                id: this.id,
                value: this.value,
                normalized: false,
            }
        };
    }
}


/***/ }),

/***/ "../shared/midi/SelectParameter.ts":
/*!*****************************************!*\
  !*** ../shared/midi/SelectParameter.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SelectParameter: () => (/* binding */ SelectParameter)
/* harmony export */ });
class SelectParameter {
    constructor(id, label, messager, defaultValue, options) {
        this.id = id;
        this.label = label;
        this.messager = messager;
        this.defaultValue = defaultValue;
        this.options = options;
        this.value = this.defaultValue;
    }
    toWAM() {
        return {
            label: this.label,
            type: "choice",
            defaultValue: this.defaultValue,
            minValue: 0,
            maxValue: this.options.length - 1,
            choices: this.options.map(o => o.label)
        };
    }
    ingestMIDI(currentChannel, event) {
        let currentMidiValue = this.options[this.value].value;
        let newMidiValue = this.messager.ingestMIDI(currentChannel, currentMidiValue, event);
        if (newMidiValue === undefined) {
            return false;
        }
        if (newMidiValue === currentMidiValue) {
            return false;
        }
        const index = this.options.findIndex(o => o.value == newMidiValue);
        if (index < 0) {
            return false;
        }
        this.value = index;
        this.automationDirty = true;
        return true;
    }
    updateFromSysex(value) {
        this.value = value;
        this.automationDirty = true;
    }
    parameterUpdate(newValue) {
        const option = this.options[newValue];
        if (option === undefined) {
            console.log("Could not find option for newvalue ", newValue, this.id, this.options);
            return false;
        }
        const dirty = this.value != newValue;
        if (dirty) {
            this.midiDirty = true;
        }
        this.value = newValue;
        return dirty;
    }
    midiMessage(channel, force = false) {
        if (!this.midiDirty && !force) {
            return [];
        }
        this.midiDirty = false;
        const option = this.options[this.value];
        if (!option) {
            console.error(`select ${this.id}: value ${this.value} should reference a select option index ${this.options}`);
            return [];
        }
        return this.messager.toMIDI(channel, option.value);
    }
    sysexNeeded(force = false) {
        if (!this.midiDirty && !force) {
            return false;
        }
        return this.messager.sysexNeeded();
    }
    automationMessage(force = false) {
        if (!this.automationDirty && !force) {
            return undefined;
        }
        this.automationDirty = false;
        return {
            type: "wam-automation",
            data: {
                id: this.id,
                value: this.value,
                normalized: false,
            }
        };
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************************!*\
  !*** ./src/JX3PProcessor.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JX3PKernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JX3PKernel */ "./src/JX3PKernel.ts");

const moduleId = "com.sequencerParty.jx3p";
const audioWorkletGlobalScope = globalThis;
const scope = audioWorkletGlobalScope.webAudioModules.getModuleScope(moduleId);
const MIDIControllerProcessor = scope.MIDIControllerProcessor;
class MicrokorgProcessor extends MIDIControllerProcessor {
    loadKernel() {
        this.kernel = new _JX3PKernel__WEBPACK_IMPORTED_MODULE_0__.JX3PKernel();
    }
}
try {
    audioWorkletGlobalScope.registerProcessor(moduleId, MicrokorgProcessor);
}
catch (error) {
}

})();

/******/ })()
;