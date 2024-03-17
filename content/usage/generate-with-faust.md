1 - Faust2Wam node script:

You can generate WAMs directly from the command line using the faust2wam script (you can get it here: https://github.com/Fr0stbyteR/faust2wam)

Example of use :

```shell
rm -rf test/out # make sure you are under the faust2wam directory.
node faust2wam.js test/rev.dsp test/out
```


2 - Dynamic WAM compilation

You can also dynamically compile faust code from your host and generate WAMs on the fly (info also on https://github.com/Fr0stbyteR/faust2wam)

Example of use:
```js
// Load the WAM
	const { default: generate } = await import("./dist/index.js");
	// Load the DSP file
	const dspResp = await fetch("./test/rev.dsp");
	// Generate the WAM
	const WAM = await generate(await dspResp.text(), "Reverb");
```

3 - FAUST based WAMs with spectral processing (FFT): read Shihong Ren paper presented at WAC 2024 (read it here: https://zenodo.org/records/10825715) or see the slides: 

<iframe style={{width: '100%', height: 500}} src="https://docs.google.com/presentation/d/14KPvTzICJbqjXVUGKfwjdRSdTXtSsgFfIzSKFWqZrOU/edit?usp=sharing"></iframe>

