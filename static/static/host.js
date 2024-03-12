const AudioCtx = window.AudioContext || window.webkitAudioContext;

const audioContext = new AudioCtx();

let hostKey;

/**
 * @param {AudioContext} audioContext
 */
const initHost = async (audioContext) => {
	const { default: initializeWamHost } = await import("./sdk/src/initializeWamHost.js");
	const [, key] = await initializeWamHost(audioContext, "example");
	hostKey = key;
};

initHost(audioContext);

console.log("running")
