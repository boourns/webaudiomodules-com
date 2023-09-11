import { VideoExtensionOptions } from "wam-extensions";
import * as THREE from 'three';
import { ThreeJSGenerator } from "./ThreeJSGenerator";
export declare class ThreeJSRunner {
    options: VideoExtensionOptions;
    output?: WebGLTexture;
    constructor(options: VideoExtensionOptions);
    destroy(): void;
    renderer: THREE.WebGLRenderer;
    texture: THREE.WebGLRenderTarget;
    setup(gl: WebGLRenderingContext): void;
    render(inputs: WebGLTexture[], generator: ThreeJSGenerator | undefined, time: number, params: Record<string, any>, fft: any): WebGLTexture[];
}
