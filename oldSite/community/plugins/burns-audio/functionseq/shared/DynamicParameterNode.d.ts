import { WamParameterConfiguration, WamParameterDataMap } from '@webaudiomodules/api';
import { WebAudioModule, WamNode } from '@webaudiomodules/sdk';
export declare type DynamicParamEntry = {
    id: string;
    config: WamParameterConfiguration;
};
export declare type DynamicParamGroup = {
    name: string;
    params: DynamicParamEntry[];
};
export declare class DynamicParameterNode extends WamNode {
    destroyed: boolean;
    groupedParameters: DynamicParamGroup[];
    state: WamParameterDataMap;
    statePoller: number;
    schemaUpdateCallback?: () => void;
    pause: boolean;
    lastSetState?: any;
    static addModules(audioContext: BaseAudioContext, moduleId: string): Promise<void>;
    /**
     * @param {WebAudioModule} module
     * @param {AudioWorkletNodeOptions} options
     */
    constructor(module: WebAudioModule, options: AudioWorkletNodeOptions, groups: DynamicParamGroup[]);
    getState(): Promise<any>;
    setState(state: any): Promise<void>;
    updateProcessor(groups: DynamicParamGroup[]): void;
    updateState(): Promise<void>;
    findParameter(id: string): DynamicParamEntry | undefined;
}
