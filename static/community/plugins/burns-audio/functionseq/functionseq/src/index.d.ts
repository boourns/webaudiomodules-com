import * as monaco from 'monaco-editor';
import { h } from 'preact';
import { WebAudioModule } from '@webaudiomodules/sdk';
import { MultiplayerHandler } from '../../shared/collaboration/MultiplayerHandler';
import { DynamicParameterNode } from '../../shared/DynamicParameterNode';
import { LiveCoderNode } from "../../shared/LiveCoderView";
import { RemoteUIReceiver } from './RemoteUIReceiver';
declare type FunctionSeqState = {
    runCount: number;
    params: any;
    additionalState: Record<string, any>;
};
declare class FunctionSeqNode extends DynamicParameterNode implements LiveCoderNode {
    destroyed: boolean;
    renderCallback?: () => void;
    multiplayers: MultiplayerHandler[];
    runCount: number;
    error?: string;
    errorStack?: string;
    uiReceiver: RemoteUIReceiver;
    additionalState: Record<string, any>;
    static addModules(audioContext: BaseAudioContext, moduleId: string): Promise<void>;
    /**
     * @param {WebAudioModule} module
     * @param {AudioWorkletNodeOptions} options
     */
    constructor(module: WebAudioModule, options: AudioWorkletNodeOptions);
    registerExtensions(): Promise<void>;
    createEditor(ref: HTMLDivElement): monaco.editor.IStandaloneCodeEditor;
    upload(): Promise<void>;
    uploadAdditionalState(): void;
    runPressed(): Promise<void>;
    getState(): Promise<FunctionSeqState>;
    setState(state?: Partial<FunctionSeqState>): Promise<void>;
    /**
     * Messages from audio thread
     * @param {MessageEvent} message
     * */
    _onMessage(message: MessageEvent): void;
    defaultScript(): string;
    editorDefinition(): string;
    setError(error?: string, stack?: string): void;
}
export default class FunctionSeqModule extends WebAudioModule<FunctionSeqNode> {
    _baseURL: string;
    _descriptorUrl: string;
    _processorUrl: string;
    sequencer: FunctionSeqNode;
    nonce: string | undefined;
    get instanceId(): string;
    _loadDescriptor(): Promise<any>;
    configureMonaco(): void;
    initialize(state: any): Promise<import("@webaudiomodules/api").AbstractWebAudioModule<import("@webaudiomodules/api").AbstractWamNode>>;
    createAudioNode(initialState: any): Promise<FunctionSeqNode>;
    renderParametersView(): h.JSX.Element;
    createGui(): Promise<HTMLDivElement>;
    destroyGui(el: Element): void;
}
export {};
