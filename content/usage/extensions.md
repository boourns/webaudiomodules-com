---
sidebar_position: 4
---

# About WAM extensions

WAM Extensions are optional additions to the WAM 2.0 API that add tighter integration between WAM plugin and host, better solving user interface problems and creating new use-cases for WAMs to solve.

See https://github.com/boourns/wam-extensions for details and the interfaces hosts and wams should implement. Few examples are provided below but more will come.

## Example WAM extensions
### 1 - The *Note* extension
![Standard piano roll](https://i.ibb.co/WtcbxCw/Piano-Roll-With-Notes0.jpg)

The Notes extension allows one WAM to publish a list of relevant notes with names, and other connected WAMs to receive the note list.  This enables a better user interface when sequencing typical drum machines or samplers where only certain MIDI notes can be received.

![Piano Roll connected to rum sampler](https://i.ibb.co/tmPxC91/Piano-Roll-With-Notes2.jpg)

Note how the look & feel of the piano roll changed (thanks to the Note Extension):

![Piano Roll displays the notes exposed by the sampler](https://i.ibb.co/T28nfZP/Piano-Roll-With-Notes3.jpg)

### 2 - The *Video* extension
The Video extension adds video generation and processing capabilities to the WAM ecosystem.  The WAM host manages a WebGL2 context, and plugins register render handlers to generate and process WebGL2 textures.  Video WAMs can also process audio, allowing audio reactivity or simultaneous audio/video stream generation.

Below: the Butterchrun plugin (port from WinAmp) can generate GLSL shaders that react to the sound:
![Butterchurn plugin demonstrating the Video WAM extension](https://i.ibb.co/PGDk62D/video1.jpg)

Preliminary example of a host that implements the video extension. Note that 90% of the code in this codepen is from the extension itself, and will certainly be hosted under webaudiomodules.com soon, reducing the example to about 30 lines of code.


<iframe style={{width: '100%', height: 600}} scrolling="yes" title="WAM Video example" src="https://codepen.io/w3devcampus/embed/GRLNPgp?default-tab=js%2Cresult" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/w3devcampus/pen/GRLNPgp">
  WAM Video example</a> by W3Cx (<a href="https://codepen.io/w3devcampus">@w3devcampus</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>

### 3 - The *Asset* extension
With the Asset extension, WAM hosts control asset loading and saving.  Individual WAM plugins can rely on the host for cloud storage, and users can manage all files related to a musical project in the host without having each WAM plugin store files in separate cloud services or accounts

Drum Sampler WAM using the Asset Extension to allow the host to control asset load/save:

![Drum Sampler WAM using the Asset Extension to allow the host to control asset load/save](https://i.ibb.co/7bdhhf8/asset1.jpg)

### 4 - *Modulation* extension
The ModulationTarget extension enables plugin developers to create plugins whose purpose is to modulate, or control, the parameters of another WAM plugin.  WAM Modulation plugins exist for parameter randomization, parameter sequencing, envelope following of an audio signal and LFO control.  By using modulation WAMs, hosts enable deep parameter automation similar to modular synthesis.

Randomizer plugin uses the Modulation Target extension to randomize the Synth-101 patch:

![Randomizer plugin uses the Modulation Target extension to randomize the Synth-101 patch](https://i.ibb.co/nfBwc7Y/modulation1.jpg)
