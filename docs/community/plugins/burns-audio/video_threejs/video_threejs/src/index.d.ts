import * as monaco from 'monaco-editor';
import { WebAudioModule } from '@webaudiomodules/sdk';
import { DynamicParameterNode } from "../../shared/DynamicParameterNode";
import { ThreeJSRunner } from './ThreeJSRunner';
import { VideoExtensionOptions } from 'wam-extensions';
import { LiveCoderNode } from '../../shared/LiveCoderView';
import { MultiplayerHandler } from '../../shared/collaboration/MultiplayerHandler';
import { ThreeJSGenerator } from './ThreeJSGenerator';
declare type ThreeJSState = {
    runCount: number;
    params: any;
};
declare class ThreeJSNode extends DynamicParameterNode implements LiveCoderNode {
    destroyed: boolean;
    renderCallback?: () => void;
    multiplayers: MultiplayerHandler[];
    runCount: number;
    error?: any;
    errorStack?: string;
    analyser: AnalyserNode;
    fftArray: Float32Array;
    gl: WebGLRenderingContext;
    runner: ThreeJSRunner;
    options: VideoExtensionOptions;
    generator?: ThreeJSGenerator;
    static addModules(audioContext: BaseAudioContext, moduleId: string): Promise<void>;
    /**
     * @param {WebAudioModule} module
     * @param {AudioWorkletNodeOptions} options
     */
    constructor(module: WebAudioModule, options: AudioWorkletNodeOptions);
    registerExtensions(): Promise<void>;
    upload(): Promise<void>;
    runPressed(): Promise<void>;
    getState(): Promise<ThreeJSState>;
    setState(state?: Partial<ThreeJSState>): Promise<void>;
    createEditor(ref: HTMLDivElement): monaco.editor.IStandaloneCodeEditor;
    setError(error?: string, stack?: string): void;
}
export default class ThreeJSModule extends WebAudioModule<ThreeJSNode> {
    _baseURL: string;
    _descriptorUrl: string;
    _processorUrl: string;
    multiplayer?: MultiplayerHandler;
    get instanceId(): string;
    _loadDescriptor(): Promise<any>;
    configureMonaco(): void;
    initialize(state: any): Promise<import("@webaudiomodules/api").AbstractWebAudioModule<import("@webaudiomodules/api").AbstractWamNode>>;
    createAudioNode(initialState: any): Promise<ThreeJSNode>;
    createGui(): Promise<HTMLDivElement>;
    destroyGui(el: Element): void;
}
export {};
