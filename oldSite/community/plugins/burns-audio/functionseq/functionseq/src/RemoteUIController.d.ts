import { FunctionKernel } from "./FunctionKernel";
import { RemoteUIElement } from "./RemoteUI";
export declare type RemoteUIUpdate = {
    t: string;
    f: string;
    v: any;
};
export declare type RemoteUIExtendedState = {
    highlighted?: boolean;
};
export declare class RemoteUIController {
    port: MessagePort;
    ui?: RemoteUIElement;
    uiMap: Record<string, RemoteUIExtendedState>;
    kernel: FunctionKernel;
    pendingUpdates: RemoteUIUpdate[];
    constructor(kernel: FunctionKernel, port: MessagePort);
    register(root?: RemoteUIElement): void;
    highlight(name: string, value: boolean): void;
    flush(): void;
    onMessage(message: any): void;
}
