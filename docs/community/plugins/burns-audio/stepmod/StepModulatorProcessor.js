/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "../shared/util.ts":
/*!*************************!*\
  !*** ../shared/util.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "token": () => (/* binding */ token),
/* harmony export */   "constantSource": () => (/* binding */ constantSource),
/* harmony export */   "noiseSource": () => (/* binding */ noiseSource)
/* harmony export */ });
function token() {
    return Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 16);
}
function constantSource(audioContext) {
    if (audioContext.createConstantSource) {
        let source = audioContext.createConstantSource();
        source.start();
        return source;
    }
    else {
        let length = audioContext.sampleRate;
        var buffer = audioContext.createBuffer(1, length, audioContext.sampleRate);
        var noise = buffer.getChannelData(0);
        for (var i = 0; i < length; i++) {
            noise[i] = 1.0;
        }
        var source = audioContext.createBufferSource();
        source.buffer = buffer;
        source.loop = true;
        source.loopStart = 0.0;
        source.loopEnd = 0.9;
        source.start();
        return source;
    }
}
function noiseSource(audioContext) {
    let length = audioContext.sampleRate;
    var buffer = audioContext.createBuffer(1, length, audioContext.sampleRate);
    var noise = buffer.getChannelData(0);
    for (var i = 0; i < length; i++) {
        noise[i] = (Math.random() * 2) - 1;
    }
    var source = audioContext.createBufferSource();
    source.buffer = buffer;
    source.loop = true;
    source.loopStart = 0.0;
    source.loopEnd = 0.9;
    source.start();
    return source;
}


/***/ }),

/***/ "./src/Clip.ts":
/*!*********************!*\
  !*** ./src/Clip.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PPQN": () => (/* binding */ PPQN),
/* harmony export */   "PP16": () => (/* binding */ PP16),
/* harmony export */   "Clip": () => (/* binding */ Clip)
/* harmony export */ });
/* harmony import */ var _shared_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/util */ "../shared/util.ts");

const PPQN = 24;
const PP16 = (PPQN / 4);
class Clip {
    constructor(id, state) {
        if (state) {
            this.state = {
                id: state.id,
                speed: state.speed,
                steps: [...state.steps]
            };
        }
        else {
            this.state = {
                id: id || (0,_shared_util__WEBPACK_IMPORTED_MODULE_0__.token)(),
                steps: [0, 0, 0, 0, 0, 0, 0, 0],
                speed: 24,
            };
        }
        this.dirty = true;
    }
    getState() {
        return {
            id: this.state.id,
            steps: [...this.state.steps],
            speed: this.state.speed
        };
    }
    async setState(state) {
        this.state.id = state.id;
        this.state.steps = [...state.steps];
        this.state.speed = state.speed;
        this.dirty = true;
        if (this.updateProcessor)
            this.updateProcessor(this);
    }
    length() {
        return this.state.steps.length;
    }
    setRenderFlag(dirty) {
        this.dirty = dirty;
    }
    needsRender() {
        return this.dirty;
    }
}


/***/ }),

/***/ "./src/StepModulatorKernel.ts":
/*!************************************!*\
  !*** ./src/StepModulatorKernel.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StepModulatorKernel": () => (/* binding */ StepModulatorKernel)
/* harmony export */ });
/* harmony import */ var _Clip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Clip */ "./src/Clip.ts");

const audioWorkletGlobalScope = globalThis;
const moduleId = 'com.sequencerParty.stepmod';
const ModuleScope = audioWorkletGlobalScope.webAudioModules.getModuleScope(moduleId);
const WamProcessor = ModuleScope.WamProcessor;
const WamParameterInfo = ModuleScope.WamParameterInfo;
class StepModulatorKernel {
    constructor(id, row, processor) {
        this.processor = processor;
        this.id = id;
        this.paramIds = {};
        this.rowConfigured = false;
        this.activeStep = 0;
        this.clips = new Map();
        this.lastValue = 0;
        this.setRow(row);
    }
    setRow(row) {
        this.row = row;
    }
    wamParameters() {
        if (this.row === undefined) {
            throw new Error("calling wamParameters without row set!");
        }
        const prefix = `row${this.row + 1}-`;
        let parameters = {};
        this.paramIds["slew"] = `${prefix}slew`;
        this.paramIds["gain"] = `${prefix}gain`;
        parameters[this.paramIds["slew"]] = new WamParameterInfo(this.paramIds["slew"], {
            type: "float",
            defaultValue: 1.0,
            minValue: 0,
            maxValue: 1.0,
        });
        parameters[this.paramIds["gain"]] = new WamParameterInfo(this.paramIds["gain"], {
            type: "float",
            defaultValue: 1.0,
            minValue: 0,
            maxValue: 1.0,
        });
        for (let i = 1; i < 9; i++) {
            const rowedId = `${prefix}step${i}`;
            this.paramIds[`step${i}`] = rowedId;
            parameters[rowedId] = new WamParameterInfo(rowedId, {
                type: "float",
                defaultValue: 0,
                minValue: 0,
                maxValue: 1,
            });
        }
        this.rowConfigured = true;
        return parameters;
    }
    process(currentClipId, tickPosition, params) {
        let clip = this.clips.get(currentClipId);
        if (!this.rowConfigured) {
            this.wamParameters();
        }
        if (!clip)
            return;
        if (!this.targetParam)
            return;
        let clipPosition = tickPosition % (clip.length() * clip.state.speed);
        if (this.ticks != clipPosition) {
            this.ticks = clipPosition;
        }
        this.update(clip, params);
    }
    update(clip, params) {
        if (!this.rowConfigured) {
            this.wamParameters();
        }
        if (!this.targetParam) {
            return;
        }
        let step;
        if (clip.state.speed == 0) {
            step = this.activeStep;
        }
        else {
            step = Math.floor(this.ticks / clip.state.speed);
            this.activeStep = step;
        }
        var result = 0;
        var i = 0;
        switch (step) {
            default:
                result = 0;
                break;
            case 0:
                result = params[this.paramIds["step1"]].value;
                break;
            case 1:
                result = params[this.paramIds["step2"]].value;
                break;
            case 2:
                result = params[this.paramIds["step3"]].value;
                break;
            case 3:
                result = params[this.paramIds["step4"]].value;
                break;
            case 4:
                result = params[this.paramIds["step5"]].value;
                break;
            case 5:
                result = params[this.paramIds["step6"]].value;
                break;
            case 6:
                result = params[this.paramIds["step7"]].value;
                break;
            case 7:
                result = params[this.paramIds["step8"]].value;
                break;
        }
        let target = (step < clip.state.steps.length) ? clip.state.steps[step] + result : result;
        let slew = params[this.paramIds["slew"]].value;
        let gain = params[this.paramIds["gain"]].value;
        let value = this.lastValue + ((target - this.lastValue) * (slew) * slew * slew);
        if (value != this.lastValue) {
            const { currentTime } = audioWorkletGlobalScope;
            const min = (this.targetParam.minValue === undefined) ? 0 : this.targetParam.minValue;
            const max = (this.targetParam.maxValue === undefined) ? 1 : this.targetParam.maxValue;
            var output = min + (value * (max - min) * gain);
            if (this.targetParam.type == 'int' || this.targetParam.type == 'choice' || this.targetParam.type == 'boolean') {
                output = Math.round(output);
            }
            this.processor.emitEvents({
                type: "wam-automation",
                data: {
                    id: this.targetParam.id,
                    normalized: false,
                    value: output
                },
                time: currentTime
            });
        }
        this.lastValue = value;
    }
    async onMessage(message) {
        if (message.data && message.data.action == "clip") {
            let clip = new _Clip__WEBPACK_IMPORTED_MODULE_0__.Clip(message.data.id, message.data.state);
            this.clips.set(message.data.id, clip);
        }
        else if (message.data && message.data.action == "target") {
            this.targetParam = message.data.param;
        }
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
/*!***************************************!*\
  !*** ./src/StepModulatorProcessor.ts ***!
  \***************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StepModulatorKernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepModulatorKernel */ "./src/StepModulatorKernel.ts");

const moduleId = 'com.sequencerParty.stepmod';
const PPQN = 24;
const audioWorkletGlobalScope = globalThis;
const ModuleScope = audioWorkletGlobalScope.webAudioModules.getModuleScope(moduleId);
const { WamProcessor } = ModuleScope;
let quantizeValues = [
    1,
    3,
    6,
    12,
    24,
    96
];
class StepModulatorProcessor extends WamProcessor {
    constructor(options) {
        super(options);
        this.count = 0;
        const { moduleId, instanceId, } = options.processorOptions;
        this.lastTime = null;
        super.port.start();
        this.lastTime = null;
        this.ticks = 0;
        this.sequencers = {};
        this.sequencerOrder = [];
        this.currentClipId = "";
    }
    _generateWamParameterInfo() {
        let allParams = {};
        const seqs = this.allSequencers();
        for (let seq of seqs) {
            allParams = {
                ...allParams,
                ...seq.wamParameters()
            };
        }
        return allParams;
    }
    _process(startSample, endSample, inputs, outputs) {
        const { currentTime } = audioWorkletGlobalScope;
        if (this.pendingClipChange && this.pendingClipChange.timestamp <= currentTime) {
            this.currentClipId = this.pendingClipChange.id;
            this.pendingClipChange = undefined;
        }
        if (!this.transportData) {
            return;
        }
        if (this.transportData.playing && currentTime > this.transportData.currentBarStarted) {
            var timeElapsed = currentTime - this.transportData.currentBarStarted;
            var beatPosition = (this.transportData.currentBar * this.transportData.timeSigNumerator) + ((this.transportData.tempo / 60.0) * timeElapsed);
            var tickPosition = Math.floor(beatPosition * PPQN);
            const sequencers = this.allSequencers();
            sequencers.forEach((sequencer, index) => {
                sequencer.process(this.currentClipId, tickPosition, this._parameterState);
                if (this.activeSteps) {
                    this.activeSteps[index] = sequencer.activeStep;
                }
            });
        }
        return;
    }
    async _onMessage(message) {
        var _a, _b, _c, _d, _e;
        if (((_a = message.data) === null || _a === void 0 ? void 0 : _a.source) == "stepBuffer") {
            const sharedBuffer = message.data.buffer;
            this.activeSteps = new Float32Array(sharedBuffer);
        }
        else if (((_b = message.data) === null || _b === void 0 ? void 0 : _b.source) == "add") {
            const seq = new _StepModulatorKernel__WEBPACK_IMPORTED_MODULE_0__.StepModulatorKernel(message.data.id, this.sequencerOrder.length, this);
            seq.setRow(this.sequencerOrder.length);
            this.sequencers[message.data.id] = seq;
            this.sequencerOrder.push(message.data.id);
            this.updateParameters();
        }
        else if (((_c = message.data) === null || _c === void 0 ? void 0 : _c.source) == "delete") {
            if (this.sequencers[message.data.id]) {
                delete this.sequencers[message.data.id];
            }
            this.sequencerOrder = this.sequencerOrder.filter(id => id != message.data.id);
            this.sequencerOrder.forEach((id, index) => this.sequencers[id].setRow(index));
            this.updateParameters();
        }
        else if (((_d = message.data) === null || _d === void 0 ? void 0 : _d.source) == "order") {
            this.sequencerOrder = message.data.sequencerOrder;
            this.sequencerOrder.forEach((id, index) => this.sequencers[id].setRow(index));
            this.updateParameters();
        }
        else if (((_e = message.data) === null || _e === void 0 ? void 0 : _e.source) == "sequencer") {
            await this.sequencers[message.data.sequencerId].onMessage(message);
        }
        else if (message.data && message.data.action == "play") {
            this.pendingClipChange = {
                id: message.data.id,
                timestamp: 0,
            };
        }
        else {
            await super._onMessage(message);
        }
    }
    _onTransport(transportData) {
        this.transportData = transportData;
    }
    _onMidi(midiData) {
        const { currentTime } = audioWorkletGlobalScope;
        if ((midiData.bytes[0] & 0xf0) == 0x90) {
            const seqs = this.allSequencers();
            for (let s of seqs) {
                const clip = s.clips.get(this.currentClipId);
                if (clip && clip.state.speed == 0) {
                    s.activeStep = (s.activeStep + 1) % clip.length();
                    s.update(clip, this._parameterState);
                }
            }
        }
        this.emitEvents({
            type: "wam-midi",
            data: midiData,
            time: currentTime
        });
    }
    allSequencers() {
        return this.sequencerOrder.map(id => this.sequencers[id]);
    }
    updateParameters() {
        const parameters = this._generateWamParameterInfo();
        let oldState = this._parameterState;
        this._initialize();
        for (let paramID of Object.keys(oldState)) {
            if (!!this._parameterState[paramID]) {
                let update = {
                    id: oldState[paramID].id,
                    value: oldState[paramID].value,
                    normalized: false,
                };
                this._setParameterValue(update, false);
                this._parameterState[paramID].value = oldState[paramID].value;
            }
        }
    }
}
try {
    audioWorkletGlobalScope.registerProcessor(moduleId, StepModulatorProcessor);
}
catch (error) {
    console.warn(error);
}

})();

/******/ })()
;