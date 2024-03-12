/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!******************************************!*\
  !*** ./src/EnvelopeFollowerProcessor.ts ***!
  \******************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getEnvelopeFollowerProcessor = (moduleId) => {
    const audioWorkletGlobalScope = globalThis;
    const { registerProcessor } = audioWorkletGlobalScope;
    const ModuleScope = audioWorkletGlobalScope.webAudioModules.getModuleScope(moduleId);
    const { WamProcessor, WamParameterInfo, } = ModuleScope;
    class EnvelopeFollowerProcessor extends WamProcessor {
        constructor(options) {
            super(options);
            this.count = 0;
            this.lastValue = 0;
        }
        _generateWamParameterInfo() {
            return {
                base: new WamParameterInfo('base', {
                    type: 'float',
                    label: 'Base',
                    defaultValue: 0,
                    minValue: 0.0,
                    maxValue: 1.0,
                }),
                range: new WamParameterInfo('range', {
                    type: 'float',
                    label: 'Range',
                    defaultValue: 1.0,
                    minValue: -1.0,
                    maxValue: 1.0,
                }),
                slew: new WamParameterInfo('slew', {
                    type: 'float',
                    label: 'Slew',
                    defaultValue: 1.0,
                    minValue: 0.0,
                    maxValue: 1.0,
                }),
            };
        }
        _process(startSample, endSample, inputs, outputs) {
            if (inputs.length == 0) {
                return;
            }
            if (!this.targetParam) {
                return;
            }
            const input = inputs[0];
            let min = 1;
            let max = -1;
            for (let i = startSample; i < endSample; i++) {
                for (let c = 0; c < input.length; c++) {
                    min = Math.min(input[c][i], min);
                    max = Math.max(input[c][i], max);
                }
            }
            const amp = max >= min ? max - min : 0;
            let db = 20 * (Math.log(amp) / Math.log(10));
            if (db < -60) {
                db = -60;
            }
            if (db > 0) {
                db = 0;
            }
            const target = (60 + db) / 60;
            let currentValue;
            if (target > this.lastValue) {
                currentValue = target;
            }
            else {
                const slew = this._parameterInterpolators.slew.values[startSample];
                currentValue = this.lastValue + ((target - this.lastValue) * (slew) * slew * slew);
            }
            if (currentValue != this.lastValue) {
                this.lastValue = currentValue;
                const range = this._parameterInterpolators.range.values[startSample];
                const base = this._parameterInterpolators.base.values[startSample];
                const parameterRange = this.targetParam.maxValue - this.targetParam.minValue;
                const startPosition = this.targetParam.minValue + (parameterRange * base);
                let paramValue = startPosition + (currentValue * range * parameterRange);
                if (paramValue < this.targetParam.minValue) {
                    paramValue = this.targetParam.minValue;
                }
                if (paramValue > this.targetParam.maxValue) {
                    paramValue = this.targetParam.maxValue;
                }
                if (this.targetParam.type == 'int' || this.targetParam.type == 'choice' || this.targetParam.type == 'boolean') {
                    paramValue = Math.round(paramValue);
                }
                const { currentTime } = audioWorkletGlobalScope;
                this.emitEvents({
                    type: "wam-automation",
                    data: {
                        id: this.targetParam.id,
                        normalized: false,
                        value: paramValue
                    },
                    time: currentTime
                });
            }
            return;
        }
        async _onMessage(message) {
            if (message.data && message.data.action == "target") {
                this.targetParam = message.data.param;
            }
            else {
                super._onMessage(message);
            }
        }
        _onTransport(transportData) {
        }
    }
    try {
        registerProcessor('com.sequencerParty.envmod', EnvelopeFollowerProcessor);
    }
    catch (error) {
        console.warn(error);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getEnvelopeFollowerProcessor);

/******/ })()
;