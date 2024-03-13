import { WamMidiData, WamTransportData } from "@webaudiomodules/api";
import { FunctionKernel } from "./FunctionKernel";
export declare class MIDI {
    static NOTE_ON: number;
    static NOTE_OFF: number;
    static CC: number;
}
declare const DynamicParameterProcessor: any;
export declare class FunctionSequencerProcessor extends DynamicParameterProcessor {
    lastTime: number;
    proxyId: string;
    ticks: number;
    function: FunctionKernel;
    transportData?: WamTransportData;
    count: number;
    constructor(options: any);
    /**
     * Implement custom DSP here.
     * @param {number} startSample beginning of processing slice
     * @param {number} endSample end of processing slice
     * @param {Float32Array[][]} inputs
     * @param {Float32Array[][]} outputs
     */
    _process(startSample: number, endSample: number, inputs: Float32Array[][], outputs: Float32Array[][]): void;
    /**
     * Messages from main thread appear here.
     * @param {MessageEvent} message
     */
    _onMessage(message: any): Promise<void>;
    _onTransport(transportData: WamTransportData): void;
    _onMidi(midiData: WamMidiData): void;
}
export {};
