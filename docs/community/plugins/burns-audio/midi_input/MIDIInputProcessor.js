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
/*!***********************************!*\
  !*** ./src/MIDIInputProcessor.ts ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const getMIDIInputProcessor = (moduleId) => {
    const audioWorkletGlobalScope = globalThis;
    const { registerProcessor } = audioWorkletGlobalScope;
    const ModuleScope = audioWorkletGlobalScope.webAudioModules.getModuleScope(moduleId);
    const { WamProcessor, WamParameterInfo, } = ModuleScope;
    class MIDIInputProcessor extends WamProcessor {
        constructor(options) {
            super(options);
            this.count = 0;
        }
        _process(startSample, endSample, inputs, outputs) {
            return;
        }
        async _onMessage(message) {
            const { currentTime } = audioWorkletGlobalScope;
            if (message.data && message.data.source == "midi") {
                this.emitEvents({ type: 'wam-midi', time: currentTime, data: { bytes: message.data.bytes } });
            }
            else if (message.data && message.data.source == "sysex") {
                this.emitEvents({ type: 'wam-sysex', time: currentTime, data: { bytes: message.data.bytes } });
            }
            else {
                super._onMessage(message);
            }
        }
        _onTransport(transportData) {
            this.transportData = transportData;
        }
    }
    try {
        registerProcessor('com.sequencerParty.MIDIIn', MIDIInputProcessor);
    }
    catch (error) {
        console.warn(error);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getMIDIInputProcessor);

/******/ })()
;