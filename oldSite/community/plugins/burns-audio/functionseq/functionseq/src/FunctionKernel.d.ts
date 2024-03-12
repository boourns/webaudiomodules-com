import { WamMidiData, WamParameterDataMap, WamTransportData } from "@webaudiomodules/api";
import { NoteDefinition } from "wam-extensions";
import { FunctionAPI } from "./FunctionSequencer";
import { FunctionSequencerProcessor } from "./FunctionSeqProcessor";
import { RemoteUI } from "./RemoteUI";
import { RemoteUIController } from "./RemoteUIController";
import { FunctionSequencer, ParameterDefinition } from "./FunctionSequencer";
export declare class FunctionKernel {
    function: FunctionSequencer;
    api: FunctionAPI;
    transport: WamTransportData;
    parameterIds: string[];
    processor: FunctionSequencerProcessor;
    noteList?: NoteDefinition[];
    uiController: RemoteUIController;
    remoteUI: RemoteUI;
    additionalState: Record<string, any>;
    additionalStateDirty: boolean;
    cachedSetState: WamParameterDataMap[];
    registerParametersCalled: boolean;
    constructor(processor: FunctionSequencerProcessor);
    onTick(ticks: number): void;
    /**
     * Messages from main thread appear here.
     * @param {MessageEvent} message
     */
    onMessage(message: any): Promise<void>;
    onTransport(transportData: WamTransportData): void;
    onMidi(event: WamMidiData): void;
    onAction(name: string): void;
    onStateChange(): void;
    registerParameters(parameters: ParameterDefinition[]): void;
    validateParameter(p: ParameterDefinition): void;
    setAdditionalState(name: string, value: any): void;
    getAdditionalState(name: string): any;
    error(e: Error): void;
    flush(): void;
}
