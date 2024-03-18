---
sidebar_position: 0
---

# Introduction
In 2015, Jari Kleimola and Olivier Larkin proposed the Web Audio Modules (WAM), a standard for Web Audio plugins and DAWs (aka "VSTs for the Web"). The 2.0 version of Web Audio Modules has been released in 2021 as a group effort by a large set of people and since then, multiple plugins and hosts have been published, mostly as open source and free software. 

WAM 2.0 comes with a SDK, an abstract API, several open source repositories with dozen of plugins, tutorials, and several hosts for demonstrating the capabilities of WAMs. 

When we designed WAM 2.0 we wanted to support as many development workflows as possible, from the simple web developer who code on plain JavaScript, the React developer used to build his applications, to the C/C++ developer who is used to pro DSP development and who will cross compile his existing code to WebAssembly and reuse a minimal set of features from the WAM SDK.

# WAM Features

- Supports audio, midi, video, OSC,
- Supports third-party module loading across websites, a WAM is identified by a single URI, and can be dynamically loaded in host applications,
- Works in all major browsers including iOS Safari,
- Supports WebAudio, WebGL2, WebMIDI,
- wam-community: over 40 WAM2 plugins ready to integrate into your project. See the "Community" sidebar menu.

![Wams developed by the community](https://i.ibb.co/zGHvxfy/wam1.jpg)

# Performance
Another concern when designing WAMs was performance. The WAM framework uses an original design for handling the communication between plugins and host applications that do not rely on the low-level parameter management provided by the Web Audio API. The main reason for that is to allow high performances in the case where both a DAW and plugins are implemented as AudioWorklets. 

At the time the WebAudio API has been designed, AudioWorklets did not exist and some use cases could not be taken into account. Indeed, if the DAW is built using AudioWorklet nodes for processing audio, then some parts of the code run in the high priority / audio thread. Then, if a WAM plugin is associated with a given track in a DAW project for example, and if the plugin is itself built using an AudioWorklet node, it also has custom code running in the audio thread. 

The WAM framework has been designed to handle this particular case and will enable DAW/plugins communication without crossing the audio thread barrier. 

Let us take one example: while playing, a MIDI track sends notes to a virtual instrument plugin, and changes some of the parameters of this plugin at the frequency rate. Remember that a DAW can have multiple tracks associated to dozen of plugins, and each plugin can have dozens of parameters. The WAM framework detects this case, and will seamlessly use Shared Array Buffers and a ring buffer, without crossing the audio thread barrier. No need to send events from the control/GUI thread, that would have been mandatory if the Web Audio API audio node parameter management was used. 

To sum up, the WAM framework streamlines the creation of plugins and host applications and enables highly efficient communication between hosts and plugins. 

A video of WAMs in action [is available online](https://www.youtube.com/watch?v=w7a_Kbx7nA8).

# Learn More

Check the side bar menu, you will find more informations with tutorials, examples, links to important resources etc. such as:
- WAM 2 Tutorials: A tutorial series building a WAM2 host and plugin
- WAM 2 examples of effects, instruments, utility WAMs, developed using a broad variety of approaches (plain JavaScript, TypeScript, React, Faust, C++ etc.)
- API & SDK

# Projects

- [Sequencer Party](https://sequencer.party): a multiplayer audio/midi/video audio platform.
- [Wam-Studio](https://wam-studio.i3s.univ-cotedazur.fr/): an open source DAW developed as a WAM demonstrator.
- TO BE COMPLETED
