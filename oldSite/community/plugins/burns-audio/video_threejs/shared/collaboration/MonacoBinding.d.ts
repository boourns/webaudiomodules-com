import { CollaborationDocumentInterface } from "wam-extensions";
import * as monaco from 'monaco-editor';
export declare class MonacoBinding {
    editor: monaco.editor.ICodeEditor;
    document: CollaborationDocumentInterface;
    mux: any;
    model: monaco.editor.ITextModel;
    _monacoChangeHandler: monaco.IDisposable;
    decorations: string[];
    updating: number;
    constructor(editor: monaco.editor.ICodeEditor, document: CollaborationDocumentInterface);
    attach(): Promise<void>;
    detach(): void;
    rerenderDecorations(): Promise<void>;
}
