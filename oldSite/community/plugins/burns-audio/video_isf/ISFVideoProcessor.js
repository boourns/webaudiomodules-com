/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/*!**********************************!*\
  !*** ./src/ISFVideoProcessor.ts ***!
  \**********************************/
__webpack_require__.r(__webpack_exports__);
const moduleId = 'com.sequencerParty.isfVideo';
const audioWorkletGlobalScope = globalThis;
const ModuleScope = audioWorkletGlobalScope.webAudioModules.getModuleScope(moduleId);
const DynamicParameterProcessor = ModuleScope.DynamicParameterProcessor;
const WamProcessor = ModuleScope.WamProcessor;
class ISFVideoProcessor extends DynamicParameterProcessor {
}
try {
    audioWorkletGlobalScope.registerProcessor(moduleId, ISFVideoProcessor);
}
catch (error) {
    console.warn(error);
}


/******/ })()
;