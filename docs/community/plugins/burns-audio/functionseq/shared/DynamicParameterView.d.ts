import { Component, h } from "preact";
import { DynamicParamEntry, DynamicParameterNode, DynamicParamGroup } from "./DynamicParameterNode";
export interface DPProps {
    plugin: DynamicParameterNode;
}
declare type DPState = {};
export declare class DynamicParameterView extends Component<DPProps, DPState> {
    constructor();
    componentDidMount(): void;
    componentWillUnmount(): void;
    valueChanged(id: string, value: number): void;
    getValue(param: DynamicParamEntry): number;
    renderParam(p: DynamicParamEntry): h.JSX.Element;
    renderGroup(group: DynamicParamGroup): h.JSX.Element;
    render(): h.JSX.Element;
}
export {};
