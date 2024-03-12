import { Component, h } from 'preact';
export declare type HTMLInputEvent = Event & {
    target: HTMLInputElement;
};
export interface SelectProps {
    label?: string;
    onChange?(v: string): void;
    value: () => string | number | boolean;
    options: string[];
    values?: string[] | number[] | boolean[];
    style?: string;
}
export declare class Select<T> extends Component<SelectProps, any> {
    lastRenderedValue: string | number | boolean;
    animationRequest?: number;
    animationTimeout?: number;
    ref?: HTMLDivElement;
    select?: HTMLSelectElement;
    renderedOptions?: string[];
    renderedValues?: any[];
    constructor();
    onChange(e: HTMLInputEvent): void;
    cancelAnimation(): void;
    scheduleAnimation(): void;
    scheduleFrame(): void;
    componentWillUnmount(): void;
    animationFrame(): void;
    setup(ref: HTMLDivElement | null): void;
    render(): h.JSX.Element;
    sameArray(lhs?: any[], rhs?: any[]): boolean;
}
