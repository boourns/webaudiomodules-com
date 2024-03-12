import { Component, h } from 'preact';
export interface SliderProps {
    value: () => number;
    width: number;
    height: number;
    minimumValue: number;
    maximumValue: number;
    defaultValue?: number;
    showValue?: boolean;
    horizontal?: boolean;
    color: () => string;
    label?: string;
    onChange(value: number): void;
    valueString?(value: number): string;
    units?: string;
    decimals?: number;
}
declare type SliderState = {};
export declare class Slider extends Component<SliderProps, SliderState> {
    ref?: HTMLCanvasElement;
    static editing: boolean;
    context: CanvasRenderingContext2D;
    valueLabel?: HTMLLabelElement | null;
    animationRequest?: number;
    animationTimeout?: number;
    lastValue?: number;
    lastColor?: string;
    static defaultProps: {
        minimumValue: number;
        maximumValue: number;
        width: number;
        height: number;
        units: string;
        decimals: number;
    };
    constructor();
    componentWillUnmount(): void;
    cancelAnimation(): void;
    scheduleAnimation(): void;
    scheduleFrame(): void;
    animationFrame(): void;
    bipolar(): boolean;
    draw(color: string, value: number): void;
    setup(ref: HTMLCanvasElement | null): void;
    onMousemove(e: MouseEvent): void;
    onDoubleClick(e: MouseEvent): void;
    onMouseDown(e: MouseEvent): void;
    onMouseUp(e: MouseEvent): void;
    setValue(v: number): void;
    render(): h.JSX.Element;
}
export {};
