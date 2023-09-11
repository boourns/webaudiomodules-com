import { Component, h } from 'preact';
import * as monaco from 'monaco-editor';
import { MultiplayerHandler } from './collaboration/MultiplayerHandler';
import { DynamicParameterNode } from './DynamicParameterNode';
export interface LiveCoderNode extends DynamicParameterNode {
    error?: string;
    renderCallback?: () => void;
    multiplayers: MultiplayerHandler[];
    runPressed(): void;
    createEditor(ref: HTMLDivElement): monaco.editor.IStandaloneCodeEditor;
}
export interface LiveCoderViewProps {
    plugin: LiveCoderNode;
    actions: h.JSX.Element[];
    parametersView?: () => h.JSX.Element;
}
declare type LiveCoderViewState = {
    panel: "GUI" | "CODE";
    runCount: number;
};
export declare class LiveCoderView extends Component<LiveCoderViewProps, LiveCoderViewState> {
    statePoller: number;
    ref: HTMLDivElement | null;
    editor: monaco.editor.IStandaloneCodeEditor;
    selectedMultiplayer: number;
    constructor();
    componentDidMount(): void;
    componentWillUnmount(): void;
    runPressed(): void;
    panelPressed(newPanel: "CODE" | "GUI"): void;
    setupEditor(ref: HTMLDivElement | null): void;
    renderEditor(): h.JSX.Element;
    renderParameters(): h.JSX.Element;
    editFile(i: number): void;
    render(): h.JSX.Element;
}
export {};
