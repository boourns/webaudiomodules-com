/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/OB6Kernel.ts":
/*!**************************!*\
  !*** ./src/OB6Kernel.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OB6Kernel: () => (/* binding */ OB6Kernel)
/* harmony export */ });
/* harmony import */ var _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/midi/SelectParameter */ "../shared/midi/SelectParameter.ts");
/* harmony import */ var _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/midi/IntParameter */ "../shared/midi/IntParameter.ts");
/* harmony import */ var _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/midi/ControlChangeMessager */ "../shared/midi/ControlChangeMessager.ts");
/* harmony import */ var _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/midi/NRPNMessager */ "../shared/midi/NRPNMessager.ts");
/* harmony import */ var _shared_midi_DSI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/midi/DSI */ "../shared/midi/DSI.ts");





const nrpnmsb = (num) => {
    return nrpn(num);
};
const nrpn = (num) => {
    return new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, num % 128, Math.floor(num / 128));
};
class OB6Kernel {
    constructor() {
        this.lastData = [];
        const off_on = [
            { value: 0, label: "Off" },
            { value: 1, label: "On" }
        ];
        const off_on_1 = [
            { value: 0, label: "Off" },
            { value: 1, label: "On" }
        ];
        this.parameters = {};
        this.sysexMap = new Map();
        this.parameters["portamento_time"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("portamento_time", "Portamento Time", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(5), 0, 0, 127);
        this.parameters["portamento"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("portamento", "Portamento", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(65), 0, off_on);
        const portamento_mode = [
            { value: 0, label: "Fixed Rate" },
            { value: 1, label: "Legato Rate" },
            { value: 2, label: "Fixed Time" },
            { value: 3, label: "Legato Time" },
        ];
        this.parameters["portamento_mode"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("portamento_mode", "Portamento Mode", nrpn(28), 0, portamento_mode);
        this.parameters["brightness"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("brightness", "Brightness", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(74), 0, 0, 127);
        this.parameters["env_amount"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("env_amount", "Env Amount", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(40), 100, 0, 127);
        this.parameters["env_velocity"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("env_velocity", "Env Velocity Amt", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(41), 64, 0, 127);
        this.parameters["env_attack"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("env_attack", "Env Attack", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(43), 0, 0, 127);
        this.parameters["env_decay"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("env_decay", "Env Decay", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(44), 40, 0, 127);
        this.parameters["env_sustain"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("env_sustain", "Env Sustain", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(45), 100, 0, 127);
        this.parameters["env_release"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("env_release", "Env Release", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(46), 20, 0, 127);
        this.parameters["fenv_amount"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("fenv_amount", "F. Env Amount", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(47), 70, 0, 127);
        this.parameters["fenv_attack"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("fenv_attack", "F. Env Attack", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(50), 0, 0, 127);
        this.parameters["fenv_decay"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("fenv_decay", "F. Env Decay", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(51), 30, 0, 127);
        this.parameters["fenv_sustain"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("fenv_sustain", "F. Env Sustain", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(52), 100, 0, 127);
        this.parameters["fenv_release"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("fenv_release", "F. Env Release", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(53), 40, 0, 127);
        this.parameters["filter_freq"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("filter_freq", "Filter Freq", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(102), 108, 0, 127);
        this.parameters["filter_res"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("filter_res", "Filter Res", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(103), 0, 0, 127);
        const filter_key = [
            { label: "Off", value: 0 },
            { label: "Half", value: 1 },
            { label: "Full", value: 2 }
        ];
        this.parameters["filter_key"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("filter_key", "Filter Key Amt", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(104), 1, filter_key);
        this.parameters["filter_vel"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("filter_vel", "Vel -> Filter", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(105), 1, off_on);
        this.parameters["filter_mode"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("filter_mode", "Filter Mode", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(106), 0, 0, 127);
        this.parameters["filter_bp"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("filter_bp", "Filter BP", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(107), 0, off_on);
        this.parameters["osc1_freq"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("osc1_freq", "Osc1 Freq", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(67), 32, 0, 60);
        this.parameters["osc1_shape"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("osc1_shape", "Osc1 Shape", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(70), 0, 0, 127);
        this.parameters["osc1_pw"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("osc1_pw", "Osc1 Pulse Width", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(71), 64, 0, 127);
        this.parameters["osc1_sync"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("osc1_sync", "Osc1 Sync", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 1, 0), 0, off_on_1);
        this.parameters["osc2_freq"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("osc2_freq", "Osc2 Freq", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(75), 32, 0, 60);
        this.parameters["osc2_shape"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("osc2_shape", "Osc2 Shape", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(78), 0, 0, 127);
        this.parameters["osc2_pw"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("osc2_pw", "Osc2 Pulse Width", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(79), 0, 0, 127);
        this.parameters["osc2_detune"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("osc2_detune", "Osc2 Detune", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 6, 0), 127, 0, 254);
        this.parameters["osc2_lo_freq"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("osc2_lo_freq", "Osc2 Lo Freq", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 10, 0), 0, off_on_1);
        this.parameters["osc2_key_track"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("osc2_key_track", "Osc2 Key Track", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 11, 0), 1, off_on_1);
        this.parameters["mixer_osc1"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("mixer_osc1", "Osc1 Level", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(69), 100, 0, 127);
        this.parameters["mixer_osc2"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("mixer_osc2", "Osc2 Level", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(77), 0, 0, 127);
        this.parameters["mixer_sub"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("mixer_sub", "Sub Level", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(8), 0, 0, 127);
        this.parameters["mixer_noise"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("mixer_noise", "Noise Level", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 32, 0), 0, 0, 127);
        this.parameters["distortion"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("distortion", "Distortion", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(9), 0, 0, 127);
        this.parameters["volume"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("volume", "Volume", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(7), 100, 0, 127);
        this.parameters["pan_spread"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("pan_spread", "Pan Spread", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 63, 0), 0, 0, 127);
        this.parameters["pb_range"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("pb_range", "Bend Range", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 31, 0), 0, 0, 12);
        this.parameters["lfo_freq"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("lfo_freq", "LFO Freq", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 88, 0), 40, 0, 254);
        this.parameters["lfo_amount"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("lfo_amount", "LFO Initial Amount", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 89, 0), 0, 0, 254);
        const lfo_shape = [
            { value: 0, label: "Sin" },
            { value: 1, label: "Saw" },
            { value: 2, label: "Rev Saw" },
            { value: 3, label: "Square" },
            { value: 4, label: "Random" }
        ];
        this.parameters["lfo_shape"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("lfo_shape", "LFO Shape", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 90, 0), 0, lfo_shape);
        this.parameters["lfo_sync"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("lfo_sync", "LFO Sync", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 91, 0), 0, off_on_1);
        this.parameters["lfo_freq1"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("lfo_freq1", "LFO -> Freq1", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 93, 0), 0, off_on_1);
        this.parameters["lfo_freq2"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("lfo_freq2", "LFO -> Freq2", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 94, 0), 0, off_on_1);
        const lfo_pw = [
            { value: 0, label: "Off" },
            { value: 1, label: "Osc1" },
            { value: 2, label: "Osc2" },
            { value: 3, label: "Osc 1/2" }
        ];
        this.parameters["lfo_pw"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("lfo_pw", "LFO -> PW 1/2", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 95, 0), 0, lfo_pw);
        this.parameters["lfo_amp"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("lfo_amp", "LFO -> Amp", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 96, 0), 0, off_on_1);
        this.parameters["lfo_mode"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("lfo_mode", "LFO -> Filter Mode", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 97, 0), 0, off_on_1);
        this.parameters["lfo_filter"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("lfo_filter", "LFO -> Filter", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 98, 0), 1, off_on_1);
        this.parameters["pressure_amt"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("pressure_amt", "Pressure Amt", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 109, 0), 150, 0, 254);
        this.parameters["pressure_freq1"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("pressure_freq1", "Pressure -> Freq1", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 110, 0), 0, off_on_1);
        this.parameters["pressure_freq2"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("pressure_freq2", "Pressure -> Freq2", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 111, 0), 0, off_on_1);
        this.parameters["pressure_filter"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("pressure_filter", "Pressure -> Filter", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 112, 0), 0, off_on_1);
        this.parameters["pressure_mode"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("pressure_mode", "Pressure -> F. Mode", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 113, 0), 0, off_on_1);
        this.parameters["pressure_vca"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("pressure_vca", "Pressure -> VCA", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 114, 0), 0, off_on_1);
        this.parameters["pressure_lfo"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("pressure_lfo", "Pressure -> LFO", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 115, 0), 1, off_on_1);
        const fx1_type = [
            { value: 0, label: "Off" },
            { value: 1, label: "BBD" },
            { value: 2, label: "DDL" },
            { value: 3, label: "Chorus" },
            { value: 4, label: "PH1" },
            { value: 5, label: "PH2" },
            { value: 6, label: "PH3" },
            { value: 7, label: "Ring Mod" },
            { value: 8, label: "FL1" },
            { value: 9, label: "FL2" }
        ];
        const fx2_type = [
            ...fx1_type,
            { value: 10, label: "Hall" },
            { value: 11, label: "Room" },
            { value: 12, label: "Plate" },
            { value: 13, label: "Spring" },
        ];
        this.parameters["fx1_type"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("fx1_type", "FX1 Type", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 119, 0), 1, fx1_type);
        this.parameters["fx1_mix"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("fx1_mix", "FX1 Mix", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 120, 0), 40, 0, 127);
        this.parameters["fx1_param1"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("fx1_param1", "FX1 Param 1", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 121, 0), 40, 0, 255);
        this.parameters["fx1_param2"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("fx1_param2", "FX1 Param 2", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 122, 0), 40, 0, 127);
        this.parameters["fx1_sync"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("fx1_sync", "FX1 Sync", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 123, 0), 0, off_on_1);
        this.parameters["fx2_type"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("fx2_type", "FX2 Type", new _shared_midi_NRPNMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMessager(false, 127, 0), 10, fx2_type);
        this.parameters["fx2_mix"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("fx2_mix", "FX2 Mix", nrpnmsb(128), 30, 0, 127);
        this.parameters["fx2_param1"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("fx2_param1", "FX2 Param 1", nrpn(129), 30, 0, 255);
        this.parameters["fx2_param2"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("fx2_param2", "FX2 Param 2", nrpnmsb(130), 30, 0, 127);
        this.parameters["fx2_sync"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("fx2_sync", "FX2 Sync", nrpnmsb(131), 0, off_on_1);
        this.parameters["fx_enable"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("fx_enable", "FX Enable", nrpnmsb(135), 0, off_on_1);
        this.parameters["xmod_filter_env"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("xmod_filter_env", "XMod Filter Env", nrpn(143), 127, 0, 254);
        this.parameters["xmod_osc2"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("xmod_osc2", "XMod Osc 2", nrpn(144), 127, 0, 254);
        this.parameters["xmod_freq1"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("xmod_freq1", "XMod -> Freq1", nrpnmsb(145), 0, off_on_1);
        this.parameters["xmod_shape1"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("xmod_shape1", "XMod -> Shape1", nrpnmsb(146), 1, off_on_1);
        this.parameters["xmod_pw1"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("xmod_pw1", "XMod -> PW 1", nrpnmsb(147), 0, off_on_1);
        this.parameters["xmod_filter"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("xmod_filter", "XMod -> Filter", nrpnmsb(148), 0, off_on_1);
        this.parameters["xmod_mode"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("xmod_mode", "XMod -> Filter Mode", nrpnmsb(149), 0, off_on_1);
        this.parameters["xmod_bp"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("xmod_bp", "XMod -> Filter BP", nrpnmsb(150), 0, off_on_1);
        const unison_mode = [
            { value: 0, label: "1" },
            { value: 1, label: "2" },
            { value: 2, label: "3" },
            { value: 3, label: "4" },
            { value: 4, label: "5" },
            { value: 5, label: "6" },
            { value: 6, label: "Chrd" },
        ];
        this.parameters["detune"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("detune", "Detune", nrpn(33), 0, 0, 127);
        this.parameters["unison"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("unison", "Unison", nrpnmsb(156), 0, off_on_1);
        this.parameters["unison_mode"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("unison_mode", "Unison Mode", nrpnmsb(157), 0, unison_mode);
        const key_mode = [
            { value: 0, label: "1" },
            { value: 1, label: "2" },
            { value: 2, label: "3" },
            { value: 3, label: "4" },
            { value: 4, label: "5" },
            { value: 5, label: "6" },
        ];
        this.parameters["key_mode"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("key_mode", "Key Mode", nrpnmsb(158), 0, key_mode);
        this.parameters["arp"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("arp", "Arpeggiator", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(58), 0, off_on);
        const arp_mode = [
            { value: 0, label: "Up" },
            { value: 1, label: "Down" },
            { value: 2, label: "Up/Down" },
            { value: 3, label: "Random" },
            { value: 4, label: "Assign" }
        ];
        this.parameters["arp_mode"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("arp_mode", "Arp Mode", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(59), 0, arp_mode);
        const arp_octave = [
            { value: 0, label: "1" },
            { value: 1, label: "2" },
            { value: 2, label: "3" }
        ];
        this.parameters["arp_octave"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("arp_octave", "Arp Octave", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(60), 1, arp_octave);
        const arp_time = [
            { value: 0, label: "Half" },
            { value: 1, label: "Quarter" },
            { value: 2, label: "Dotted 8th" },
            { value: 3, label: "8th" },
            { value: 4, label: "8th Swung" },
            { value: 5, label: "8th Trip" },
            { value: 6, label: "16th" },
            { value: 7, label: "16th Swung" },
            { value: 8, label: "16th Trip" },
            { value: 9, label: "32nd" }
        ];
        this.parameters["arp_time_sig"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("arp_time_sig", "Arp Time Sig", nrpnmsb(163), 6, arp_time);
        this.parameters["bpm"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("bpm", "BPM", nrpn(167), 120, 30, 250);
        this.buildSysexMap();
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
        let sysex = [];
        for (let i = 0; i < 1025; i++) {
            const sysexParam = this.sysexMap.get(i);
            if (sysexParam) {
                const kernelParam = this.parameters[sysexParam.id];
                if (!kernelParam) {
                    throw new Error(`sysex map refers to missing synth parameter ${sysexParam.id}`);
                }
                let value = kernelParam.value;
                if (sysexParam.factor !== undefined) {
                    value = value * sysexParam.factor;
                }
                sysex.push(value);
            }
            else {
                sysex.push(0);
            }
        }
        let packed = (0,_shared_midi_DSI__WEBPACK_IMPORTED_MODULE_4__.packDSI)(sysex);
        const preamble = [0xf0, 0x01, 0x2e, 0x03];
        return new Uint8Array([...preamble, ...packed, 0xf7]);
    }
    fromSysex(channel, sysex) {
        if (sysex[0] != 0xf0 || sysex[1] != 0x01 || sysex[2] != 0x2e) {
            console.log("failed preamble check");
            return false;
        }
        if (![0x02, 0x03].includes(sysex[3])) {
            console.log("sysex not single program data");
            return false;
        }
        let packedStart = (sysex[3] == 0x02) ? 6 : 4;
        const data = (0,_shared_midi_DSI__WEBPACK_IMPORTED_MODULE_4__.unpackDSI)(sysex, packedStart);
        console.log("Received unpacked ", data.length);
        for (let i = 0; i < data.length; i++) {
            const param = this.sysexMap.get(i);
            if (param) {
                let value = data[i];
                if (param.factor !== undefined) {
                    value = Math.floor(data[i] / param.factor);
                }
                this.parameters[param.id].updateFromSysex(value);
            }
        }
        return true;
    }
    buildSysexMap() {
        const sysex = [
            { index: 0, id: "osc1_freq" },
            { index: 11, id: "osc1_sync" },
            { index: 7, id: "mixer_osc1" },
            { index: 3, id: "osc1_shape", factor: 2 },
            { index: 5, id: "osc1_pw", factor: 2 },
            { index: 1, id: "osc2_freq" },
            { index: 2, id: "osc2_detune" },
            { index: 8, id: "mixer_osc2" },
            { index: 4, id: "osc2_shape", factor: 2 },
            { index: 6, id: "osc2_pw", factor: 2 },
            { index: 13, id: "osc2_lo_freq" },
            { index: 12, id: "osc2_key_track" },
            { index: 9, id: "mixer_sub" },
            { index: 15, id: "portamento_mode" },
            { index: 16, id: "portamento" },
            { index: 14, id: "portamento_time" },
            { index: 17, id: "pb_range" },
            { index: 10, id: "mixer_noise" },
            { index: 18, id: "detune" },
            { index: 19, id: "filter_freq", factor: 2 },
            { index: 20, id: "filter_res", factor: 2 },
            { index: 21, id: "filter_key" },
            { index: 22, id: "filter_vel" },
            { index: 23, id: "filter_mode", factor: 2 },
            { index: 26, id: "filter_bp" },
            { index: 62, id: "volume" },
            { index: 28, id: "pan_spread" },
            { index: 58, id: "distortion" },
            { index: 31, id: "env_amount" },
            { index: 36, id: "env_attack" },
            { index: 38, id: "env_decay" },
            { index: 40, id: "env_sustain" },
            { index: 42, id: "env_release" },
            { index: 43, id: "env_velocity" },
            { index: 29, id: "fenv_amount", factor: 2 },
            { index: 35, id: "fenv_attack" },
            { index: 37, id: "fenv_decay" },
            { index: 39, id: "fenv_sustain" },
            { index: 41, id: "fenv_release" },
            { index: 59, id: "lfo_freq" },
            { index: 63, id: "lfo_amount", factor: 2 },
            { index: 62, id: "lfo_shape" },
            { index: 61, id: "lfo_sync" },
            { index: 64, id: "lfo_freq1" },
            { index: 65, id: "lfo_freq2" },
            { index: 66, id: "lfo_pw" },
            { index: 69, id: "lfo_filter" },
            { index: 68, id: "lfo_mode" },
            { index: 67, id: "lfo_amp" },
            { index: 70, id: "pressure_amt" },
            { index: 71, id: "pressure_freq1" },
            { index: 72, id: "pressure_freq2" },
            { index: 73, id: "pressure_filter" },
            { index: 74, id: "pressure_mode" },
            { index: 75, id: "pressure_vca" },
            { index: 76, id: "pressure_lfo" },
            { index: 44, id: "fx1_type" },
            { index: 48, id: "fx1_mix" },
            { index: 50, id: "fx1_param1" },
            { index: 52, id: "fx1_param2" },
            { index: 54, id: "fx1_sync" },
            { index: 45, id: "fx2_type" },
            { index: 49, id: "fx2_mix" },
            { index: 51, id: "fx2_param1" },
            { index: 53, id: "fx2_param2" },
            { index: 55, id: "fx2_sync" },
            { index: 46, id: "fx_enable" },
            { index: 77, id: "xmod_filter_env" },
            { index: 76, id: "xmod_osc2" },
            { index: 79, id: "xmod_freq1" },
            { index: 80, id: "xmod_shape1" },
            { index: 81, id: "xmod_pw1" },
            { index: 82, id: "xmod_filter" },
            { index: 83, id: "xmod_mode" },
            { index: 88, id: "xmod_bp" },
            { index: 84, id: "unison" },
            { index: 85, id: "unison_mode" },
            { index: 86, id: "key_mode" },
            { index: 91, id: "arp" },
            { index: 89, id: "arp_mode" },
            { index: 90, id: "arp_octave" },
            { index: 92, id: "arp_time_sig" },
            { index: 87, id: "bpm" },
        ];
        for (let e of sysex) {
            if (this.sysexMap.get(e.index)) {
            }
            this.sysexMap.set(e.index, e);
        }
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

/***/ "../shared/midi/DSI.ts":
/*!*****************************!*\
  !*** ../shared/midi/DSI.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   packDSI: () => (/* binding */ packDSI),
/* harmony export */   unpackDSI: () => (/* binding */ unpackDSI)
/* harmony export */ });
function unpackDSI(packed, startIndex, endIndex = packed.length) {
    let result = [];
    let i;
    for (i = startIndex; i < endIndex; i += 8) {
        for (let j = 0; j < 7; j++) {
            const topBit = ((packed[i] & (0x1 << j)) != 0) ? 0x80 : 0;
            if (j + i + 1 < endIndex) {
                result.push(packed[j + i + 1] | topBit);
            }
        }
    }
    return result;
}
function packDSI(unpacked) {
    let result = [];
    let i;
    for (i = 0; i < unpacked.length; i += 7) {
        let dataSet = [];
        let topbitByte = 0;
        for (let j = 0; j < 7; j++) {
            if (i + j < unpacked.length) {
                let incoming = unpacked[i + j];
                if ((incoming & 0x80) != 0) {
                    topbitByte |= 0x1 << j;
                    incoming &= 0x7f;
                }
                dataSet.push(incoming);
            }
        }
        result.push(topbitByte);
        result.push(...dataSet);
    }
    return result;
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

/***/ "../shared/midi/NRPNMessager.ts":
/*!**************************************!*\
  !*** ../shared/midi/NRPNMessager.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MIDI_CC: () => (/* binding */ MIDI_CC),
/* harmony export */   NRPNMessager: () => (/* binding */ NRPNMessager)
/* harmony export */ });
const MIDI_CC = 0xB0;
const RPNCCs = [
    6,
    38,
    96,
    97,
    98,
    99,
    100,
    101
];
class NRPNMessager {
    constructor(registered, lsb, msb) {
        this.registered = registered;
        this.lsb = lsb;
        this.msb = msb;
        if (registered) {
            this.targetLSBCC = 100;
            this.targetMSBCC = 101;
        }
        else {
            this.targetLSBCC = 98;
            this.targetMSBCC = 99;
        }
    }
    ingestMIDI(currentChannel, currentValue, event) {
        if (currentChannel < 0 && (event.bytes[0] & 0xf0) != MIDI_CC) {
            return undefined;
        }
        if (currentChannel >= 0 && event.bytes[0] != MIDI_CC + currentChannel) {
            return undefined;
        }
        if (!RPNCCs.includes(event.bytes[1])) {
            return undefined;
        }
        if (event.bytes[1] == this.targetLSBCC) {
            this.lsbCorrect = (event.bytes[2] == this.lsb);
            return undefined;
        }
        if (event.bytes[1] == this.targetMSBCC) {
            this.msbCorrect = (event.bytes[2] == this.msb);
            return undefined;
        }
        if (!this.lsbCorrect || !this.msbCorrect) {
            return undefined;
        }
        if (event.bytes[1] == 96) {
            return currentValue + 1;
        }
        if (event.bytes[1] == 97) {
            return currentValue - 1;
        }
        if (event.bytes[1] == 38) {
            return currentValue & 0x3f80 + event.bytes[2];
        }
        if (event.bytes[1] == 6) {
            return (event.bytes[2] << 7) + (currentValue & 0x7f);
        }
        return undefined;
    }
    toMIDI(channel, value) {
        return [
            {
                type: "wam-midi",
                data: {
                    bytes: [MIDI_CC + channel, this.targetLSBCC, this.lsb]
                }
            },
            {
                type: "wam-midi",
                data: {
                    bytes: [MIDI_CC + channel, this.targetMSBCC, this.msb]
                }
            },
            {
                type: "wam-midi",
                data: {
                    bytes: [MIDI_CC + channel, 6, (value & 0x3f80) >> 7]
                }
            },
            {
                type: "wam-midi",
                data: {
                    bytes: [MIDI_CC + channel, 38, value & 0x7f]
                }
            },
        ];
    }
    sysexNeeded() {
        return false;
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
/*!*****************************!*\
  !*** ./src/OB6Processor.ts ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _OB6Kernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OB6Kernel */ "./src/OB6Kernel.ts");

const moduleId = "com.sequencerParty.ob6";
const audioWorkletGlobalScope = globalThis;
const scope = audioWorkletGlobalScope.webAudioModules.getModuleScope(moduleId);
const MIDIControllerProcessor = scope.MIDIControllerProcessor;
class OB6Processor extends MIDIControllerProcessor {
    loadKernel() {
        this.kernel = new _OB6Kernel__WEBPACK_IMPORTED_MODULE_0__.OB6Kernel();
    }
}
try {
    audioWorkletGlobalScope.registerProcessor(moduleId, OB6Processor);
}
catch (error) {
}

})();

/******/ })()
;