import { Component, h } from 'preact';
export interface ToggleProps {
    value: () => boolean;
    color: () => string;
    width: number;
    height: number;
    label?: string;
    onChange(value: boolean): void;
}
declare type ToggleState = {};
export declare class Toggle extends Component<ToggleProps, ToggleState> {
    ref?: HTMLCanvasElement;
    static editing: boolean;
    context: CanvasRenderingContext2D;
    animationRequest?: number;
    animationTimeout?: number;
    lastValue?: boolean;
    lastColor?: string;
    static defaultProps: {
        width: number;
        height: number;
    };
    constructor();
    componentWillUnmount(): void;
    cancelAnimation(): void;
    scheduleAnimation(): void;
    scheduleFrame(): void;
    animationFrame(): void;
    draw(color: string, value: boolean): void;
    setup(ref: HTMLCanvasElement | null): void;
    onClick(e: MouseEvent): void;
    setValue(v: boolean): void;
    render(): h.JSX.Element;
}
export {};
