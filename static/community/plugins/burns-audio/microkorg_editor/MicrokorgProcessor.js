/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/MicrokorgKernel.ts":
/*!********************************!*\
  !*** ./src/MicrokorgKernel.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MicrokorgKernel: () => (/* binding */ MicrokorgKernel)
/* harmony export */ });
/* harmony import */ var _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../shared/midi/SelectParameter */ "../shared/midi/SelectParameter.ts");
/* harmony import */ var _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/midi/IntParameter */ "../shared/midi/IntParameter.ts");
/* harmony import */ var _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/midi/ControlChangeMessager */ "../shared/midi/ControlChangeMessager.ts");
/* harmony import */ var _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/midi/NRPNMSBMessager */ "../shared/midi/NRPNMSBMessager.ts");
/* harmony import */ var _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/midi/SysexMessager */ "../shared/midi/SysexMessager.ts");
/* harmony import */ var _shared_midi_BooleanParameter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/midi/BooleanParameter */ "../shared/midi/BooleanParameter.ts");
/* harmony import */ var _shared_midi_Korg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/midi/Korg */ "../shared/midi/Korg.ts");







class MicrokorgKernel {
    constructor() {
        this.voiceParameters = {};
        this.timbre1Parameters = this.initTimbre(1);
        this.timbre2Parameters = this.initTimbre(2);
        this.voiceParameters["modfx_speed"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("modfx_speed", "ModFX LFO Speed", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(12), 0, 0, 127);
        this.voiceParameters["modfx_depth"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("modfx_depth", "ModFX Depth", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(93), 0, 0, 127);
        const modfxTypes = [
            { value: 0, label: "Chorus/Flanger" },
            { value: 1, label: "Ensemble" },
            { value: 2, label: "Phaser" }
        ];
        this.voiceParameters["modfx_type"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("modfx_type", "ModFX Type", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, modfxTypes);
        this.voiceParameters["delay_time"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("delay_time", "Delay Time", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(13), 0, 0, 127);
        this.voiceParameters["delay_depth"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("delay_depth", "Delay Depth", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(94), 0, 0, 127);
        this.voiceParameters["delay_sync"] = new _shared_midi_BooleanParameter__WEBPACK_IMPORTED_MODULE_5__.BooleanParameter("delay_sync", "Delay Sync", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, 0, 1);
        const delayTimebase = [
            { value: 0, label: "1/32" },
            { value: 1, label: "1/24" },
            { value: 2, label: "1/16" },
            { value: 3, label: "1/12" },
            { value: 4, label: "3/32" },
            { value: 5, label: "1/8" },
            { value: 6, label: "1/6" },
            { value: 7, label: "3/16" },
            { value: 8, label: "1/4" },
            { value: 9, label: "1/3" },
            { value: 10, label: "3/8" },
            { value: 11, label: "1/2" },
            { value: 12, label: "2/3" },
            { value: 13, label: "3/4" },
            { value: 14, label: "1/1" },
        ];
        this.voiceParameters["delay_sync_division"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("delay_sync_division", "Delay Sync Division", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, delayTimebase);
        const delayTypes = [
            { value: 0, label: "Stereo" },
            { value: 1, label: "Cross" },
            { value: 2, label: "L/R" }
        ];
        this.voiceParameters["delay_type"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("delay_type", "Delay Type", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, delayTypes);
        const off_on = [
            { value: 0, label: "Off" },
            { value: 127, label: "On" }
        ];
        this.voiceParameters["arp_enabled"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("arp_enabled", "Arpeggiator", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 0, 2), 0, off_on);
        const arp_range = [
            { value: 0, label: "1 Oct" },
            { value: 1, label: "2 Oct" },
            { value: 2, label: "3 Oct" },
            { value: 3, label: "4 Oct" },
        ];
        this.voiceParameters["arp_range"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("arp_range", "Arp Range", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 0, 3), 0, arp_range);
        this.voiceParameters["arp_latch"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("arp_latch", "Arp Latch", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 0, 4), 0, off_on);
        const arp_type = [
            { value: 0, label: "Up" },
            { value: 26, label: "Down" },
            { value: 51, label: "Alt1" },
            { value: 77, label: "Alt2" },
            { value: 102, label: "Random" },
            { value: 127, label: "Trigger" }
        ];
        this.voiceParameters["arp_type"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("arp_type", "Arp Type", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 0, 7), 0, arp_type);
        this.voiceParameters["arp_gate"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("arp_gate", "Arp Gate Len", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 50, 0, 100);
        this.voiceParameters["arp_steps"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("arp_steps", "Arp Steps", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 8, 1, 8);
        for (let i = 1; i < 9; i++) {
            this.voiceParameters[`arp_step_${i}`] = new _shared_midi_BooleanParameter__WEBPACK_IMPORTED_MODULE_5__.BooleanParameter(`arp_step_${i}`, `Arp Step ${i}`, new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 1, 0, 1);
        }
        this.voiceParameters["arp_tempo"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("arp_tempo", "Arp Tempo", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 120, 20, 300);
        const arpTargets = [
            { value: 0, label: "Both" },
            { value: 1, label: "Timbre 1" },
            { value: 2, label: "Timbre 3" }
        ];
        this.voiceParameters["arp_target"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("arp_target", "Arp Target", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, arpTargets);
        this.voiceParameters["arp_key_sync"] = new _shared_midi_BooleanParameter__WEBPACK_IMPORTED_MODULE_5__.BooleanParameter("arp_key_sync", "Arp Key Sync", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, 0, 1);
        const arpResolution = [
            { value: 0, label: "1/24" },
            { value: 1, label: "1/16" },
            { value: 2, label: "1/12" },
            { value: 3, label: "1/8" },
            { value: 4, label: "1/6" },
            { value: 5, label: "1/4" }
        ];
        this.voiceParameters["arp_resolution"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("arp_resolution", "Arp Resolution", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 1, arpResolution);
        this.voiceParameters["arp_swing"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("arp_swing", "Arp Swing", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 50, 0, 100);
        const voice_types = [
            { value: 0, label: "Single" },
            { value: 2, label: "Layer" },
            { value: 3, label: "Vocoder" },
        ];
        this.voiceParameters["voice_mode"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("voice_mode", "Voice Mode", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, voice_types);
        const hiFreqs = [
            { value: 0, label: "1.00kHz" },
            { value: 1, label: "1.25kHz" },
            { value: 2, label: "1.50kHz" },
            { value: 3, label: "1.75kHz" },
            { value: 4, label: "2.00kHz" },
            { value: 5, label: "2.25kHz" },
            { value: 6, label: "2.50kHz" },
            { value: 7, label: "2.75kHz" },
            { value: 8, label: "3.00kHz" },
            { value: 9, label: "3.25kHz" },
            { value: 10, label: "3.50kHz" },
            { value: 11, label: "3.75kHz" },
            { value: 12, label: "4.00kHz" },
            { value: 13, label: "4.25kHz" },
            { value: 14, label: "4.50kHz" },
            { value: 15, label: "4.75kHz" },
            { value: 16, label: "5.00kHz" },
            { value: 17, label: "5.25kHz" },
            { value: 18, label: "5.50kHz" },
            { value: 19, label: "5.75kHz" },
            { value: 20, label: "6.00kHz" },
            { value: 21, label: "7.00kHz" },
            { value: 22, label: "8.00kHz" },
            { value: 23, label: "9.00kHz" },
            { value: 24, label: "10.0kHz" },
            { value: 25, label: "11.0kHz" },
            { value: 26, label: "12.0kHz" },
            { value: 27, label: "14.0kHz" },
            { value: 28, label: "16.0kHz" },
            { value: 29, label: "18.0kHz" }
        ];
        this.voiceParameters["eq_hi_freq"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("eq_hi_freq", "EQ Hi Freq", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 16, hiFreqs);
        this.voiceParameters["eq_hi_gain"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("eq_hi_gain", "EQ Hi Gain", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, -12, 12);
        const loFreqs = [
            { value: 0, label: "40Hz" },
            { value: 1, label: "50Hz" },
            { value: 2, label: "60Hz" },
            { value: 3, label: "80Hz" },
            { value: 4, label: "100Hz" },
            { value: 5, label: "120Hz" },
            { value: 6, label: "140Hz" },
            { value: 7, label: "160Hz" },
            { value: 8, label: "180Hz" },
            { value: 9, label: "200Hz" },
            { value: 10, label: "220Hz" },
            { value: 11, label: "240Hz" },
            { value: 12, label: "260Hz" },
            { value: 13, label: "280Hz" },
            { value: 14, label: "300Hz" },
            { value: 15, label: "320Hz" },
            { value: 16, label: "340Hz" },
            { value: 17, label: "360Hz" },
            { value: 18, label: "380Hz" },
            { value: 19, label: "400Hz" },
            { value: 20, label: "420Hz" },
            { value: 21, label: "440Hz" },
            { value: 22, label: "460Hz" },
            { value: 23, label: "480Hz" },
            { value: 24, label: "500Hz" },
            { value: 25, label: "600Hz" },
            { value: 26, label: "700Hz" },
            { value: 27, label: "800Hz" },
            { value: 28, label: "900Hz" },
            { value: 29, label: "1000Hz" },
        ];
        this.voiceParameters["eq_lo_freq"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("eq_lo_freq", "EQ Lo Freq", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 16, loFreqs);
        this.voiceParameters["eq_lo_gain"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("eq_lo_gain", "EQ Lo Gain", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, -12, 12);
        this.voiceParameters["keyboard_oct"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("keyboard_oct", "Keyboard Octave", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, -3, 3);
        this.voiceParameters["voc_ch1_level"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_ch1_level", "Ch1 Level", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 16), 100, 0, 127);
        this.voiceParameters["voc_ch2_level"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_ch2_level", "Ch2 Level", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 18), 100, 0, 127);
        this.voiceParameters["voc_ch3_level"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_ch3_level", "Ch3 Level", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 20), 100, 0, 127);
        this.voiceParameters["voc_ch4_level"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_ch4_level", "Ch4 Level", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 22), 100, 0, 127);
        this.voiceParameters["voc_ch5_level"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_ch5_level", "Ch5 Level", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 24), 100, 0, 127);
        this.voiceParameters["voc_ch6_level"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_ch6_level", "Ch6 Level", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 26), 100, 0, 127);
        this.voiceParameters["voc_ch7_level"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_ch7_level", "Ch7 Level", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 28), 100, 0, 127);
        this.voiceParameters["voc_ch8_level"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_ch8_level", "Ch8 Level", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 30), 100, 0, 127);
        this.voiceParameters["voc_ch1_pan"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_ch1_pan", "Ch1 Pan", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 32), 0, -63, 63);
        this.voiceParameters["voc_ch2_pan"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_ch2_pan", "Ch2 Pan", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 34), 0, -63, 63);
        this.voiceParameters["voc_ch3_pan"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_ch3_pan", "Ch3 Pan", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 36), 0, -63, 63);
        this.voiceParameters["voc_ch4_pan"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_ch4_pan", "Ch4 Pan", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 38), 0, -63, 63);
        this.voiceParameters["voc_ch5_pan"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_ch5_pan", "Ch5 Pan", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 40), 0, -63, 63);
        this.voiceParameters["voc_ch6_pan"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_ch6_pan", "Ch6 Pan", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 42), 0, -63, 63);
        this.voiceParameters["voc_ch7_pan"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_ch7_pan", "Ch7 Pan", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 44), 0, -63, 63);
        this.voiceParameters["voc_ch8_pan"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_ch8_pan", "Ch8 Pan", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 46), 0, -63, 63);
        this.voiceParameters["voc_hpf_gate"] = new _shared_midi_BooleanParameter__WEBPACK_IMPORTED_MODULE_5__.BooleanParameter("voc_hpf_gate", "Input HPF Gate", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, 0, 1);
        this.voiceParameters["voc_hpf_level"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_hpf_level", "HPF Level", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, 0, 127);
        this.voiceParameters["voc_gate_sense"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_gate_sense", "Gate Sense", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, 0, 127);
        this.voiceParameters["voc_threshold"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_threshold", "Threshold", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, 0, 127);
        const shifts = [
            { value: 0, label: "0" },
            { value: 1, label: "+1" },
            { value: 2, label: "+2" },
            { value: 3, label: "-1" },
            { value: 4, label: "-2" },
        ];
        this.voiceParameters["voc_shift"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("voc_shift", "Voc: Formant Shift", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, shifts);
        const modSources = [
            { value: 0, label: "---" },
            { value: 1, label: "EG" },
            { value: 2, label: "LFO1" },
            { value: 3, label: "LFO2" },
            { value: 4, label: "Velocity" },
            { value: 5, label: "Kbd Track" },
            { value: 6, label: "Pitch Bend" },
            { value: 7, label: "Mod Wheel" },
        ];
        this.voiceParameters["voc_filter_mod"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter("voc_filter_mod", "Voc: Filter Mod Source", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, modSources);
        this.voiceParameters["voc_mod_level"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_mod_level", "Mod Level", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, -64, 64);
        this.voiceParameters["voc_ef_sense"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_ef_sense", "Voc: EF Sense", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, 0, 127);
        this.voiceParameters["voc_amp_direct"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter("voc_amp_direct", "Voc: Direct Level", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, 0, 127);
    }
    get parameters() {
        return {
            ...this.voiceParameters,
            ...this.timbre1Parameters,
            ...this.timbre2Parameters,
        };
    }
    initTimbre(t) {
        let p = "";
        let l = "";
        if (t == 2) {
            p = "t2_";
            l = "T2:";
        }
        let parameters = {};
        const voiceAssigns = [
            { value: 0, label: "Mono" },
            { value: 1, label: "Poly" },
            { value: 2, label: "Unison" }
        ];
        parameters[p + "voice_assign"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "voice_assign", l + "Voice Assign", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, voiceAssigns);
        parameters[p + "eg1_reset"] = new _shared_midi_BooleanParameter__WEBPACK_IMPORTED_MODULE_5__.BooleanParameter(p + "eg1_reset", l + "EG1 Reset", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 1, 0, 1);
        parameters[p + "eg2_reset"] = new _shared_midi_BooleanParameter__WEBPACK_IMPORTED_MODULE_5__.BooleanParameter(p + "eg2_reset", l + "EG2 Reset", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 1, 0, 1);
        const trigModes = [
            { value: 0, label: "Single" },
            { value: 1, label: "Multi" },
        ];
        parameters[p + "trig_mode"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "trig_mode", l + "Trig Mode", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, trigModes);
        parameters[p + "unison_detune"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "unison_detune", l + "Unison Detune", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, 0, 100);
        parameters[p + "tune"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "tune", l + "Tune", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, -50, +50);
        parameters[p + "bend_range"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "bend_range", l + "Bend Range", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, -12, +12);
        parameters[p + "transpose"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "transpose", l + "Transpose", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, -24, +24);
        parameters[p + "vibrato"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "vibrato", l + "Vibrato", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, -63, +63);
        parameters[p + "portamento"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "portamento", l + "Portamento", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(5), 0, 0, 127);
        const osc1WaveOptions = [
            { value: 0, label: "Saw" },
            { value: 18, label: "Square" },
            { value: 36, label: "Triangle" },
            { value: 54, label: "Sine" },
            { value: 72, label: "Vox Wave" },
            { value: 90, label: "DWGS" },
            { value: 108, label: "Noise" },
            { value: 126, label: "Audio In" }
        ];
        parameters[p + "osc1_wave"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "osc1_wave", l + "OSC1 Waveform", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(77), 0, osc1WaveOptions);
        parameters[p + "osc1_control1"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "osc1_control1", l + "OSC1 Control1", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(14), 0, 0, 127);
        parameters[p + "osc1_control2"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "osc1_control2", l + "OSC1 Control2", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(15), 0, 0, 127);
        const osc2WaveOptions = [
            { value: 0, label: "Saw" },
            { value: 64, label: "Square" },
            { value: 127, label: "Triangle" }
        ];
        const oscModOptions = [
            { value: 0, label: "Off" },
            { value: 43, label: "Ring Mod" },
            { value: 85, label: "Sync" },
            { value: 127, label: "Ring&Sync" }
        ];
        parameters[p + "osc2_wave"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "osc2_wave", l + "OSC2 Waveform", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(78), 0, osc2WaveOptions);
        parameters[p + "osc_mod"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "osc_mod", l + "OSC Modulation", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(82), 0, oscModOptions);
        parameters[p + "osc2_tune"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "osc2_tune", l + "OSC2 Tune", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager, 0, -24, 24);
        parameters[p + "osc2_finetune"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "osc2_finetune", l + "OSC2 Finetune", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(19), 0, -64, 63);
        parameters[p + "mixer_osc1"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "mixer_osc1", l + "OSC1 Level", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(20), 100, 0, 127);
        parameters[p + "mixer_osc2"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "mixer_osc2", l + "OSC2 Level", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(21), 0, 0, 127);
        parameters[p + "mixer_noise"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "mixer_noise", l + "Noise Level", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(22), 0, 0, 127);
        const filterTypes = [
            { value: 0, label: "-24LPF" },
            { value: 43, label: "-12LPF" },
            { value: 85, label: "-12BPF" },
            { value: 127, label: "-12HPF" }
        ];
        parameters[p + "filter_type"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "filter_type", l + "Filter Type", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(83), 0, filterTypes);
        parameters[p + "filter_freq"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "filter_freq", l + "Filter Frequency", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(74), 100, 0, 127);
        parameters[p + "filter_res"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "filter_res", l + "Filter Resonance", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(71), 0, 0, 127);
        parameters[p + "filter_env"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "filter_env", l + "Filter Env Depth", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(79), 0, -64, 63);
        parameters[p + "filter_keyboard"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "filter_keyboard", l + "Filter Keyboard Track", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(85), 0, -64, 63);
        parameters[p + "f_eg_attack"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "f_eg_attack", l + "Filter EG Attack", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(23), 0, 0, 127);
        parameters[p + "f_eg_decay"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "f_eg_decay", l + "Filter EG Decay", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(24), 0, 0, 127);
        parameters[p + "f_eg_sustain"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "f_eg_sustain", l + "Filter EG Sustain", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(25), 0, 0, 127);
        parameters[p + "f_eg_release"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "f_eg_release", l + "Filter EG Release", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(26), 0, 0, 127);
        parameters[p + "amp_level"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "amp_level", l + "Amp Level", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(7), 100, 0, 127);
        parameters[p + "amp_pan"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "amp_pan", l + "Amp Pan", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(10), 0, -64, 63);
        const off_on = [
            { value: 0, label: "Off" },
            { value: 127, label: "On" }
        ];
        parameters[p + "amp_distortion"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "amp_distortion", l + "Distortion", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(92), 0, off_on);
        parameters[p + "amp_eg_attack"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "amp_eg_attack", l + "Amp EG Attack", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(73), 0, 0, 127);
        parameters[p + "amp_eg_decay"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "amp_eg_decay", l + "Amp EG Decay", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(75), 50, 0, 127);
        parameters[p + "amp_eg_sustain"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "amp_eg_sustain", l + "Amp EG Sustain", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(70), 50, 0, 127);
        parameters[p + "amp_eg_release"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "amp_eg_release", l + "Amp EG Release", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(72), 15, 0, 127);
        parameters[p + "amp_keyboard"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "amp_keyboard", l + "Amp Kybd Track", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, -63, 63);
        const lfo1Waves = [
            { value: 0, label: "Saw" },
            { value: 43, label: "Square" },
            { value: 85, label: "Triangle" },
            { value: 127, label: "S/H" }
        ];
        const lfo2Waves = [
            { value: 0, label: "Saw" },
            { value: 43, label: "Square" },
            { value: 85, label: "Triangle" },
            { value: 127, label: "S/H" }
        ];
        const lfoKeySync = [
            { value: 0, label: "Off" },
            { value: 1, label: "Timbre" },
            { value: 2, label: "Voice" },
        ];
        const lfoTimeBase = [
            { value: 0, label: "1/1" },
            { value: 1, label: "3/4" },
            { value: 2, label: "2/3" },
            { value: 3, label: "1/2" },
            { value: 4, label: "3/8" },
            { value: 5, label: "1/3" },
            { value: 6, label: "1/4" },
            { value: 7, label: "3/16" },
            { value: 8, label: "1/6" },
            { value: 9, label: "1/8" },
            { value: 10, label: "3/32" },
            { value: 11, label: "1/12" },
            { value: 12, label: "1/16" },
            { value: 13, label: "1/24" },
            { value: 14, label: "1/32" },
        ];
        parameters[p + "lfo1_wave"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "lfo1_wave", l + "LFO1 Wave", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(87), 0, lfo1Waves);
        parameters[p + "lfo1_freq"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "lfo1_freq", l + "LFO1 Freq", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(27), 0, 0, 127);
        parameters[p + "lfo1_keysync"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "lfo1_keysync", l + "LFO1 Key Sync", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, lfoKeySync);
        parameters[p + "lfo1_temposync"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "lfo1_temposync", l + "LFO1 Tempo Sync", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, off_on);
        parameters[p + "lfo1_timebase"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "lfo1_timebase", l + "LFO1 Timebase", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, lfoTimeBase);
        parameters[p + "lfo2_wave"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "lfo2_wave", l + "LFO2 Wave", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(88), 0, lfo2Waves);
        parameters[p + "lfo2_freq"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "lfo2_freq", l + "LFO2 Freq", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(76), 0, 0, 127);
        parameters[p + "lfo2_keysync"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "lfo2_keysync", l + "LFO2 Key Sync", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, lfoKeySync);
        parameters[p + "lfo2_temposync"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "lfo2_temposync", l + "LFO2 Tempo Sync", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, off_on);
        parameters[p + "lfo2_timebase"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "lfo2_timebase", l + "LFO2 Timebase", new _shared_midi_SysexMessager__WEBPACK_IMPORTED_MODULE_4__.SysexMessager(), 0, lfoTimeBase);
        parameters[p + "patch1_level"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "patch1_level", l + "Patch1 Level", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(28), 0, -64, 63);
        parameters[p + "patch2_level"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "patch2_level", l + "Patch2 Level", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(29), 0, -64, 63);
        parameters[p + "patch3_level"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "patch3_level", l + "Patch3 Level", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(30), 0, -64, 63);
        parameters[p + "patch4_level"] = new _shared_midi_IntParameter__WEBPACK_IMPORTED_MODULE_1__.IntParameter(p + "patch4_level", l + "Patch4 Level", new _shared_midi_ControlChangeMessager__WEBPACK_IMPORTED_MODULE_2__.ControlChangeMessager(31), 0, -64, 63);
        const patchSources = [
            { value: 0, label: "Filter EG" },
            { value: 18, label: "Amp EG" },
            { value: 36, label: "LFO1" },
            { value: 54, label: "LFO2" },
            { value: 72, label: "VELOCITY" },
            { value: 90, label: "KBD TRACK" },
            { value: 108, label: "Pitch Bend" },
            { value: 126, label: "Mod wheel" }
        ];
        const patchDest = [
            { value: 0, label: "Pitch" },
            { value: 18, label: "Osc2 Pitch" },
            { value: 36, label: "Osc1 CTRL1" },
            { value: 54, label: "Noise Level" },
            { value: 72, label: "Cutoff" },
            { value: 90, label: "Amp" },
            { value: 108, label: "Pan" },
            { value: 126, label: "LFO2 Freq" }
        ];
        parameters[p + "patch1_src"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "patch1_src", l + "Patch1 Src", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 0), 0, patchSources);
        parameters[p + "patch2_src"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "patch2_src", l + "Patch2 Src", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 1), 0, patchSources);
        parameters[p + "patch3_src"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "patch3_src", l + "Patch3 Src", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 2), 0, patchSources);
        parameters[p + "patch4_src"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "patch4_src", l + "Patch4 Src", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 3), 0, patchSources);
        parameters[p + "patch1_dest"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "patch1_dest", l + "Patch1 Dest", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 8), 0, patchDest);
        parameters[p + "patch2_dest"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "patch2_dest", l + "Patch2 Dest", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 9), 0, patchDest);
        parameters[p + "patch3_dest"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "patch3_dest", l + "Patch3 Dest", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 10), 0, patchDest);
        parameters[p + "patch4_dest"] = new _shared_midi_SelectParameter__WEBPACK_IMPORTED_MODULE_0__.SelectParameter(p + "patch4_dest", l + "Patch4 Dest", new _shared_midi_NRPNMSBMessager__WEBPACK_IMPORTED_MODULE_3__.NRPNMSBMessager(false, 4, 11), 0, patchDest);
        return parameters;
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
        if (event.bytes[0] == (0xb0 | channel)) {
            if (event.bytes[1] == 95) {
                if (event.bytes[2] == 0) {
                    this.selectedTimbre = 0;
                }
                else if (event.bytes[2] == 1) {
                    this.selectedTimbre = 1;
                }
                else {
                    this.selectedTimbre = 2;
                }
            }
            result = true;
        }
        for (let id of Object.keys(this.voiceParameters)) {
            if (this.voiceParameters[id].ingestMIDI(channel, event)) {
                result = true;
            }
        }
        if ([undefined, 0, 1].includes(this.selectedTimbre)) {
            for (let id of Object.keys(this.timbre1Parameters)) {
                if (this.timbre1Parameters[id].ingestMIDI(channel, event)) {
                    result = true;
                }
            }
        }
        else {
            for (let id of Object.keys(this.timbre2Parameters)) {
                if (this.timbre2Parameters[id].ingestMIDI(channel, event)) {
                    result = true;
                }
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
        const params = this.parameters;
        return Object.keys(params).some(id => params[id].sysexNeeded());
    }
    toSysex(channel) {
        let sysex = [];
        this.selectedTimbre = undefined;
        sysex.push(32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32, 32);
        sysex.push(0, 0);
        sysex.push(this.voiceParameters["arp_steps"].value - 1);
        let pattern = 0;
        for (let i = 0; i < 8; i++) {
            if (this.voiceParameters[`arp_step_${i + 1}`].value == 0) {
                pattern |= (1 << i);
            }
        }
        sysex.push(pattern);
        const voice_mode = this.voiceParameters["voice_mode"];
        sysex.push(0x40 | (voice_mode.options[voice_mode.value].value << 4));
        sysex.push(0);
        sysex.push(60);
        let delay_sync = (this.voiceParameters["delay_sync"].value == 1) ? 0x80 : 0;
        const syncbase = this.voiceParameters["delay_sync_division"];
        delay_sync |= syncbase.options[syncbase.value].value;
        sysex.push(delay_sync);
        sysex.push(this.voiceParameters["delay_time"].value);
        sysex.push(this.voiceParameters["delay_depth"].value);
        sysex.push(this.voiceParameters["delay_type"].value);
        sysex.push(this.voiceParameters["modfx_speed"].value);
        sysex.push(this.voiceParameters["modfx_depth"].value);
        sysex.push(this.voiceParameters["modfx_type"].value);
        sysex.push(this.voiceParameters["eq_hi_freq"].value);
        sysex.push(64 + this.voiceParameters["eq_hi_gain"].value);
        sysex.push(this.voiceParameters["eq_lo_freq"].value);
        sysex.push(64 + this.voiceParameters["eq_lo_gain"].value);
        const tempo = this.voiceParameters["arp_tempo"].value;
        sysex.push(tempo >> 8);
        sysex.push(tempo & 0xff);
        let arp = 0;
        if (this.voiceParameters["arp_enabled"].value > 0) {
            arp |= 0x80;
        }
        if (this.voiceParameters["arp_latch"].value > 0) {
            arp |= 0x40;
        }
        arp |= (this.voiceParameters["arp_target"].value << 4);
        arp |= this.voiceParameters["arp_key_sync"].value;
        sysex.push(arp);
        let arpTypeRange = this.voiceParameters["arp_type"].value;
        arpTypeRange |= (this.voiceParameters["arp_range"].value << 4);
        sysex.push(arpTypeRange);
        sysex.push(this.voiceParameters["arp_gate"].value);
        sysex.push(this.voiceParameters["arp_resolution"].value);
        sysex.push(this.voiceParameters["arp_swing"].value);
        let oct = this.voiceParameters["keyboard_oct"].value;
        if (oct < 0) {
            oct += 256;
        }
        sysex.push(oct);
        switch (voice_mode.value) {
            case 0:
            case 1:
                sysex = this.timbreToSysex(1, sysex, this.timbre1Parameters);
                sysex = this.timbreToSysex(2, sysex, this.timbre2Parameters);
                break;
            case 2:
                sysex = this.vocoderToSysex(sysex);
                break;
        }
        while (sysex.length < 254) {
            sysex.push(64);
        }
        let packed = (0,_shared_midi_Korg__WEBPACK_IMPORTED_MODULE_6__.packKorg)(sysex);
        const preamble = [0xf0, 0x42, 0x30 | channel, 0x58, 0x40];
        return new Uint8Array([...preamble, ...packed, 0xf7]);
    }
    vocoderToSysex(sysex) {
        const parameters = this.parameters;
        sysex.push(255);
        let assign = parameters["voice_assign"].value << 6;
        assign |= (parameters["eg2_reset"].value) << 5;
        assign |= (parameters["eg1_reset"].value) << 4;
        assign |= (parameters["trig_mode"].value) << 3;
        sysex.push(assign);
        sysex.push(parameters["unison_detune"].value);
        sysex.push(64 + parameters["tune"].value);
        sysex.push(64 + parameters["bend_range"].value);
        sysex.push(64 + parameters["transpose"].value);
        sysex.push(64 + parameters["vibrato"].value);
        const wave = parameters["osc1_wave"];
        sysex.push(wave.value);
        sysex.push(parameters["osc1_control1"].value);
        sysex.push(parameters["osc1_control2"].value);
        if (wave.value == 5) {
            let dwgs = parameters["osc1_control2"].value;
            if (dwgs > 64) {
                dwgs = 64;
            }
            sysex.push(dwgs);
        }
        else {
            sysex.push(0);
        }
        sysex.push(0);
        sysex.push(parameters["voc_hpf_gate"].value);
        sysex.push(0);
        sysex.push(parameters["portamento"].value);
        sysex.push(parameters["mixer_osc1"].value);
        sysex.push(parameters["mixer_osc2"].value);
        sysex.push(parameters["mixer_noise"].value);
        sysex.push(parameters["voc_hpf_level"].value);
        sysex.push(parameters["voc_gate_sense"].value);
        sysex.push(parameters["voc_threshold"].value);
        sysex.push(parameters["voc_shift"].value);
        sysex.push(parameters["filter_freq"].value);
        sysex.push(parameters["filter_res"].value);
        sysex.push(parameters["voc_filter_mod"].value);
        sysex.push(64 + parameters["voc_mod_level"].value);
        sysex.push(parameters["voc_ef_sense"].value);
        sysex.push(parameters["amp_level"].value);
        sysex.push(parameters["voc_amp_direct"].value);
        sysex.push(parameters["amp_distortion"].value);
        sysex.push(64);
        sysex.push(63 + parameters["amp_keyboard"].value);
        sysex.push(0);
        sysex.push(0);
        sysex.push(127);
        sysex.push(0);
        sysex.push(parameters["amp_eg_attack"].value);
        sysex.push(parameters["amp_eg_decay"].value);
        sysex.push(parameters["amp_eg_sustain"].value);
        sysex.push(parameters["amp_eg_release"].value);
        let lfo = parameters["lfo1_wave"].value;
        lfo |= parameters["lfo1_keysync"].value << 4;
        sysex.push(lfo);
        sysex.push(parameters["lfo1_freq"].value);
        lfo = (parameters["lfo1_temposync"].value << 7);
        lfo |= parameters["lfo1_timebase"].value;
        sysex.push(lfo);
        lfo = parameters["lfo2_wave"].value;
        lfo |= parameters["lfo2_keysync"].value << 4;
        sysex.push(lfo);
        sysex.push(parameters["lfo2_freq"].value);
        lfo = (parameters["lfo2_temposync"].value << 7);
        lfo |= parameters["lfo2_timebase"].value;
        sysex.push(lfo);
        for (let i = 0; i < 8; i++) {
            sysex.push(parameters[`voc_ch${i + 1}_level`].value);
            sysex.push(parameters[`voc_ch${i + 1}_level`].value);
        }
        for (let i = 0; i < 8; i++) {
            sysex.push(63 + parameters[`voc_ch${i + 1}_pan`].value);
            sysex.push(63 + parameters[`voc_ch${i + 1}_pan`].value);
        }
        for (let i = 0; i < 16; i++) {
            sysex.push(0x7f);
            sysex.push(0xff);
            sysex.push(0xff);
            sysex.push(0x00);
        }
        return sysex;
    }
    timbreToSysex(t, sysex, parameters) {
        let p = "";
        if (t == 2) {
            p = "t2_";
        }
        sysex.push(255);
        let assign = parameters[p + "voice_assign"].value << 6;
        assign |= (parameters[p + "eg2_reset"].value) << 5;
        assign |= (parameters[p + "eg1_reset"].value) << 4;
        assign |= (parameters[p + "trig_mode"].value) << 3;
        sysex.push(assign);
        sysex.push(parameters[p + "unison_detune"].value);
        sysex.push(64 + parameters[p + "tune"].value);
        sysex.push(64 + parameters[p + "bend_range"].value);
        sysex.push(64 + parameters[p + "transpose"].value);
        sysex.push(64 + parameters[p + "vibrato"].value);
        const wave = parameters[p + "osc1_wave"];
        sysex.push(wave.value);
        sysex.push(parameters[p + "osc1_control1"].value);
        sysex.push(parameters[p + "osc1_control2"].value);
        if (wave.value == 5) {
            let dwgs = parameters[p + "osc1_control2"].value;
            if (dwgs > 64) {
                dwgs = 64;
            }
            sysex.push(dwgs);
        }
        else {
            sysex.push(0);
        }
        sysex.push(0);
        let osc2 = parameters[p + "osc2_wave"].value;
        osc2 |= parameters[p + "osc_mod"].value << 4;
        sysex.push(osc2);
        sysex.push(64 + parameters[p + "osc2_tune"].value);
        sysex.push(64 + parameters[p + "osc2_finetune"].value);
        sysex.push(parameters[p + "portamento"].value);
        sysex.push(parameters[p + "mixer_osc1"].value);
        sysex.push(parameters[p + "mixer_osc2"].value);
        sysex.push(parameters[p + "mixer_noise"].value);
        sysex.push(parameters[p + "filter_type"].value);
        sysex.push(parameters[p + "filter_freq"].value);
        sysex.push(parameters[p + "filter_res"].value);
        sysex.push(64 + parameters[p + "filter_env"].value);
        sysex.push(64);
        sysex.push(64 + parameters[p + "filter_keyboard"].value);
        sysex.push(parameters[p + "amp_level"].value);
        sysex.push(64 + parameters[p + "amp_pan"].value);
        sysex.push(parameters[p + "amp_distortion"].value);
        sysex.push(64);
        sysex.push(63 + parameters[p + "amp_keyboard"].value);
        sysex.push(parameters[p + "f_eg_attack"].value);
        sysex.push(parameters[p + "f_eg_decay"].value);
        sysex.push(parameters[p + "f_eg_sustain"].value);
        sysex.push(parameters[p + "f_eg_release"].value);
        sysex.push(parameters[p + "amp_eg_attack"].value);
        sysex.push(parameters[p + "amp_eg_decay"].value);
        sysex.push(parameters[p + "amp_eg_sustain"].value);
        sysex.push(parameters[p + "amp_eg_release"].value);
        let lfo = parameters[p + "lfo1_wave"].value;
        lfo |= parameters[p + "lfo1_keysync"].value << 4;
        sysex.push(lfo);
        sysex.push(parameters[p + "lfo1_freq"].value);
        lfo = (parameters[p + "lfo1_temposync"].value << 7);
        lfo |= parameters[p + "lfo1_timebase"].value;
        sysex.push(lfo);
        lfo = parameters[p + "lfo2_wave"].value;
        lfo |= parameters[p + "lfo2_keysync"].value << 4;
        sysex.push(lfo);
        sysex.push(parameters[p + "lfo2_freq"].value);
        lfo = (parameters[p + "lfo2_temposync"].value << 7);
        lfo |= parameters[p + "lfo2_timebase"].value;
        sysex.push(lfo);
        sysex.push((parameters[p + "patch1_dest"].value << 4) | parameters[p + "patch1_src"].value);
        sysex.push(parameters[p + "patch1_level"].value + 64);
        sysex.push((parameters[p + "patch2_dest"].value << 4) | parameters[p + "patch2_src"].value);
        sysex.push(parameters[p + "patch2_level"].value + 64);
        sysex.push((parameters[p + "patch3_dest"].value << 4) | parameters[p + "patch3_src"].value);
        sysex.push(parameters[p + "patch3_level"].value + 64);
        sysex.push((parameters[p + "patch4_dest"].value << 4) | parameters[p + "patch4_src"].value);
        sysex.push(parameters[p + "patch4_level"].value + 64);
        for (let i = 52; i <= 55; i++) {
            sysex.push(0);
        }
        for (let i = 56; i <= 107; i++) {
            sysex.push(64);
        }
        return sysex;
    }
    fromSysex(channel, sysex) {
        if (sysex[0] != 0xf0 || sysex[1] != 0x42 || sysex[2] != (0x30 | channel) || sysex[3] != 0x58) {
            return false;
        }
        if (![0x40, 0x4c].includes(sysex[4])) {
            console.error("sysex not single program data");
            return false;
        }
        let data = (0,_shared_midi_Korg__WEBPACK_IMPORTED_MODULE_6__.unpackKorg)(sysex, 5, sysex.length - 1);
        this.voiceParameters["arp_steps"].updateFromSysex(data[14] + 1);
        for (let i = 0; i < 8; i++) {
            if (data[15] & (0x1 << i)) {
                this.voiceParameters[`arp_step_${i + 1}`].updateFromSysex(0);
            }
            else {
                this.voiceParameters[`arp_step_${i + 1}`].updateFromSysex(1);
            }
        }
        let voice_mode = ((data[16] & 0x30) >> 4);
        if (voice_mode > 0) {
            voice_mode--;
        }
        this.voiceParameters['voice_mode'].updateFromSysex(voice_mode);
        const delay = data[19];
        this.voiceParameters['delay_sync'].updateFromSysex((delay & 0x80) ? 1 : 0);
        this.voiceParameters['delay_sync_division'].updateFromSysex(delay & 0x0f);
        this.voiceParameters["delay_time"].updateFromSysex(data[20]);
        this.voiceParameters["delay_depth"].updateFromSysex(data[21]);
        this.voiceParameters["delay_type"].updateFromSysex(data[22]);
        this.voiceParameters["modfx_speed"].updateFromSysex(data[23]);
        this.voiceParameters["modfx_depth"].updateFromSysex(data[24]);
        this.voiceParameters["modfx_type"].updateFromSysex(data[25]);
        this.voiceParameters["eq_hi_freq"].updateFromSysex(data[26]);
        this.voiceParameters["eq_hi_gain"].updateFromSysex(data[27] - 64);
        this.voiceParameters["eq_lo_freq"].updateFromSysex(data[28]);
        this.voiceParameters["eq_lo_gain"].updateFromSysex(data[29] - 64);
        const tempo = (data[30] << 8) + data[31];
        this.voiceParameters["arp_tempo"].updateFromSysex(tempo);
        const arp = data[32];
        this.voiceParameters["arp_enabled"].updateFromSysex((arp & 0x80) ? 1 : 0);
        this.voiceParameters["arp_latch"].updateFromSysex((arp & 0x40) ? 1 : 0);
        this.voiceParameters["arp_target"].updateFromSysex((arp & 0x30) >> 4);
        this.voiceParameters["arp_key_sync"].updateFromSysex((arp & 0x01) ? 1 : 0);
        const arpTypeRange = data[33];
        this.voiceParameters["arp_type"].updateFromSysex(arpTypeRange & 0x0f);
        this.voiceParameters["arp_range"].updateFromSysex(arpTypeRange >> 4);
        this.voiceParameters["arp_gate"].updateFromSysex(data[34]);
        this.voiceParameters["arp_resolution"].updateFromSysex(data[35]);
        this.voiceParameters["arp_swing"].updateFromSysex(data[36]);
        let oct = data[37];
        if (oct > 3) {
            oct -= 256;
        }
        this.voiceParameters["keyboard_oct"].updateFromSysex(oct);
        switch (voice_mode) {
            case 0:
            case 1:
                this.sysexToTimbre(1, 38, data, this.timbre1Parameters);
                this.sysexToTimbre(2, 146, data, this.timbre2Parameters);
                break;
            case 2:
                this.sysexToVocoder(38, data);
                break;
        }
        return true;
    }
    sysexToTimbre(t, idx, data, parameters) {
        let p = "";
        if (t == 2) {
            p = "t2_";
        }
        const assign = data[idx + 1];
        parameters[p + "voice_assign"].updateFromSysex(assign >> 6);
        parameters[p + "eg2_reset"].updateFromSysex((assign & (0x1 << 5)) ? 1 : 0);
        parameters[p + "eg1_reset"].updateFromSysex((assign & (0x1 << 4)) ? 1 : 0);
        parameters[p + "trig_mode"].updateFromSysex((assign & (0x1 << 3)) ? 1 : 0);
        parameters[p + "unison_detune"].updateFromSysex(data[idx + 2]);
        parameters[p + "tune"].updateFromSysex(data[idx + 3] - 64);
        parameters[p + "bend_range"].updateFromSysex(data[idx + 4] - 64);
        parameters[p + "transpose"].updateFromSysex(data[idx + 5] - 64);
        parameters[p + "vibrato"].updateFromSysex(data[idx + 6] - 64);
        parameters[p + "osc1_wave"].updateFromSysex(data[idx + 7]);
        parameters[p + "osc1_control1"].updateFromSysex(data[idx + 8]);
        parameters[p + "osc1_control2"].updateFromSysex(data[idx + 9]);
        parameters[p + "osc2_wave"].updateFromSysex(data[idx + 12] & 0x0f);
        parameters[p + "osc_mod"].updateFromSysex(data[idx + 12] >> 4);
        parameters[p + "osc2_tune"].updateFromSysex((data[idx + 13] - 64));
        parameters[p + "osc2_finetune"].updateFromSysex(data[idx + 14] - 64);
        parameters[p + "portamento"].updateFromSysex(data[idx + 15]);
        parameters[p + "mixer_osc1"].updateFromSysex(data[idx + 16]);
        parameters[p + "mixer_osc2"].updateFromSysex(data[idx + 17]);
        parameters[p + "mixer_noise"].updateFromSysex(data[idx + 18]);
        parameters[p + "filter_type"].updateFromSysex(data[idx + 19]);
        parameters[p + "filter_freq"].updateFromSysex(data[idx + 20]);
        parameters[p + "filter_res"].updateFromSysex(data[idx + 21]);
        parameters[p + "filter_env"].updateFromSysex(data[idx + 22] - 64);
        parameters[p + "filter_keyboard"].updateFromSysex(data[idx + 24] - 64);
        parameters[p + "amp_level"].updateFromSysex(data[idx + 25]);
        parameters[p + "amp_pan"].updateFromSysex(data[idx + 26] - 64);
        parameters[p + "amp_distortion"].updateFromSysex(data[idx + 27]);
        parameters[p + "amp_keyboard"].updateFromSysex(data[idx + 29] - 63);
        parameters[p + "f_eg_attack"].updateFromSysex(data[idx + 30]);
        parameters[p + "f_eg_decay"].updateFromSysex(data[idx + 31]);
        parameters[p + "f_eg_sustain"].updateFromSysex(data[idx + 32]);
        parameters[p + "f_eg_release"].updateFromSysex(data[idx + 33]);
        parameters[p + "amp_eg_attack"].updateFromSysex(data[idx + 34]);
        parameters[p + "amp_eg_decay"].updateFromSysex(data[idx + 35]);
        parameters[p + "amp_eg_sustain"].updateFromSysex(data[idx + 36]);
        parameters[p + "amp_eg_release"].updateFromSysex(data[idx + 37]);
        parameters[p + "lfo1_wave"].updateFromSysex(data[idx + 38] & 0x0f);
        parameters[p + "lfo1_keysync"].updateFromSysex(data[idx + 38] >> 4);
        parameters[p + "lfo1_freq"].updateFromSysex(data[idx + 39]);
        if (data[idx + 40] & 0x80) {
            parameters[p + "lfo1_temposync"].updateFromSysex(1);
        }
        else {
            parameters[p + "lfo1_temposync"].updateFromSysex(0);
        }
        parameters[p + "lfo1_timebase"].updateFromSysex(data[idx + 40] & 0x0f);
        parameters[p + "lfo2_wave"].updateFromSysex(data[idx + 41] & 0x0f);
        parameters[p + "lfo2_keysync"].updateFromSysex(data[idx + 41] >> 4);
        parameters[p + "lfo2_freq"].updateFromSysex(data[idx + 42]);
        if (data[idx + 43] & 0x80) {
            parameters[p + "lfo2_temposync"].updateFromSysex(1);
        }
        else {
            parameters[p + "lfo2_temposync"].updateFromSysex(0);
        }
        parameters[p + "lfo2_timebase"].updateFromSysex(data[idx + 43] & 0x0f);
        parameters[p + "patch1_dest"].updateFromSysex(data[idx + 44] >> 4);
        parameters[p + "patch1_src"].updateFromSysex(data[idx + 44] & 0x0f);
        parameters[p + "patch1_level"].updateFromSysex(data[idx + 45] - 64);
        parameters[p + "patch2_dest"].updateFromSysex(data[idx + 46] >> 4);
        parameters[p + "patch2_src"].updateFromSysex(data[idx + 46] & 0x0f);
        parameters[p + "patch2_level"].updateFromSysex(data[idx + 47] - 64);
        parameters[p + "patch3_dest"].updateFromSysex(data[idx + 48] >> 4);
        parameters[p + "patch3_src"].updateFromSysex(data[idx + 48] & 0x0f);
        parameters[p + "patch3_level"].updateFromSysex(data[idx + 49] - 64);
        parameters[p + "patch4_dest"].updateFromSysex(data[idx + 50] >> 4);
        parameters[p + "patch4_src"].updateFromSysex(data[idx + 50] & 0x0f);
        parameters[p + "patch4_level"].updateFromSysex(data[idx + 51] - 64);
    }
    sysexToVocoder(idx, data) {
        const parameters = this.parameters;
        const assign = data[idx + 1];
        parameters["voice_assign"].updateFromSysex(assign >> 6);
        parameters["eg2_reset"].updateFromSysex((assign & (0x1 << 5)) ? 1 : 0);
        parameters["eg1_reset"].updateFromSysex((assign & (0x1 << 4)) ? 1 : 0);
        parameters["trig_mode"].updateFromSysex((assign & (0x1 << 3)) ? 1 : 0);
        parameters["unison_detune"].updateFromSysex(data[idx + 2]);
        parameters["tune"].updateFromSysex(data[idx + 3] - 64);
        parameters["bend_range"].updateFromSysex(data[idx + 4] - 64);
        parameters["transpose"].updateFromSysex(data[idx + 5] - 64);
        parameters["vibrato"].updateFromSysex(data[idx + 6] - 64);
        parameters["osc1_wave"].updateFromSysex(data[idx + 7]);
        parameters["osc1_control1"].updateFromSysex(data[idx + 8]);
        parameters["osc1_control2"].updateFromSysex(data[idx + 9]);
        parameters["voc_hpf_gate"].updateFromSysex(data[idx + 12] & 0x01);
        parameters["portamento"].updateFromSysex(data[idx + 14] & 0x7F);
        parameters["mixer_osc1"].updateFromSysex(data[idx + 15]);
        parameters["mixer_osc2"].updateFromSysex(data[idx + 16]);
        parameters["mixer_noise"].updateFromSysex(data[idx + 17]);
        parameters["voc_hpf_level"].updateFromSysex(data[idx + 18]);
        parameters["voc_gate_sense"].updateFromSysex(data[idx + 19]);
        parameters["voc_threshold"].updateFromSysex(data[idx + 20]);
        parameters["voc_shift"].updateFromSysex(data[idx + 21]);
        parameters["filter_freq"].updateFromSysex(data[idx + 22]);
        parameters["filter_res"].updateFromSysex(data[idx + 23]);
        parameters["voc_filter_mod"].updateFromSysex(data[idx + 24]);
        parameters["voc_mod_level"].updateFromSysex(data[idx + 25] - 64);
        parameters["voc_ef_sense"].updateFromSysex(data[idx + 26]);
        parameters["amp_level"].updateFromSysex(data[idx + 27]);
        parameters["voc_amp_direct"].updateFromSysex(data[idx + 28]);
        parameters["amp_distortion"].updateFromSysex(data[idx + 29]);
        parameters["amp_keyboard"].updateFromSysex(data[idx + 31] - 63);
        parameters["amp_eg_attack"].updateFromSysex(data[idx + 36]);
        parameters["amp_eg_decay"].updateFromSysex(data[idx + 37]);
        parameters["amp_eg_sustain"].updateFromSysex(data[idx + 38]);
        parameters["amp_eg_release"].updateFromSysex(data[idx + 39]);
        parameters["lfo1_wave"].updateFromSysex(data[idx + 40] & 0x0f);
        parameters["lfo1_keysync"].updateFromSysex(data[idx + 40] >> 4);
        parameters["lfo1_freq"].updateFromSysex(data[idx + 41]);
        if (data[idx + 42] & 0x80) {
            parameters["lfo1_temposync"].updateFromSysex(1);
        }
        else {
            parameters["lfo1_temposync"].updateFromSysex(0);
        }
        parameters["lfo1_timebase"].updateFromSysex(data[idx + 42] & 0x0f);
        parameters["lfo2_wave"].updateFromSysex(data[idx + 43] & 0x0f);
        parameters["lfo2_keysync"].updateFromSysex(data[idx + 43] >> 4);
        parameters["lfo2_freq"].updateFromSysex(data[idx + 44]);
        if (data[idx + 45] & 0x80) {
            parameters["lfo2_temposync"].updateFromSysex(1);
        }
        else {
            parameters["lfo2_temposync"].updateFromSysex(0);
        }
        parameters["lfo2_timebase"].updateFromSysex(data[idx + 45] & 0x0f);
        for (let i = 0; i < 8; i++) {
            parameters[`voc_ch${i + 1}_level`].updateFromSysex(data[idx + 46 + (i * 2)]);
            parameters[`voc_ch${i + 1}_pan`].updateFromSysex(63 + data[idx + 62 + (i * 2)]);
        }
    }
    midiMessages(channel, force = false) {
        let results = [];
        let timbre1Messages = [];
        let timbre2Messages = [];
        for (let id of Object.keys(this.voiceParameters)) {
            results.push(...this.voiceParameters[id].midiMessage(channel, force));
        }
        for (let id of Object.keys(this.timbre1Parameters)) {
            timbre1Messages.push(...this.timbre1Parameters[id].midiMessage(channel, force));
        }
        for (let id of Object.keys(this.timbre2Parameters)) {
            timbre2Messages.push(...this.timbre2Parameters[id].midiMessage(channel, force));
        }
        if (this.selectedTimbre == 0) {
            if (timbre1Messages.length > 0) {
                results.push(...timbre1Messages);
            }
            if (timbre2Messages.length > 0) {
                results.push(this.timbreSelectCC(channel, 2));
                results.push(...timbre2Messages);
                this.selectedTimbre = 2;
            }
        }
        else if (this.selectedTimbre == 2) {
            if (timbre2Messages.length > 0) {
                results.push(...timbre2Messages);
            }
            if (timbre1Messages.length > 0) {
                results.push(this.timbreSelectCC(channel, 0));
                results.push(...timbre1Messages);
                this.selectedTimbre = 0;
            }
        }
        else {
            if (timbre1Messages.length > 0) {
                results.push(this.timbreSelectCC(channel, 0));
                results.push(...timbre1Messages);
                this.selectedTimbre = 0;
            }
            if (timbre2Messages.length > 0) {
                results.push(this.timbreSelectCC(channel, 2));
                results.push(...timbre2Messages);
                this.selectedTimbre = 2;
            }
        }
        return results;
    }
    timbreSelectCC(channel, timbre) {
        return {
            type: "wam-midi",
            data: {
                bytes: [0xb0 | channel, 95, timbre]
            }
        };
    }
}


/***/ }),

/***/ "../shared/midi/BooleanParameter.ts":
/*!******************************************!*\
  !*** ../shared/midi/BooleanParameter.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BooleanParameter: () => (/* binding */ BooleanParameter)
/* harmony export */ });
class BooleanParameter {
    constructor(id, label, messager, defaultValue, offMidiValue, onMidiValue) {
        this.id = id;
        this.label = label;
        this.messager = messager;
        this.defaultValue = defaultValue;
        this.onMidiValue = onMidiValue;
        this.offMidiValue = offMidiValue;
        this.value = this.defaultValue;
    }
    toWAM() {
        return {
            label: this.label,
            type: "boolean",
            defaultValue: this.defaultValue,
            minValue: 0,
            maxValue: 1,
        };
    }
    ingestMIDI(currentChannel, event) {
        let currentMidiValue = this.value ? this.onMidiValue : this.offMidiValue;
        let newMidiValue = this.messager.ingestMIDI(currentChannel, currentMidiValue, event);
        if (newMidiValue === undefined) {
            return false;
        }
        if (newMidiValue === currentMidiValue) {
            return false;
        }
        this.value = (newMidiValue == this.onMidiValue) ? 1 : 0;
        this.automationDirty = true;
        return true;
    }
    updateFromSysex(value) {
        this.value = value;
        this.automationDirty = true;
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
        const midiValue = this.value ? this.onMidiValue : this.offMidiValue;
        return this.messager.toMIDI(channel, midiValue);
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

/***/ "../shared/midi/Korg.ts":
/*!******************************!*\
  !*** ../shared/midi/Korg.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   packKorg: () => (/* binding */ packKorg),
/* harmony export */   unpackKorg: () => (/* binding */ unpackKorg)
/* harmony export */ });
function unpackKorg(packed, startIndex, endIndex = packed.length) {
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
function packKorg(unpacked) {
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

/***/ "../shared/midi/NRPNMSBMessager.ts":
/*!*****************************************!*\
  !*** ../shared/midi/NRPNMSBMessager.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MIDI_CC: () => (/* binding */ MIDI_CC),
/* harmony export */   NRPNMSBMessager: () => (/* binding */ NRPNMSBMessager)
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
class NRPNMSBMessager {
    constructor(registered, msb, lsb) {
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
        if (event.bytes[1] == 6) {
            return event.bytes[2];
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
                    bytes: [MIDI_CC + channel, 6, value]
                }
            }
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


/***/ }),

/***/ "../shared/midi/SysexMessager.ts":
/*!***************************************!*\
  !*** ../shared/midi/SysexMessager.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SysexMessager: () => (/* binding */ SysexMessager)
/* harmony export */ });
class SysexMessager {
    constructor() {
    }
    ingestMIDI(currentChannel, currentValue, event) {
        return undefined;
    }
    toMIDI(channel, value) {
        return [];
    }
    sysexNeeded() {
        return true;
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
/*!***********************************!*\
  !*** ./src/MicrokorgProcessor.ts ***!
  \***********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MicrokorgKernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MicrokorgKernel */ "./src/MicrokorgKernel.ts");

const moduleId = "com.sequencerParty.microkorg";
const audioWorkletGlobalScope = globalThis;
const scope = audioWorkletGlobalScope.webAudioModules.getModuleScope(moduleId);
const MIDIControllerProcessor = scope.MIDIControllerProcessor;
class MicrokorgProcessor extends MIDIControllerProcessor {
    loadKernel() {
        this.kernel = new _MicrokorgKernel__WEBPACK_IMPORTED_MODULE_0__.MicrokorgKernel();
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