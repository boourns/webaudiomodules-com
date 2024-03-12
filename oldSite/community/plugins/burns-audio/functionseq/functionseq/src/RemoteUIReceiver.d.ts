import { RemoteUIElement } from "./RemoteUI";
import { RemoteUIExtendedState } from "./RemoteUIController";
export declare class RemoteUIReceiver {
    ui: RemoteUIElement;
    uiMap: Record<string, RemoteUIExtendedState>;
    port: MessagePort;
    constructor(port: MessagePort);
    onMessage(message: any): boolean;
    controlColour(name: string): string;
    dispatchAction(name: string): void;
}
