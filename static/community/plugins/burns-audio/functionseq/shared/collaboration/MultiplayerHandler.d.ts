import * as monaco from 'monaco-editor';
import { CollaborationDocumentInterface } from 'wam-extensions';
import { MonacoBinding } from './MonacoBinding';
export declare type MultiplayerEditorError = {
    message: string;
    line: number;
};
export declare class MultiplayerHandler {
    label: string;
    documentId: string;
    instanceId: string;
    editor?: monaco.editor.ICodeEditor;
    doc: CollaborationDocumentInterface;
    binding?: MonacoBinding;
    error?: MultiplayerEditorError;
    constructor(instanceId: string, docId: string, label: string);
    getDocumentFromHost(initialContent: string): Promise<void>;
    registerEditor(editor: monaco.editor.ICodeEditor): void;
    attachEditor(): void;
    unregisterEditor(): void;
    setError(error: MultiplayerEditorError | undefined): void;
    updateModelMarkers(): void;
}
