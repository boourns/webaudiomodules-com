import { Component, h } from "preact";
import { DynamicParamEntry, DynamicParameterNode } from "../../shared/DynamicParameterNode";
import { RemoteUIElement } from "./RemoteUI";
import { RemoteUIReceiver } from "./RemoteUIReceiver";
export interface RemoteUIRendererProps {
    plugin: DynamicParameterNode;
    ui: RemoteUIReceiver;
}
export declare class RemoteUIRenderer extends Component<RemoteUIRendererProps, any> {
    componentDidMount(): void;
    componentWillUnmount(): void;
    valueChanged(id: string, value: number): void;
    getValue(param: DynamicParamEntry): number;
    renderKnob(element: RemoteUIElement, p: DynamicParamEntry): h.JSX.Element;
    renderSlider(element: RemoteUIElement, p: DynamicParamEntry): h.JSX.Element;
    renderToggle(element: RemoteUIElement, p: DynamicParamEntry): h.JSX.Element;
    renderSelect(element: RemoteUIElement, p: DynamicParamEntry): h.JSX.Element;
    actionButtonPressed(name: string): void;
    renderActionButton(element: RemoteUIElement): h.JSX.Element;
    paddingStyle(el: RemoteUIElement): string[];
    sizeStyles(el: RemoteUIElement): string[];
    renderElement(el: RemoteUIElement): h.JSX.Element;
    render(): h.JSX.Element;
}
