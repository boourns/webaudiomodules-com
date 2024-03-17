---
sidebar_position: 2
---

# Generate WAMs with FaustIDE

The FAUST IDE is a very popular tool for generating WAMs from existing FAUST code (and there are hundreds of source code example available for audio effects, instruments, etc.)

Faust is a popular functional programming language for DSP programming; thousands of source code for audio effects, instruments, and more generally DSP algorithms, filters etc. are available in the open source community, or included in the distribution and in the online IDE. The Faust compiler supports exporting to a variety of platforms and standards, including Web Audio Modules. Since 2014, Faust DSPs can be compiled to JavaScript-compatible binary code and dynamically run the DSP within the browser. In 2022, a new version of the Faust WebAssembly compiler named faustwasm, which provides TypeScript and JavaScript wrappers for Faust DSPs, was released [15]. It allows to generate static self-contained html pages or JavaScript modules (including the Faust code as a WebAssembly module and various additional resources), or even to integrate the libfaust compiler in applications which need to dynamically compile and deploy Faust DSP programs. The library can be used either in Node.js based projects or in web browsers and is published on NPM. Furthermore, an official online Faust IDE has been developed since 2019 using modern web technologies such as WebAssembly and AudioWorklet, offering various testing, debugging and audio visualization features, allowing connecting to different kinds of audio/MIDI inputs and outputs, making easier the development of wasm WAM plugins, with a standard CSS based GUI (auto-generated, see Figure 3) or with a custom GUI that can be designed with an embedded GUI Builder (Figure 4) [10, 16]. A step by step tutorial about how to build WAM plugins is available online. Starting from an existing Faust code, it takes a few seconds to execute in the IDE, verify, export (download as a zip file), publish online, and run a WAM plugin.

Example of a physical modeled Flute in the Faust IDE:

![A physical modeled Flute in the Faust IDE](https://i.ibb.co/NmHjCjj/faust-IDE1.jpg)

The same flute with a custom GUI made with the embedded GUI Builder. Once published the final WAM can be downloaded as a zip file or tried online (URIs are generated for both versions: the one with the CSS based GUI and the one with the custom GUI)

![The same flute with a custom GUI made with the embedded GUI Builder](https://i.ibb.co/8PLjQ36/faust-IDE3.jpg)


## Online step by step tutorial 
This tutorial will tell you about how to use the FAUST code IDE and its integrated WAM GUI Builder for designing and publishing WAMs rapidly.

[https://docs.google.com/document/d/1HDEm4m_cD47YBuDilzGYiANYQDktj56Njyv0umGYO6o/edit#heading=h.lhqrbk1zktwy](https://docs.google.com/document/d/1HDEm4m_cD47YBuDilzGYiANYQDktj56Njyv0umGYO6o/edit#heading=h.lhqrbk1zktwy)

<iframe style={{width: '100%', height: 500}} src="https://docs.google.com/document/d/1HDEm4m_cD47YBuDilzGYiANYQDktj56Njyv0umGYO6o/edit#heading=h.lhqrbk1zktwy"></iframe>
