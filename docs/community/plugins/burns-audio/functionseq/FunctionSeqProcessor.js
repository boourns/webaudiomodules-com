/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@tonaljs/abc-notation/dist/index.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@tonaljs/abc-notation/dist/index.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "abcToScientificNotation": () => (/* binding */ abcToScientificNotation),
/* harmony export */   "default": () => (/* binding */ abc_notation_default),
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "scientificToAbcNotation": () => (/* binding */ scientificToAbcNotation),
/* harmony export */   "tokenize": () => (/* binding */ tokenize),
/* harmony export */   "transpose": () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _tonaljs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tonaljs/core */ "./node_modules/@tonaljs/core/dist/index.mjs");
// index.ts

var fillStr = (character, times) => Array(times + 1).join(character);
var REGEX = /^(_{1,}|=|\^{1,}|)([abcdefgABCDEFG])([,']*)$/;
function tokenize(str) {
  const m = REGEX.exec(str);
  if (!m) {
    return ["", "", ""];
  }
  return [m[1], m[2], m[3]];
}
function abcToScientificNotation(str) {
  const [acc, letter, oct] = tokenize(str);
  if (letter === "") {
    return "";
  }
  let o = 4;
  for (let i = 0; i < oct.length; i++) {
    o += oct.charAt(i) === "," ? -1 : 1;
  }
  const a = acc[0] === "_" ? acc.replace(/_/g, "b") : acc[0] === "^" ? acc.replace(/\^/g, "#") : "";
  return letter.charCodeAt(0) > 96 ? letter.toUpperCase() + a + (o + 1) : letter + a + o;
}
function scientificToAbcNotation(str) {
  const n = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.note)(str);
  if (n.empty || !n.oct && n.oct !== 0) {
    return "";
  }
  const { letter, acc, oct } = n;
  const a = acc[0] === "b" ? acc.replace(/b/g, "_") : acc.replace(/#/g, "^");
  const l = oct > 4 ? letter.toLowerCase() : letter;
  const o = oct === 5 ? "" : oct > 4 ? fillStr("'", oct - 5) : fillStr(",", 4 - oct);
  return a + l + o;
}
function transpose(note2, interval) {
  return scientificToAbcNotation((0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.transpose)(abcToScientificNotation(note2), interval));
}
function distance(from, to) {
  return (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.distance)(abcToScientificNotation(from), abcToScientificNotation(to));
}
var abc_notation_default = {
  abcToScientificNotation,
  scientificToAbcNotation,
  tokenize,
  transpose,
  distance
};

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@tonaljs/array/dist/index.mjs":
/*!****************************************************!*\
  !*** ./node_modules/@tonaljs/array/dist/index.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compact": () => (/* binding */ compact),
/* harmony export */   "permutations": () => (/* binding */ permutations),
/* harmony export */   "range": () => (/* binding */ range),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "shuffle": () => (/* binding */ shuffle),
/* harmony export */   "sortedNoteNames": () => (/* binding */ sortedNoteNames),
/* harmony export */   "sortedUniqNoteNames": () => (/* binding */ sortedUniqNoteNames)
/* harmony export */ });
/* harmony import */ var _tonaljs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tonaljs/core */ "./node_modules/@tonaljs/core/dist/index.mjs");
// index.ts

var isArray = Array.isArray;
function ascR(b, n) {
  const a = [];
  for (; n--; a[n] = n + b)
    ;
  return a;
}
function descR(b, n) {
  const a = [];
  for (; n--; a[n] = b - n)
    ;
  return a;
}
function range(from, to) {
  return from < to ? ascR(from, to - from + 1) : descR(from, from - to + 1);
}
function rotate(times, arr) {
  const len = arr.length;
  const n = (times % len + len) % len;
  return arr.slice(n, len).concat(arr.slice(0, n));
}
function compact(arr) {
  return arr.filter((n) => n === 0 || n);
}
function sortedNoteNames(notes) {
  const valid = notes.map((n) => (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.note)(n)).filter((n) => !n.empty);
  return valid.sort((a, b) => a.height - b.height).map((n) => n.name);
}
function sortedUniqNoteNames(arr) {
  return sortedNoteNames(arr).filter((n, i, a) => i === 0 || n !== a[i - 1]);
}
function shuffle(arr, rnd = Math.random) {
  let i;
  let t;
  let m = arr.length;
  while (m) {
    i = Math.floor(rnd() * m--);
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
}
function permutations(arr) {
  if (arr.length === 0) {
    return [[]];
  }
  return permutations(arr.slice(1)).reduce((acc, perm) => {
    return acc.concat(
      arr.map((e, pos) => {
        const newPerm = perm.slice();
        newPerm.splice(pos, 0, arr[0]);
        return newPerm;
      })
    );
  }, []);
}

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@tonaljs/chord-detect/dist/index.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@tonaljs/chord-detect/dist/index.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ chord_detect_default),
/* harmony export */   "detect": () => (/* binding */ detect)
/* harmony export */ });
/* harmony import */ var _tonaljs_chord_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tonaljs/chord-type */ "./node_modules/@tonaljs/chord-type/dist/index.mjs");
/* harmony import */ var _tonaljs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tonaljs/core */ "./node_modules/@tonaljs/core/dist/index.mjs");
/* harmony import */ var _tonaljs_pcset__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tonaljs/pcset */ "./node_modules/@tonaljs/pcset/dist/index.mjs");
// index.ts



var namedSet = (notes) => {
  const pcToName = notes.reduce((record, n) => {
    const chroma = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_1__.note)(n).chroma;
    if (chroma !== void 0) {
      record[chroma] = record[chroma] || (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_1__.note)(n).name;
    }
    return record;
  }, {});
  return (chroma) => pcToName[chroma];
};
function detect(source, options = {}) {
  const notes = source.map((n) => (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_1__.note)(n).pc).filter((x) => x);
  if (_tonaljs_core__WEBPACK_IMPORTED_MODULE_1__.note.length === 0) {
    return [];
  }
  const found = findMatches(notes, 1, options);
  return found.filter((chord) => chord.weight).sort((a, b) => b.weight - a.weight).map((chord) => chord.name);
}
var BITMASK = {
  anyThirds: 384,
  perfectFifth: 16,
  nonPerfectFifths: 40,
  anySeventh: 3
};
var testChromaNumber = (bitmask) => (chromaNumber) => Boolean(chromaNumber & bitmask);
var hasAnyThird = testChromaNumber(BITMASK.anyThirds);
var hasPerfectFifth = testChromaNumber(BITMASK.perfectFifth);
var hasAnySeventh = testChromaNumber(BITMASK.anySeventh);
var hasNonPerfectFifth = testChromaNumber(BITMASK.nonPerfectFifths);
function hasAnyThirdAndPerfectFifthAndAnySeventh(chordType) {
  const chromaNumber = parseInt(chordType.chroma, 2);
  return hasAnyThird(chromaNumber) && hasPerfectFifth(chromaNumber) && hasAnySeventh(chromaNumber);
}
function withPerfectFifth(chroma) {
  const chromaNumber = parseInt(chroma, 2);
  return hasNonPerfectFifth(chromaNumber) ? chroma : (chromaNumber | 16).toString(2);
}
function findMatches(notes, weight, options) {
  const tonic = notes[0];
  const tonicChroma = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_1__.note)(tonic).chroma;
  const noteName = namedSet(notes);
  const allModes = (0,_tonaljs_pcset__WEBPACK_IMPORTED_MODULE_2__.modes)(notes, false);
  const found = [];
  allModes.forEach((mode, index) => {
    const modeWithPerfectFifth = options.assumePerfectFifth && withPerfectFifth(mode);
    const chordTypes = (0,_tonaljs_chord_type__WEBPACK_IMPORTED_MODULE_0__.all)().filter((chordType) => {
      if (options.assumePerfectFifth && hasAnyThirdAndPerfectFifthAndAnySeventh(chordType)) {
        return chordType.chroma === modeWithPerfectFifth;
      }
      return chordType.chroma === mode;
    });
    chordTypes.forEach((chordType) => {
      const chordName = chordType.aliases[0];
      const baseNote = noteName(index);
      const isInversion = index !== tonicChroma;
      if (isInversion) {
        found.push({
          weight: 0.5 * weight,
          name: `${baseNote}${chordName}/${tonic}`
        });
      } else {
        found.push({ weight: 1 * weight, name: `${baseNote}${chordName}` });
      }
    });
  });
  return found;
}
var chord_detect_default = { detect };

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@tonaljs/chord-type/dist/index.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/@tonaljs/chord-type/dist/index.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "addAlias": () => (/* binding */ addAlias),
/* harmony export */   "all": () => (/* binding */ all),
/* harmony export */   "chordType": () => (/* binding */ chordType),
/* harmony export */   "default": () => (/* binding */ chord_type_default),
/* harmony export */   "entries": () => (/* binding */ entries),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "keys": () => (/* binding */ keys),
/* harmony export */   "names": () => (/* binding */ names),
/* harmony export */   "removeAll": () => (/* binding */ removeAll),
/* harmony export */   "symbols": () => (/* binding */ symbols)
/* harmony export */ });
/* harmony import */ var _tonaljs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tonaljs/core */ "./node_modules/@tonaljs/core/dist/index.mjs");
/* harmony import */ var _tonaljs_pcset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tonaljs/pcset */ "./node_modules/@tonaljs/pcset/dist/index.mjs");
// index.ts



// data.ts
var CHORDS = [
  ["1P 3M 5P", "major", "M ^  maj"],
  ["1P 3M 5P 7M", "major seventh", "maj7 \u0394 ma7 M7 Maj7 ^7"],
  ["1P 3M 5P 7M 9M", "major ninth", "maj9 \u03949 ^9"],
  ["1P 3M 5P 7M 9M 13M", "major thirteenth", "maj13 Maj13 ^13"],
  ["1P 3M 5P 6M", "sixth", "6 add6 add13 M6"],
  ["1P 3M 5P 6M 9M", "sixth/ninth", "6/9 69 M69"],
  ["1P 3M 6m 7M", "major seventh flat sixth", "M7b6 ^7b6"],
  [
    "1P 3M 5P 7M 11A",
    "major seventh sharp eleventh",
    "maj#4 \u0394#4 \u0394#11 M7#11 ^7#11 maj7#11"
  ],
  ["1P 3m 5P", "minor", "m min -"],
  ["1P 3m 5P 7m", "minor seventh", "m7 min7 mi7 -7"],
  [
    "1P 3m 5P 7M",
    "minor/major seventh",
    "m/ma7 m/maj7 mM7 mMaj7 m/M7 -\u03947 m\u0394 -^7"
  ],
  ["1P 3m 5P 6M", "minor sixth", "m6 -6"],
  ["1P 3m 5P 7m 9M", "minor ninth", "m9 -9"],
  ["1P 3m 5P 7M 9M", "minor/major ninth", "mM9 mMaj9 -^9"],
  ["1P 3m 5P 7m 9M 11P", "minor eleventh", "m11 -11"],
  ["1P 3m 5P 7m 9M 13M", "minor thirteenth", "m13 -13"],
  ["1P 3m 5d", "diminished", "dim \xB0 o"],
  ["1P 3m 5d 7d", "diminished seventh", "dim7 \xB07 o7"],
  ["1P 3m 5d 7m", "half-diminished", "m7b5 \xF8 -7b5 h7 h"],
  ["1P 3M 5P 7m", "dominant seventh", "7 dom"],
  ["1P 3M 5P 7m 9M", "dominant ninth", "9"],
  ["1P 3M 5P 7m 9M 13M", "dominant thirteenth", "13"],
  ["1P 3M 5P 7m 11A", "lydian dominant seventh", "7#11 7#4"],
  ["1P 3M 5P 7m 9m", "dominant flat ninth", "7b9"],
  ["1P 3M 5P 7m 9A", "dominant sharp ninth", "7#9"],
  ["1P 3M 7m 9m", "altered", "alt7"],
  ["1P 4P 5P", "suspended fourth", "sus4 sus"],
  ["1P 2M 5P", "suspended second", "sus2"],
  ["1P 4P 5P 7m", "suspended fourth seventh", "7sus4 7sus"],
  ["1P 5P 7m 9M 11P", "eleventh", "11"],
  [
    "1P 4P 5P 7m 9m",
    "suspended fourth flat ninth",
    "b9sus phryg 7b9sus 7b9sus4"
  ],
  ["1P 5P", "fifth", "5"],
  ["1P 3M 5A", "augmented", "aug + +5 ^#5"],
  ["1P 3m 5A", "minor augmented", "m#5 -#5 m+"],
  ["1P 3M 5A 7M", "augmented seventh", "maj7#5 maj7+5 +maj7 ^7#5"],
  [
    "1P 3M 5P 7M 9M 11A",
    "major sharp eleventh (lydian)",
    "maj9#11 \u03949#11 ^9#11"
  ],
  ["1P 2M 4P 5P", "", "sus24 sus4add9"],
  ["1P 3M 5A 7M 9M", "", "maj9#5 Maj9#5"],
  ["1P 3M 5A 7m", "", "7#5 +7 7+ 7aug aug7"],
  ["1P 3M 5A 7m 9A", "", "7#5#9 7#9#5 7alt"],
  ["1P 3M 5A 7m 9M", "", "9#5 9+"],
  ["1P 3M 5A 7m 9M 11A", "", "9#5#11"],
  ["1P 3M 5A 7m 9m", "", "7#5b9 7b9#5"],
  ["1P 3M 5A 7m 9m 11A", "", "7#5b9#11"],
  ["1P 3M 5A 9A", "", "+add#9"],
  ["1P 3M 5A 9M", "", "M#5add9 +add9"],
  ["1P 3M 5P 6M 11A", "", "M6#11 M6b5 6#11 6b5"],
  ["1P 3M 5P 6M 7M 9M", "", "M7add13"],
  ["1P 3M 5P 6M 9M 11A", "", "69#11"],
  ["1P 3m 5P 6M 9M", "", "m69 -69"],
  ["1P 3M 5P 6m 7m", "", "7b6"],
  ["1P 3M 5P 7M 9A 11A", "", "maj7#9#11"],
  ["1P 3M 5P 7M 9M 11A 13M", "", "M13#11 maj13#11 M13+4 M13#4"],
  ["1P 3M 5P 7M 9m", "", "M7b9"],
  ["1P 3M 5P 7m 11A 13m", "", "7#11b13 7b5b13"],
  ["1P 3M 5P 7m 13M", "", "7add6 67 7add13"],
  ["1P 3M 5P 7m 9A 11A", "", "7#9#11 7b5#9 7#9b5"],
  ["1P 3M 5P 7m 9A 11A 13M", "", "13#9#11"],
  ["1P 3M 5P 7m 9A 11A 13m", "", "7#9#11b13"],
  ["1P 3M 5P 7m 9A 13M", "", "13#9"],
  ["1P 3M 5P 7m 9A 13m", "", "7#9b13"],
  ["1P 3M 5P 7m 9M 11A", "", "9#11 9+4 9#4"],
  ["1P 3M 5P 7m 9M 11A 13M", "", "13#11 13+4 13#4"],
  ["1P 3M 5P 7m 9M 11A 13m", "", "9#11b13 9b5b13"],
  ["1P 3M 5P 7m 9m 11A", "", "7b9#11 7b5b9 7b9b5"],
  ["1P 3M 5P 7m 9m 11A 13M", "", "13b9#11"],
  ["1P 3M 5P 7m 9m 11A 13m", "", "7b9b13#11 7b9#11b13 7b5b9b13"],
  ["1P 3M 5P 7m 9m 13M", "", "13b9"],
  ["1P 3M 5P 7m 9m 13m", "", "7b9b13"],
  ["1P 3M 5P 7m 9m 9A", "", "7b9#9"],
  ["1P 3M 5P 9M", "", "Madd9 2 add9 add2"],
  ["1P 3M 5P 9m", "", "Maddb9"],
  ["1P 3M 5d", "", "Mb5"],
  ["1P 3M 5d 6M 7m 9M", "", "13b5"],
  ["1P 3M 5d 7M", "", "M7b5"],
  ["1P 3M 5d 7M 9M", "", "M9b5"],
  ["1P 3M 5d 7m", "", "7b5"],
  ["1P 3M 5d 7m 9M", "", "9b5"],
  ["1P 3M 7m", "", "7no5"],
  ["1P 3M 7m 13m", "", "7b13"],
  ["1P 3M 7m 9M", "", "9no5"],
  ["1P 3M 7m 9M 13M", "", "13no5"],
  ["1P 3M 7m 9M 13m", "", "9b13"],
  ["1P 3m 4P 5P", "", "madd4"],
  ["1P 3m 5P 6m 7M", "", "mMaj7b6"],
  ["1P 3m 5P 6m 7M 9M", "", "mMaj9b6"],
  ["1P 3m 5P 7m 11P", "", "m7add11 m7add4"],
  ["1P 3m 5P 9M", "", "madd9"],
  ["1P 3m 5d 6M 7M", "", "o7M7"],
  ["1P 3m 5d 7M", "", "oM7"],
  ["1P 3m 6m 7M", "", "mb6M7"],
  ["1P 3m 6m 7m", "", "m7#5"],
  ["1P 3m 6m 7m 9M", "", "m9#5"],
  ["1P 3m 5A 7m 9M 11P", "", "m11A"],
  ["1P 3m 6m 9m", "", "mb6b9"],
  ["1P 2M 3m 5d 7m", "", "m9b5"],
  ["1P 4P 5A 7M", "", "M7#5sus4"],
  ["1P 4P 5A 7M 9M", "", "M9#5sus4"],
  ["1P 4P 5A 7m", "", "7#5sus4"],
  ["1P 4P 5P 7M", "", "M7sus4"],
  ["1P 4P 5P 7M 9M", "", "M9sus4"],
  ["1P 4P 5P 7m 9M", "", "9sus4 9sus"],
  ["1P 4P 5P 7m 9M 13M", "", "13sus4 13sus"],
  ["1P 4P 5P 7m 9m 13m", "", "7sus4b9b13 7b9b13sus4"],
  ["1P 4P 7m 10m", "", "4 quartal"],
  ["1P 5P 7m 9m 11P", "", "11b9"]
];
var data_default = CHORDS;

// index.ts
var NoChordType = {
  ..._tonaljs_pcset__WEBPACK_IMPORTED_MODULE_1__.EmptyPcset,
  name: "",
  quality: "Unknown",
  intervals: [],
  aliases: []
};
var dictionary = [];
var index = {};
function get(type) {
  return index[type] || NoChordType;
}
var chordType = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.deprecate)("ChordType.chordType", "ChordType.get", get);
function names() {
  return dictionary.map((chord) => chord.name).filter((x) => x);
}
function symbols() {
  return dictionary.map((chord) => chord.aliases[0]).filter((x) => x);
}
function keys() {
  return Object.keys(index);
}
function all() {
  return dictionary.slice();
}
var entries = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.deprecate)("ChordType.entries", "ChordType.all", all);
function removeAll() {
  dictionary = [];
  index = {};
}
function add(intervals, aliases, fullName) {
  const quality = getQuality(intervals);
  const chord = {
    ...(0,_tonaljs_pcset__WEBPACK_IMPORTED_MODULE_1__.get)(intervals),
    name: fullName || "",
    quality,
    intervals,
    aliases
  };
  dictionary.push(chord);
  if (chord.name) {
    index[chord.name] = chord;
  }
  index[chord.setNum] = chord;
  index[chord.chroma] = chord;
  chord.aliases.forEach((alias) => addAlias(chord, alias));
}
function addAlias(chord, alias) {
  index[alias] = chord;
}
function getQuality(intervals) {
  const has = (interval) => intervals.indexOf(interval) !== -1;
  return has("5A") ? "Augmented" : has("3M") ? "Major" : has("5d") ? "Diminished" : has("3m") ? "Minor" : "Unknown";
}
data_default.forEach(
  ([ivls, fullName, names2]) => add(ivls.split(" "), names2.split(" "), fullName)
);
dictionary.sort((a, b) => a.setNum - b.setNum);
var chord_type_default = {
  names,
  symbols,
  get,
  all,
  add,
  removeAll,
  keys,
  entries,
  chordType
};

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@tonaljs/chord/dist/index.mjs":
/*!****************************************************!*\
  !*** ./node_modules/@tonaljs/chord/dist/index.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chord": () => (/* binding */ chord),
/* harmony export */   "chordScales": () => (/* binding */ chordScales),
/* harmony export */   "default": () => (/* binding */ chord_default),
/* harmony export */   "detect": () => (/* reexport safe */ _tonaljs_chord_detect__WEBPACK_IMPORTED_MODULE_0__.detect),
/* harmony export */   "extended": () => (/* binding */ extended),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "getChord": () => (/* binding */ getChord),
/* harmony export */   "reduced": () => (/* binding */ reduced),
/* harmony export */   "tokenize": () => (/* binding */ tokenize),
/* harmony export */   "transpose": () => (/* binding */ transpose)
/* harmony export */ });
/* harmony import */ var _tonaljs_chord_detect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tonaljs/chord-detect */ "./node_modules/@tonaljs/chord-detect/dist/index.mjs");
/* harmony import */ var _tonaljs_chord_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tonaljs/chord-type */ "./node_modules/@tonaljs/chord-type/dist/index.mjs");
/* harmony import */ var _tonaljs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tonaljs/core */ "./node_modules/@tonaljs/core/dist/index.mjs");
/* harmony import */ var _tonaljs_pcset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tonaljs/pcset */ "./node_modules/@tonaljs/pcset/dist/index.mjs");
/* harmony import */ var _tonaljs_scale_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tonaljs/scale-type */ "./node_modules/@tonaljs/scale-type/dist/index.mjs");
// index.ts






var NoChord = {
  empty: true,
  name: "",
  symbol: "",
  root: "",
  rootDegree: 0,
  type: "",
  tonic: null,
  setNum: NaN,
  quality: "Unknown",
  chroma: "",
  normalized: "",
  aliases: [],
  notes: [],
  intervals: []
};
var NUM_TYPES = /^(6|64|7|9|11|13)$/;
function tokenize(name) {
  const [letter, acc, oct, type] = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_2__.tokenizeNote)(name);
  if (letter === "") {
    return ["", name];
  }
  if (letter === "A" && type === "ug") {
    return ["", "aug"];
  }
  if (!type && (oct === "4" || oct === "5")) {
    return [letter + acc, oct];
  }
  if (NUM_TYPES.test(oct)) {
    return [letter + acc, oct + type];
  } else {
    return [letter + acc + oct, type];
  }
}
function get(src) {
  if (src === "") {
    return NoChord;
  }
  if (Array.isArray(src) && src.length === 2) {
    return getChord(src[1], src[0]);
  } else {
    const [tonic, type] = tokenize(src);
    const chord2 = getChord(type, tonic);
    return chord2.empty ? getChord(src) : chord2;
  }
}
function getChord(typeName, optionalTonic, optionalRoot) {
  const type = (0,_tonaljs_chord_type__WEBPACK_IMPORTED_MODULE_1__.get)(typeName);
  const tonic = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_2__.note)(optionalTonic || "");
  const root = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_2__.note)(optionalRoot || "");
  if (type.empty || optionalTonic && tonic.empty || optionalRoot && root.empty) {
    return NoChord;
  }
  const rootInterval = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_2__.distance)(tonic.pc, root.pc);
  const rootDegree = type.intervals.indexOf(rootInterval) + 1;
  if (!root.empty && !rootDegree) {
    return NoChord;
  }
  const intervals = Array.from(type.intervals);
  for (let i = 1; i < rootDegree; i++) {
    const num = intervals[0][0];
    const quality = intervals[0][1];
    const newNum = parseInt(num, 10) + 7;
    intervals.push(`${newNum}${quality}`);
    intervals.shift();
  }
  const notes = tonic.empty ? [] : intervals.map((i) => (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_2__.transpose)(tonic, i));
  typeName = type.aliases.indexOf(typeName) !== -1 ? typeName : type.aliases[0];
  const symbol = `${tonic.empty ? "" : tonic.pc}${typeName}${root.empty || rootDegree <= 1 ? "" : "/" + root.pc}`;
  const name = `${optionalTonic ? tonic.pc + " " : ""}${type.name}${rootDegree > 1 && optionalRoot ? " over " + root.pc : ""}`;
  return {
    ...type,
    name,
    symbol,
    type: type.name,
    root: root.name,
    intervals,
    rootDegree,
    tonic: tonic.name,
    notes
  };
}
var chord = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_2__.deprecate)("Chord.chord", "Chord.get", get);
function transpose(chordName, interval) {
  const [tonic, type] = tokenize(chordName);
  if (!tonic) {
    return chordName;
  }
  return (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_2__.transpose)(tonic, interval) + type;
}
function chordScales(name) {
  const s = get(name);
  const isChordIncluded = (0,_tonaljs_pcset__WEBPACK_IMPORTED_MODULE_3__.isSupersetOf)(s.chroma);
  return (0,_tonaljs_scale_type__WEBPACK_IMPORTED_MODULE_4__.all)().filter((scale) => isChordIncluded(scale.chroma)).map((scale) => scale.name);
}
function extended(chordName) {
  const s = get(chordName);
  const isSuperset = (0,_tonaljs_pcset__WEBPACK_IMPORTED_MODULE_3__.isSupersetOf)(s.chroma);
  return (0,_tonaljs_chord_type__WEBPACK_IMPORTED_MODULE_1__.all)().filter((chord2) => isSuperset(chord2.chroma)).map((chord2) => s.tonic + chord2.aliases[0]);
}
function reduced(chordName) {
  const s = get(chordName);
  const isSubset = (0,_tonaljs_pcset__WEBPACK_IMPORTED_MODULE_3__.isSubsetOf)(s.chroma);
  return (0,_tonaljs_chord_type__WEBPACK_IMPORTED_MODULE_1__.all)().filter((chord2) => isSubset(chord2.chroma)).map((chord2) => s.tonic + chord2.aliases[0]);
}
var chord_default = {
  getChord,
  get,
  detect: _tonaljs_chord_detect__WEBPACK_IMPORTED_MODULE_0__.detect,
  chordScales,
  extended,
  reduced,
  tokenize,
  transpose,
  chord
};

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@tonaljs/collection/dist/index.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/@tonaljs/collection/dist/index.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "compact": () => (/* binding */ compact),
/* harmony export */   "default": () => (/* binding */ collection_default),
/* harmony export */   "permutations": () => (/* binding */ permutations),
/* harmony export */   "range": () => (/* binding */ range),
/* harmony export */   "rotate": () => (/* binding */ rotate),
/* harmony export */   "shuffle": () => (/* binding */ shuffle)
/* harmony export */ });
// index.ts
function ascR(b, n) {
  const a = [];
  for (; n--; a[n] = n + b)
    ;
  return a;
}
function descR(b, n) {
  const a = [];
  for (; n--; a[n] = b - n)
    ;
  return a;
}
function range(from, to) {
  return from < to ? ascR(from, to - from + 1) : descR(from, from - to + 1);
}
function rotate(times, arr) {
  const len = arr.length;
  const n = (times % len + len) % len;
  return arr.slice(n, len).concat(arr.slice(0, n));
}
function compact(arr) {
  return arr.filter((n) => n === 0 || n);
}
function shuffle(arr, rnd = Math.random) {
  let i;
  let t;
  let m = arr.length;
  while (m) {
    i = Math.floor(rnd() * m--);
    t = arr[m];
    arr[m] = arr[i];
    arr[i] = t;
  }
  return arr;
}
function permutations(arr) {
  if (arr.length === 0) {
    return [[]];
  }
  return permutations(arr.slice(1)).reduce((acc, perm) => {
    return acc.concat(
      arr.map((e, pos) => {
        const newPerm = perm.slice();
        newPerm.splice(pos, 0, arr[0]);
        return newPerm;
      })
    );
  }, []);
}
var collection_default = {
  compact,
  permutations,
  range,
  rotate,
  shuffle
};

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@tonaljs/core/dist/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/@tonaljs/core/dist/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accToAlt": () => (/* binding */ accToAlt),
/* harmony export */   "altToAcc": () => (/* binding */ altToAcc),
/* harmony export */   "coordToInterval": () => (/* binding */ coordToInterval),
/* harmony export */   "coordToNote": () => (/* binding */ coordToNote),
/* harmony export */   "decode": () => (/* binding */ decode),
/* harmony export */   "deprecate": () => (/* binding */ deprecate),
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "encode": () => (/* binding */ encode),
/* harmony export */   "fillStr": () => (/* binding */ fillStr),
/* harmony export */   "interval": () => (/* binding */ interval),
/* harmony export */   "isNamed": () => (/* binding */ isNamed),
/* harmony export */   "isPitch": () => (/* binding */ isPitch),
/* harmony export */   "note": () => (/* binding */ note),
/* harmony export */   "stepToLetter": () => (/* binding */ stepToLetter),
/* harmony export */   "tokenizeInterval": () => (/* binding */ tokenizeInterval),
/* harmony export */   "tokenizeNote": () => (/* binding */ tokenizeNote),
/* harmony export */   "transpose": () => (/* binding */ transpose)
/* harmony export */ });
// src/utils.ts
var fillStr = (s, n) => Array(Math.abs(n) + 1).join(s);
function deprecate(original, alternative, fn) {
  return function(...args) {
    console.warn(`${original} is deprecated. Use ${alternative}.`);
    return fn.apply(this, args);
  };
}

// src/named.ts
function isNamed(src) {
  return src !== null && typeof src === "object" && typeof src.name === "string" ? true : false;
}

// src/pitch.ts
function isPitch(pitch) {
  return pitch !== null && typeof pitch === "object" && typeof pitch.step === "number" && typeof pitch.alt === "number" ? true : false;
}
var FIFTHS = [0, 2, 4, -1, 1, 3, 5];
var STEPS_TO_OCTS = FIFTHS.map(
  (fifths) => Math.floor(fifths * 7 / 12)
);
function encode(pitch) {
  const { step, alt, oct, dir = 1 } = pitch;
  const f = FIFTHS[step] + 7 * alt;
  if (oct === void 0) {
    return [dir * f];
  }
  const o = oct - STEPS_TO_OCTS[step] - 4 * alt;
  return [dir * f, dir * o];
}
var FIFTHS_TO_STEPS = [3, 0, 4, 1, 5, 2, 6];
function decode(coord) {
  const [f, o, dir] = coord;
  const step = FIFTHS_TO_STEPS[unaltered(f)];
  const alt = Math.floor((f + 1) / 7);
  if (o === void 0) {
    return { step, alt, dir };
  }
  const oct = o + 4 * alt + STEPS_TO_OCTS[step];
  return { step, alt, oct, dir };
}
function unaltered(f) {
  const i = (f + 1) % 7;
  return i < 0 ? 7 + i : i;
}

// src/note.ts
var NoNote = { empty: true, name: "", pc: "", acc: "" };
var cache = /* @__PURE__ */ new Map();
var stepToLetter = (step) => "CDEFGAB".charAt(step);
var altToAcc = (alt) => alt < 0 ? fillStr("b", -alt) : fillStr("#", alt);
var accToAlt = (acc) => acc[0] === "b" ? -acc.length : acc.length;
function note(src) {
  const stringSrc = JSON.stringify(src);
  const cached = cache.get(stringSrc);
  if (cached) {
    return cached;
  }
  const value = typeof src === "string" ? parse(src) : isPitch(src) ? note(pitchName(src)) : isNamed(src) ? note(src.name) : NoNote;
  cache.set(stringSrc, value);
  return value;
}
var REGEX = /^([a-gA-G]?)(#{1,}|b{1,}|x{1,}|)(-?\d*)\s*(.*)$/;
function tokenizeNote(str) {
  const m = REGEX.exec(str);
  return [m[1].toUpperCase(), m[2].replace(/x/g, "##"), m[3], m[4]];
}
function coordToNote(noteCoord) {
  return note(decode(noteCoord));
}
var mod = (n, m) => (n % m + m) % m;
var SEMI = [0, 2, 4, 5, 7, 9, 11];
function parse(noteName) {
  const tokens = tokenizeNote(noteName);
  if (tokens[0] === "" || tokens[3] !== "") {
    return NoNote;
  }
  const letter = tokens[0];
  const acc = tokens[1];
  const octStr = tokens[2];
  const step = (letter.charCodeAt(0) + 3) % 7;
  const alt = accToAlt(acc);
  const oct = octStr.length ? +octStr : void 0;
  const coord = encode({ step, alt, oct });
  const name = letter + acc + octStr;
  const pc = letter + acc;
  const chroma = (SEMI[step] + alt + 120) % 12;
  const height = oct === void 0 ? mod(SEMI[step] + alt, 12) - 12 * 99 : SEMI[step] + alt + 12 * (oct + 1);
  const midi = height >= 0 && height <= 127 ? height : null;
  const freq = oct === void 0 ? null : Math.pow(2, (height - 69) / 12) * 440;
  return {
    empty: false,
    acc,
    alt,
    chroma,
    coord,
    freq,
    height,
    letter,
    midi,
    name,
    oct,
    pc,
    step
  };
}
function pitchName(props) {
  const { step, alt, oct } = props;
  const letter = stepToLetter(step);
  if (!letter) {
    return "";
  }
  const pc = letter + altToAcc(alt);
  return oct || oct === 0 ? pc + oct : pc;
}

// src/interval.ts
var NoInterval = { empty: true, name: "", acc: "" };
var INTERVAL_TONAL_REGEX = "([-+]?\\d+)(d{1,4}|m|M|P|A{1,4})";
var INTERVAL_SHORTHAND_REGEX = "(AA|A|P|M|m|d|dd)([-+]?\\d+)";
var REGEX2 = new RegExp(
  "^" + INTERVAL_TONAL_REGEX + "|" + INTERVAL_SHORTHAND_REGEX + "$"
);
function tokenizeInterval(str) {
  const m = REGEX2.exec(`${str}`);
  if (m === null) {
    return ["", ""];
  }
  return m[1] ? [m[1], m[2]] : [m[4], m[3]];
}
var cache2 = {};
function interval(src) {
  return typeof src === "string" ? cache2[src] || (cache2[src] = parse2(src)) : isPitch(src) ? interval(pitchName2(src)) : isNamed(src) ? interval(src.name) : NoInterval;
}
var SIZES = [0, 2, 4, 5, 7, 9, 11];
var TYPES = "PMMPPMM";
function parse2(str) {
  const tokens = tokenizeInterval(str);
  if (tokens[0] === "") {
    return NoInterval;
  }
  const num = +tokens[0];
  const q = tokens[1];
  const step = (Math.abs(num) - 1) % 7;
  const t = TYPES[step];
  if (t === "M" && q === "P") {
    return NoInterval;
  }
  const type = t === "M" ? "majorable" : "perfectable";
  const name = "" + num + q;
  const dir = num < 0 ? -1 : 1;
  const simple = num === 8 || num === -8 ? num : dir * (step + 1);
  const alt = qToAlt(type, q);
  const oct = Math.floor((Math.abs(num) - 1) / 7);
  const semitones = dir * (SIZES[step] + alt + 12 * oct);
  const chroma = (dir * (SIZES[step] + alt) % 12 + 12) % 12;
  const coord = encode({ step, alt, oct, dir });
  return {
    empty: false,
    name,
    num,
    q,
    step,
    alt,
    dir,
    type,
    simple,
    semitones,
    chroma,
    coord,
    oct
  };
}
function coordToInterval(coord, forceDescending) {
  const [f, o = 0] = coord;
  const isDescending = f * 7 + o * 12 < 0;
  const ivl = forceDescending || isDescending ? [-f, -o, -1] : [f, o, 1];
  return interval(decode(ivl));
}
function qToAlt(type, q) {
  return q === "M" && type === "majorable" || q === "P" && type === "perfectable" ? 0 : q === "m" && type === "majorable" ? -1 : /^A+$/.test(q) ? q.length : /^d+$/.test(q) ? -1 * (type === "perfectable" ? q.length : q.length + 1) : 0;
}
function pitchName2(props) {
  const { step, alt, oct = 0, dir } = props;
  if (!dir) {
    return "";
  }
  const calcNum = step + 1 + 7 * oct;
  const num = calcNum === 0 ? step + 1 : calcNum;
  const d = dir < 0 ? "-" : "";
  const type = TYPES[step] === "M" ? "majorable" : "perfectable";
  const name = d + num + altToQ(type, alt);
  return name;
}
function altToQ(type, alt) {
  if (alt === 0) {
    return type === "majorable" ? "M" : "P";
  } else if (alt === -1 && type === "majorable") {
    return "m";
  } else if (alt > 0) {
    return fillStr("A", alt);
  } else {
    return fillStr("d", type === "perfectable" ? alt : alt + 1);
  }
}

// src/distance.ts
function transpose(noteName, intervalName) {
  const note2 = note(noteName);
  const interval2 = interval(intervalName);
  if (note2.empty || interval2.empty) {
    return "";
  }
  const noteCoord = note2.coord;
  const intervalCoord = interval2.coord;
  const tr = noteCoord.length === 1 ? [noteCoord[0] + intervalCoord[0]] : [noteCoord[0] + intervalCoord[0], noteCoord[1] + intervalCoord[1]];
  return coordToNote(tr).name;
}
function distance(fromNote, toNote) {
  const from = note(fromNote);
  const to = note(toNote);
  if (from.empty || to.empty) {
    return "";
  }
  const fcoord = from.coord;
  const tcoord = to.coord;
  const fifths = tcoord[0] - fcoord[0];
  const octs = fcoord.length === 2 && tcoord.length === 2 ? tcoord[1] - fcoord[1] : -Math.floor(fifths * 7 / 12);
  const forceDescending = to.height === from.height && to.midi !== null && from.midi !== null && from.step > to.step;
  return coordToInterval([fifths, octs], forceDescending).name;
}

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@tonaljs/duration-value/dist/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@tonaljs/duration-value/dist/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ duration_value_default),
/* harmony export */   "fraction": () => (/* binding */ fraction),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "names": () => (/* binding */ names),
/* harmony export */   "shorthands": () => (/* binding */ shorthands),
/* harmony export */   "value": () => (/* binding */ value)
/* harmony export */ });
// data.ts
var DATA = [
  [
    0.125,
    "dl",
    ["large", "duplex longa", "maxima", "octuple", "octuple whole"]
  ],
  [0.25, "l", ["long", "longa"]],
  [0.5, "d", ["double whole", "double", "breve"]],
  [1, "w", ["whole", "semibreve"]],
  [2, "h", ["half", "minim"]],
  [4, "q", ["quarter", "crotchet"]],
  [8, "e", ["eighth", "quaver"]],
  [16, "s", ["sixteenth", "semiquaver"]],
  [32, "t", ["thirty-second", "demisemiquaver"]],
  [64, "sf", ["sixty-fourth", "hemidemisemiquaver"]],
  [128, "h", ["hundred twenty-eighth"]],
  [256, "th", ["two hundred fifty-sixth"]]
];
var data_default = DATA;

// index.ts
var VALUES = [];
data_default.forEach(
  ([denominator, shorthand, names2]) => add(denominator, shorthand, names2)
);
var NoDuration = {
  empty: true,
  name: "",
  value: 0,
  fraction: [0, 0],
  shorthand: "",
  dots: "",
  names: []
};
function names() {
  return VALUES.reduce((names2, duration) => {
    duration.names.forEach((name) => names2.push(name));
    return names2;
  }, []);
}
function shorthands() {
  return VALUES.map((dur) => dur.shorthand);
}
var REGEX = /^([^.]+)(\.*)$/;
function get(name) {
  const [_, simple, dots] = REGEX.exec(name) || [];
  const base = VALUES.find(
    (dur) => dur.shorthand === simple || dur.names.includes(simple)
  );
  if (!base) {
    return NoDuration;
  }
  const fraction2 = calcDots(base.fraction, dots.length);
  const value2 = fraction2[0] / fraction2[1];
  return { ...base, name, dots, value: value2, fraction: fraction2 };
}
var value = (name) => get(name).value;
var fraction = (name) => get(name).fraction;
var duration_value_default = { names, shorthands, get, value, fraction };
function add(denominator, shorthand, names2) {
  VALUES.push({
    empty: false,
    dots: "",
    name: "",
    value: 1 / denominator,
    fraction: denominator < 1 ? [1 / denominator, 1] : [1, denominator],
    shorthand,
    names: names2
  });
}
function calcDots(fraction2, dots) {
  const pow = Math.pow(2, dots);
  let numerator = fraction2[0] * pow;
  let denominator = fraction2[1] * pow;
  const base = numerator;
  for (let i = 0; i < dots; i++) {
    numerator += base / Math.pow(2, i + 1);
  }
  while (numerator % 2 === 0 && denominator % 2 === 0) {
    numerator /= 2;
    denominator /= 2;
  }
  return [numerator, denominator];
}

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@tonaljs/interval/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@tonaljs/interval/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "addTo": () => (/* binding */ addTo),
/* harmony export */   "default": () => (/* binding */ interval_default),
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "fromSemitones": () => (/* binding */ fromSemitones),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "invert": () => (/* binding */ invert),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "names": () => (/* binding */ names),
/* harmony export */   "num": () => (/* binding */ num),
/* harmony export */   "quality": () => (/* binding */ quality),
/* harmony export */   "semitones": () => (/* binding */ semitones),
/* harmony export */   "simplify": () => (/* binding */ simplify),
/* harmony export */   "substract": () => (/* binding */ substract),
/* harmony export */   "transposeFifths": () => (/* binding */ transposeFifths)
/* harmony export */ });
/* harmony import */ var _tonaljs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tonaljs/core */ "./node_modules/@tonaljs/core/dist/index.mjs");
// index.ts

function names() {
  return "1P 2M 3M 4P 5P 6m 7m".split(" ");
}
var get = _tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.interval;
var name = (name2) => (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.interval)(name2).name;
var semitones = (name2) => (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.interval)(name2).semitones;
var quality = (name2) => (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.interval)(name2).q;
var num = (name2) => (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.interval)(name2).num;
function simplify(name2) {
  const i = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.interval)(name2);
  return i.empty ? "" : i.simple + i.q;
}
function invert(name2) {
  const i = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.interval)(name2);
  if (i.empty) {
    return "";
  }
  const step = (7 - i.step) % 7;
  const alt = i.type === "perfectable" ? -i.alt : -(i.alt + 1);
  return (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.interval)({ step, alt, oct: i.oct, dir: i.dir }).name;
}
var IN = [1, 2, 2, 3, 3, 4, 5, 5, 6, 6, 7, 7];
var IQ = "P m M m M P d P m M m M".split(" ");
function fromSemitones(semitones2) {
  const d = semitones2 < 0 ? -1 : 1;
  const n = Math.abs(semitones2);
  const c = n % 12;
  const o = Math.floor(n / 12);
  return d * (IN[c] + 7 * o) + IQ[c];
}
var distance = _tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.distance;
var add = combinator((a, b) => [a[0] + b[0], a[1] + b[1]]);
var addTo = (interval) => (other) => add(interval, other);
var substract = combinator((a, b) => [a[0] - b[0], a[1] - b[1]]);
function transposeFifths(interval, fifths) {
  const ivl = get(interval);
  if (ivl.empty)
    return "";
  const [nFifths, nOcts, dir] = ivl.coord;
  return (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.coordToInterval)([nFifths + fifths, nOcts, dir]).name;
}
var interval_default = {
  names,
  get,
  name,
  num,
  semitones,
  quality,
  fromSemitones,
  distance,
  invert,
  simplify,
  add,
  addTo,
  substract,
  transposeFifths
};
function combinator(fn) {
  return (a, b) => {
    const coordA = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.interval)(a).coord;
    const coordB = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.interval)(b).coord;
    if (coordA && coordB) {
      const coord = fn(coordA, coordB);
      return (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.coordToInterval)(coord).name;
    }
  };
}

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@tonaljs/key/dist/index.mjs":
/*!**************************************************!*\
  !*** ./node_modules/@tonaljs/key/dist/index.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ key_default),
/* harmony export */   "majorKey": () => (/* binding */ majorKey),
/* harmony export */   "majorTonicFromKeySignature": () => (/* binding */ majorTonicFromKeySignature),
/* harmony export */   "minorKey": () => (/* binding */ minorKey)
/* harmony export */ });
/* harmony import */ var _tonaljs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tonaljs/core */ "./node_modules/@tonaljs/core/dist/index.mjs");
/* harmony import */ var _tonaljs_note__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tonaljs/note */ "./node_modules/@tonaljs/note/dist/index.mjs");
/* harmony import */ var _tonaljs_roman_numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tonaljs/roman-numeral */ "./node_modules/@tonaljs/roman-numeral/dist/index.mjs");
// index.ts



var Empty = Object.freeze([]);
var NoKey = {
  type: "major",
  tonic: "",
  alteration: 0,
  keySignature: ""
};
var NoKeyScale = {
  tonic: "",
  grades: Empty,
  intervals: Empty,
  scale: Empty,
  chords: Empty,
  chordsHarmonicFunction: Empty,
  chordScales: Empty
};
var NoMajorKey = {
  ...NoKey,
  ...NoKeyScale,
  type: "major",
  minorRelative: "",
  scale: Empty,
  secondaryDominants: Empty,
  secondaryDominantsMinorRelative: Empty,
  substituteDominants: Empty,
  substituteDominantsMinorRelative: Empty
};
var NoMinorKey = {
  ...NoKey,
  type: "minor",
  relativeMajor: "",
  natural: NoKeyScale,
  harmonic: NoKeyScale,
  melodic: NoKeyScale
};
var mapScaleToType = (scale, list, sep = "") => list.map((type, i) => `${scale[i]}${sep}${type}`);
function keyScale(grades, chords, harmonicFunctions, chordScales) {
  return (tonic) => {
    const intervals = grades.map((gr) => (0,_tonaljs_roman_numeral__WEBPACK_IMPORTED_MODULE_2__.get)(gr).interval || "");
    const scale = intervals.map((interval) => (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.transpose)(tonic, interval));
    return {
      tonic,
      grades,
      intervals,
      scale,
      chords: mapScaleToType(scale, chords),
      chordsHarmonicFunction: harmonicFunctions.slice(),
      chordScales: mapScaleToType(scale, chordScales, " ")
    };
  };
}
var distInFifths = (from, to) => {
  const f = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.note)(from);
  const t = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.note)(to);
  return f.empty || t.empty ? 0 : t.coord[0] - f.coord[0];
};
var MajorScale = keyScale(
  "I II III IV V VI VII".split(" "),
  "maj7 m7 m7 maj7 7 m7 m7b5".split(" "),
  "T SD T SD D T D".split(" "),
  "major,dorian,phrygian,lydian,mixolydian,minor,locrian".split(",")
);
var NaturalScale = keyScale(
  "I II bIII IV V bVI bVII".split(" "),
  "m7 m7b5 maj7 m7 m7 maj7 7".split(" "),
  "T SD T SD D SD SD".split(" "),
  "minor,locrian,major,dorian,phrygian,lydian,mixolydian".split(",")
);
var HarmonicScale = keyScale(
  "I II bIII IV V bVI VII".split(" "),
  "mMaj7 m7b5 +maj7 m7 7 maj7 o7".split(" "),
  "T SD T SD D SD D".split(" "),
  "harmonic minor,locrian 6,major augmented,lydian diminished,phrygian dominant,lydian #9,ultralocrian".split(
    ","
  )
);
var MelodicScale = keyScale(
  "I II bIII IV V VI VII".split(" "),
  "m6 m7 +maj7 7 7 m7b5 m7b5".split(" "),
  "T SD T SD D  ".split(" "),
  "melodic minor,dorian b2,lydian augmented,lydian dominant,mixolydian b6,locrian #2,altered".split(
    ","
  )
);
function majorKey(tonic) {
  const pc = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.note)(tonic).pc;
  if (!pc)
    return NoMajorKey;
  const keyScale2 = MajorScale(pc);
  const alteration = distInFifths("C", pc);
  const romanInTonic = (src) => {
    const r = (0,_tonaljs_roman_numeral__WEBPACK_IMPORTED_MODULE_2__.get)(src);
    if (r.empty)
      return "";
    return (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.transpose)(tonic, r.interval) + r.chordType;
  };
  return {
    ...keyScale2,
    type: "major",
    minorRelative: (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.transpose)(pc, "-3m"),
    alteration,
    keySignature: (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.altToAcc)(alteration),
    secondaryDominants: "- VI7 VII7 I7 II7 III7 -".split(" ").map(romanInTonic),
    secondaryDominantsMinorRelative: "- IIIm7b5 IV#m7 Vm7 VIm7 VIIm7b5 -".split(" ").map(romanInTonic),
    substituteDominants: "- bIII7 IV7 bV7 bVI7 bVII7 -".split(" ").map(romanInTonic),
    substituteDominantsMinorRelative: "- IIIm7 Im7 IIbm7 VIm7 IVm7 -".split(" ").map(romanInTonic)
  };
}
function minorKey(tnc) {
  const pc = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.note)(tnc).pc;
  if (!pc)
    return NoMinorKey;
  const alteration = distInFifths("C", pc) - 3;
  return {
    type: "minor",
    tonic: pc,
    relativeMajor: (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.transpose)(pc, "3m"),
    alteration,
    keySignature: (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.altToAcc)(alteration),
    natural: NaturalScale(pc),
    harmonic: HarmonicScale(pc),
    melodic: MelodicScale(pc)
  };
}
function majorTonicFromKeySignature(sig) {
  if (typeof sig === "number") {
    return (0,_tonaljs_note__WEBPACK_IMPORTED_MODULE_1__.transposeFifths)("C", sig);
  } else if (typeof sig === "string" && /^b+|#+$/.test(sig)) {
    return (0,_tonaljs_note__WEBPACK_IMPORTED_MODULE_1__.transposeFifths)("C", (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.accToAlt)(sig));
  }
  return null;
}
var key_default = { majorKey, majorTonicFromKeySignature, minorKey };

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@tonaljs/midi/dist/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/@tonaljs/midi/dist/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ midi_default),
/* harmony export */   "freqToMidi": () => (/* binding */ freqToMidi),
/* harmony export */   "isMidi": () => (/* binding */ isMidi),
/* harmony export */   "midiToFreq": () => (/* binding */ midiToFreq),
/* harmony export */   "midiToNoteName": () => (/* binding */ midiToNoteName),
/* harmony export */   "toMidi": () => (/* binding */ toMidi)
/* harmony export */ });
/* harmony import */ var _tonaljs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tonaljs/core */ "./node_modules/@tonaljs/core/dist/index.mjs");
// index.ts

function isMidi(arg) {
  return +arg >= 0 && +arg <= 127;
}
function toMidi(note) {
  if (isMidi(note)) {
    return +note;
  }
  const n = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.note)(note);
  return n.empty ? null : n.midi;
}
function midiToFreq(midi, tuning = 440) {
  return Math.pow(2, (midi - 69) / 12) * tuning;
}
var L2 = Math.log(2);
var L440 = Math.log(440);
function freqToMidi(freq) {
  const v = 12 * (Math.log(freq) - L440) / L2 + 69;
  return Math.round(v * 100) / 100;
}
var SHARPS = "C C# D D# E F F# G G# A A# B".split(" ");
var FLATS = "C Db D Eb E F Gb G Ab A Bb B".split(" ");
function midiToNoteName(midi, options = {}) {
  if (isNaN(midi) || midi === -Infinity || midi === Infinity)
    return "";
  midi = Math.round(midi);
  const pcs = options.sharps === true ? SHARPS : FLATS;
  const pc = pcs[midi % 12];
  if (options.pitchClass) {
    return pc;
  }
  const o = Math.floor(midi / 12) - 1;
  return pc + o;
}
var midi_default = { isMidi, toMidi, midiToFreq, midiToNoteName, freqToMidi };

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@tonaljs/mode/dist/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/@tonaljs/mode/dist/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "all": () => (/* binding */ all),
/* harmony export */   "default": () => (/* binding */ mode_default),
/* harmony export */   "distance": () => (/* binding */ distance),
/* harmony export */   "entries": () => (/* binding */ entries),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "mode": () => (/* binding */ mode),
/* harmony export */   "names": () => (/* binding */ names),
/* harmony export */   "notes": () => (/* binding */ notes),
/* harmony export */   "relativeTonic": () => (/* binding */ relativeTonic),
/* harmony export */   "seventhChords": () => (/* binding */ seventhChords),
/* harmony export */   "triads": () => (/* binding */ triads)
/* harmony export */ });
/* harmony import */ var _tonaljs_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tonaljs/collection */ "./node_modules/@tonaljs/collection/dist/index.mjs");
/* harmony import */ var _tonaljs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tonaljs/core */ "./node_modules/@tonaljs/core/dist/index.mjs");
/* harmony import */ var _tonaljs_interval__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tonaljs/interval */ "./node_modules/@tonaljs/interval/dist/index.mjs");
/* harmony import */ var _tonaljs_pcset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tonaljs/pcset */ "./node_modules/@tonaljs/pcset/dist/index.mjs");
/* harmony import */ var _tonaljs_scale_type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tonaljs/scale-type */ "./node_modules/@tonaljs/scale-type/dist/index.mjs");
// index.ts





var MODES = [
  [0, 2773, 0, "ionian", "", "Maj7", "major"],
  [1, 2902, 2, "dorian", "m", "m7"],
  [2, 3418, 4, "phrygian", "m", "m7"],
  [3, 2741, -1, "lydian", "", "Maj7"],
  [4, 2774, 1, "mixolydian", "", "7"],
  [5, 2906, 3, "aeolian", "m", "m7", "minor"],
  [6, 3434, 5, "locrian", "dim", "m7b5"]
];
var NoMode = {
  ..._tonaljs_pcset__WEBPACK_IMPORTED_MODULE_3__.EmptyPcset,
  name: "",
  alt: 0,
  modeNum: NaN,
  triad: "",
  seventh: "",
  aliases: []
};
var modes = MODES.map(toMode);
var index = {};
modes.forEach((mode2) => {
  index[mode2.name] = mode2;
  mode2.aliases.forEach((alias) => {
    index[alias] = mode2;
  });
});
function get(name) {
  return typeof name === "string" ? index[name.toLowerCase()] || NoMode : name && name.name ? get(name.name) : NoMode;
}
var mode = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_1__.deprecate)("Mode.mode", "Mode.get", get);
function all() {
  return modes.slice();
}
var entries = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_1__.deprecate)("Mode.mode", "Mode.all", all);
function names() {
  return modes.map((mode2) => mode2.name);
}
function toMode(mode2) {
  const [modeNum, setNum, alt, name, triad, seventh, alias] = mode2;
  const aliases = alias ? [alias] : [];
  const chroma = Number(setNum).toString(2);
  const intervals = (0,_tonaljs_scale_type__WEBPACK_IMPORTED_MODULE_4__.get)(name).intervals;
  return {
    empty: false,
    intervals,
    modeNum,
    chroma,
    normalized: chroma,
    name,
    setNum,
    alt,
    triad,
    seventh,
    aliases
  };
}
function notes(modeName, tonic) {
  return get(modeName).intervals.map((ivl) => (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_1__.transpose)(tonic, ivl));
}
function chords(chords2) {
  return (modeName, tonic) => {
    const mode2 = get(modeName);
    if (mode2.empty)
      return [];
    const triads2 = (0,_tonaljs_collection__WEBPACK_IMPORTED_MODULE_0__.rotate)(mode2.modeNum, chords2);
    const tonics = mode2.intervals.map((i) => (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_1__.transpose)(tonic, i));
    return triads2.map((triad, i) => tonics[i] + triad);
  };
}
var triads = chords(MODES.map((x) => x[4]));
var seventhChords = chords(MODES.map((x) => x[5]));
function distance(destination, source) {
  const from = get(source);
  const to = get(destination);
  if (from.empty || to.empty)
    return "";
  return (0,_tonaljs_interval__WEBPACK_IMPORTED_MODULE_2__.simplify)((0,_tonaljs_interval__WEBPACK_IMPORTED_MODULE_2__.transposeFifths)("1P", to.alt - from.alt));
}
function relativeTonic(destination, source, tonic) {
  return (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_1__.transpose)(tonic, distance(destination, source));
}
var mode_default = {
  get,
  names,
  all,
  distance,
  relativeTonic,
  notes,
  triads,
  seventhChords,
  entries,
  mode
};

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@tonaljs/note/dist/index.mjs":
/*!***************************************************!*\
  !*** ./node_modules/@tonaljs/note/dist/index.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accidentals": () => (/* binding */ accidentals),
/* harmony export */   "ascending": () => (/* binding */ ascending),
/* harmony export */   "chroma": () => (/* binding */ chroma),
/* harmony export */   "default": () => (/* binding */ note_default),
/* harmony export */   "descending": () => (/* binding */ descending),
/* harmony export */   "enharmonic": () => (/* binding */ enharmonic),
/* harmony export */   "freq": () => (/* binding */ freq),
/* harmony export */   "fromFreq": () => (/* binding */ fromFreq),
/* harmony export */   "fromFreqSharps": () => (/* binding */ fromFreqSharps),
/* harmony export */   "fromMidi": () => (/* binding */ fromMidi),
/* harmony export */   "fromMidiSharps": () => (/* binding */ fromMidiSharps),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "midi": () => (/* binding */ midi),
/* harmony export */   "name": () => (/* binding */ name),
/* harmony export */   "names": () => (/* binding */ names),
/* harmony export */   "octave": () => (/* binding */ octave),
/* harmony export */   "pitchClass": () => (/* binding */ pitchClass),
/* harmony export */   "simplify": () => (/* binding */ simplify),
/* harmony export */   "sortedNames": () => (/* binding */ sortedNames),
/* harmony export */   "sortedUniqNames": () => (/* binding */ sortedUniqNames),
/* harmony export */   "tr": () => (/* binding */ tr),
/* harmony export */   "trBy": () => (/* binding */ trBy),
/* harmony export */   "trFifths": () => (/* binding */ trFifths),
/* harmony export */   "trFrom": () => (/* binding */ trFrom),
/* harmony export */   "transpose": () => (/* binding */ transpose),
/* harmony export */   "transposeBy": () => (/* binding */ transposeBy),
/* harmony export */   "transposeFifths": () => (/* binding */ transposeFifths),
/* harmony export */   "transposeFrom": () => (/* binding */ transposeFrom)
/* harmony export */ });
/* harmony import */ var _tonaljs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tonaljs/core */ "./node_modules/@tonaljs/core/dist/index.mjs");
/* harmony import */ var _tonaljs_midi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tonaljs/midi */ "./node_modules/@tonaljs/midi/dist/index.mjs");
// index.ts


var NAMES = ["C", "D", "E", "F", "G", "A", "B"];
var toName = (n) => n.name;
var onlyNotes = (array) => array.map(_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.note).filter((n) => !n.empty);
function names(array) {
  if (array === void 0) {
    return NAMES.slice();
  } else if (!Array.isArray(array)) {
    return [];
  } else {
    return onlyNotes(array).map(toName);
  }
}
var get = _tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.note;
var name = (note) => get(note).name;
var pitchClass = (note) => get(note).pc;
var accidentals = (note) => get(note).acc;
var octave = (note) => get(note).oct;
var midi = (note) => get(note).midi;
var freq = (note) => get(note).freq;
var chroma = (note) => get(note).chroma;
function fromMidi(midi2) {
  return (0,_tonaljs_midi__WEBPACK_IMPORTED_MODULE_1__.midiToNoteName)(midi2);
}
function fromFreq(freq2) {
  return (0,_tonaljs_midi__WEBPACK_IMPORTED_MODULE_1__.midiToNoteName)((0,_tonaljs_midi__WEBPACK_IMPORTED_MODULE_1__.freqToMidi)(freq2));
}
function fromFreqSharps(freq2) {
  return (0,_tonaljs_midi__WEBPACK_IMPORTED_MODULE_1__.midiToNoteName)((0,_tonaljs_midi__WEBPACK_IMPORTED_MODULE_1__.freqToMidi)(freq2), { sharps: true });
}
function fromMidiSharps(midi2) {
  return (0,_tonaljs_midi__WEBPACK_IMPORTED_MODULE_1__.midiToNoteName)(midi2, { sharps: true });
}
var transpose = _tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.transpose;
var tr = _tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.transpose;
var transposeBy = (interval) => (note) => transpose(note, interval);
var trBy = transposeBy;
var transposeFrom = (note) => (interval) => transpose(note, interval);
var trFrom = transposeFrom;
function transposeFifths(noteName, fifths) {
  const note = get(noteName);
  if (note.empty) {
    return "";
  }
  const [nFifths, nOcts] = note.coord;
  const transposed = nOcts === void 0 ? (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.coordToNote)([nFifths + fifths]) : (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.coordToNote)([nFifths + fifths, nOcts]);
  return transposed.name;
}
var trFifths = transposeFifths;
var ascending = (a, b) => a.height - b.height;
var descending = (a, b) => b.height - a.height;
function sortedNames(notes, comparator) {
  comparator = comparator || ascending;
  return onlyNotes(notes).sort(comparator).map(toName);
}
function sortedUniqNames(notes) {
  return sortedNames(notes, ascending).filter(
    (n, i, a) => i === 0 || n !== a[i - 1]
  );
}
var simplify = (noteName) => {
  const note = get(noteName);
  if (note.empty) {
    return "";
  }
  return (0,_tonaljs_midi__WEBPACK_IMPORTED_MODULE_1__.midiToNoteName)(note.midi || note.chroma, {
    sharps: note.alt > 0,
    pitchClass: note.midi === null
  });
};
function enharmonic(noteName, destName) {
  const src = get(noteName);
  if (src.empty) {
    return "";
  }
  const dest = get(
    destName || (0,_tonaljs_midi__WEBPACK_IMPORTED_MODULE_1__.midiToNoteName)(src.midi || src.chroma, {
      sharps: src.alt < 0,
      pitchClass: true
    })
  );
  if (dest.empty || dest.chroma !== src.chroma) {
    return "";
  }
  if (src.oct === void 0) {
    return dest.pc;
  }
  const srcChroma = src.chroma - src.alt;
  const destChroma = dest.chroma - dest.alt;
  const destOctOffset = srcChroma > 11 || destChroma < 0 ? -1 : srcChroma < 0 || destChroma > 11 ? 1 : 0;
  const destOct = src.oct + destOctOffset;
  return dest.pc + destOct;
}
var note_default = {
  names,
  get,
  name,
  pitchClass,
  accidentals,
  octave,
  midi,
  ascending,
  descending,
  sortedNames,
  sortedUniqNames,
  fromMidi,
  fromMidiSharps,
  freq,
  fromFreq,
  fromFreqSharps,
  chroma,
  transpose,
  tr,
  transposeBy,
  trBy,
  transposeFrom,
  trFrom,
  transposeFifths,
  trFifths,
  simplify,
  enharmonic
};

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@tonaljs/pcset/dist/index.mjs":
/*!****************************************************!*\
  !*** ./node_modules/@tonaljs/pcset/dist/index.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmptyPcset": () => (/* binding */ EmptyPcset),
/* harmony export */   "chromaToIntervals": () => (/* binding */ chromaToIntervals),
/* harmony export */   "chromas": () => (/* binding */ chromas),
/* harmony export */   "default": () => (/* binding */ pcset_default),
/* harmony export */   "filter": () => (/* binding */ filter),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "includes": () => (/* binding */ includes),
/* harmony export */   "isEqual": () => (/* binding */ isEqual),
/* harmony export */   "isNoteIncludedIn": () => (/* binding */ isNoteIncludedIn),
/* harmony export */   "isSubsetOf": () => (/* binding */ isSubsetOf),
/* harmony export */   "isSupersetOf": () => (/* binding */ isSupersetOf),
/* harmony export */   "modes": () => (/* binding */ modes),
/* harmony export */   "pcset": () => (/* binding */ pcset)
/* harmony export */ });
/* harmony import */ var _tonaljs_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tonaljs/collection */ "./node_modules/@tonaljs/collection/dist/index.mjs");
/* harmony import */ var _tonaljs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tonaljs/core */ "./node_modules/@tonaljs/core/dist/index.mjs");
// index.ts


var EmptyPcset = {
  empty: true,
  name: "",
  setNum: 0,
  chroma: "000000000000",
  normalized: "000000000000",
  intervals: []
};
var setNumToChroma = (num2) => Number(num2).toString(2);
var chromaToNumber = (chroma2) => parseInt(chroma2, 2);
var REGEX = /^[01]{12}$/;
function isChroma(set) {
  return REGEX.test(set);
}
var isPcsetNum = (set) => typeof set === "number" && set >= 0 && set <= 4095;
var isPcset = (set) => set && isChroma(set.chroma);
var cache = { [EmptyPcset.chroma]: EmptyPcset };
function get(src) {
  const chroma2 = isChroma(src) ? src : isPcsetNum(src) ? setNumToChroma(src) : Array.isArray(src) ? listToChroma(src) : isPcset(src) ? src.chroma : EmptyPcset.chroma;
  return cache[chroma2] = cache[chroma2] || chromaToPcset(chroma2);
}
var pcset = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_1__.deprecate)("Pcset.pcset", "Pcset.get", get);
var chroma = (set) => get(set).chroma;
var intervals = (set) => get(set).intervals;
var num = (set) => get(set).setNum;
var IVLS = [
  "1P",
  "2m",
  "2M",
  "3m",
  "3M",
  "4P",
  "5d",
  "5P",
  "6m",
  "6M",
  "7m",
  "7M"
];
function chromaToIntervals(chroma2) {
  const intervals2 = [];
  for (let i = 0; i < 12; i++) {
    if (chroma2.charAt(i) === "1")
      intervals2.push(IVLS[i]);
  }
  return intervals2;
}
function chromas() {
  return (0,_tonaljs_collection__WEBPACK_IMPORTED_MODULE_0__.range)(2048, 4095).map(setNumToChroma);
}
function modes(set, normalize = true) {
  const pcs = get(set);
  const binary = pcs.chroma.split("");
  return (0,_tonaljs_collection__WEBPACK_IMPORTED_MODULE_0__.compact)(
    binary.map((_, i) => {
      const r = (0,_tonaljs_collection__WEBPACK_IMPORTED_MODULE_0__.rotate)(i, binary);
      return normalize && r[0] === "0" ? null : r.join("");
    })
  );
}
function isEqual(s1, s2) {
  return get(s1).setNum === get(s2).setNum;
}
function isSubsetOf(set) {
  const s = get(set).setNum;
  return (notes) => {
    const o = get(notes).setNum;
    return s && s !== o && (o & s) === o;
  };
}
function isSupersetOf(set) {
  const s = get(set).setNum;
  return (notes) => {
    const o = get(notes).setNum;
    return s && s !== o && (o | s) === o;
  };
}
function isNoteIncludedIn(set) {
  const s = get(set);
  return (noteName) => {
    const n = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_1__.note)(noteName);
    return s && !n.empty && s.chroma.charAt(n.chroma) === "1";
  };
}
var includes = isNoteIncludedIn;
function filter(set) {
  const isIncluded = isNoteIncludedIn(set);
  return (notes) => {
    return notes.filter(isIncluded);
  };
}
var pcset_default = {
  get,
  chroma,
  num,
  intervals,
  chromas,
  isSupersetOf,
  isSubsetOf,
  isNoteIncludedIn,
  isEqual,
  filter,
  modes,
  pcset
};
function chromaRotations(chroma2) {
  const binary = chroma2.split("");
  return binary.map((_, i) => (0,_tonaljs_collection__WEBPACK_IMPORTED_MODULE_0__.rotate)(i, binary).join(""));
}
function chromaToPcset(chroma2) {
  const setNum = chromaToNumber(chroma2);
  const normalizedNum = chromaRotations(chroma2).map(chromaToNumber).filter((n) => n >= 2048).sort()[0];
  const normalized = setNumToChroma(normalizedNum);
  const intervals2 = chromaToIntervals(chroma2);
  return {
    empty: false,
    name: "",
    setNum,
    chroma: chroma2,
    normalized,
    intervals: intervals2
  };
}
function listToChroma(set) {
  if (set.length === 0) {
    return EmptyPcset.chroma;
  }
  let pitch;
  const binary = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  for (let i = 0; i < set.length; i++) {
    pitch = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_1__.note)(set[i]);
    if (pitch.empty)
      pitch = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_1__.interval)(set[i]);
    if (!pitch.empty)
      binary[pitch.chroma] = 1;
  }
  return binary.join("");
}

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@tonaljs/progression/dist/index.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/@tonaljs/progression/dist/index.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ progression_default),
/* harmony export */   "fromRomanNumerals": () => (/* binding */ fromRomanNumerals),
/* harmony export */   "toRomanNumerals": () => (/* binding */ toRomanNumerals)
/* harmony export */ });
/* harmony import */ var _tonaljs_chord__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tonaljs/chord */ "./node_modules/@tonaljs/chord/dist/index.mjs");
/* harmony import */ var _tonaljs_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tonaljs/core */ "./node_modules/@tonaljs/core/dist/index.mjs");
/* harmony import */ var _tonaljs_roman_numeral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tonaljs/roman-numeral */ "./node_modules/@tonaljs/roman-numeral/dist/index.mjs");
// index.ts



function fromRomanNumerals(tonic, chords) {
  const romanNumerals = chords.map(_tonaljs_roman_numeral__WEBPACK_IMPORTED_MODULE_2__.get);
  return romanNumerals.map(
    (rn) => (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_1__.transpose)(tonic, (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_1__.interval)(rn)) + rn.chordType
  );
}
function toRomanNumerals(tonic, chords) {
  return chords.map((chord) => {
    const [note, chordType] = (0,_tonaljs_chord__WEBPACK_IMPORTED_MODULE_0__.tokenize)(chord);
    const intervalName = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_1__.distance)(tonic, note);
    const roman = (0,_tonaljs_roman_numeral__WEBPACK_IMPORTED_MODULE_2__.get)((0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_1__.interval)(intervalName));
    return roman.name + chordType;
  });
}
var progression_default = { fromRomanNumerals, toRomanNumerals };

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@tonaljs/range/dist/index.mjs":
/*!****************************************************!*\
  !*** ./node_modules/@tonaljs/range/dist/index.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chromatic": () => (/* binding */ chromatic),
/* harmony export */   "default": () => (/* binding */ range_default),
/* harmony export */   "numeric": () => (/* binding */ numeric)
/* harmony export */ });
/* harmony import */ var _tonaljs_collection__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tonaljs/collection */ "./node_modules/@tonaljs/collection/dist/index.mjs");
/* harmony import */ var _tonaljs_midi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tonaljs/midi */ "./node_modules/@tonaljs/midi/dist/index.mjs");
// index.ts


function numeric(notes) {
  const midi = (0,_tonaljs_collection__WEBPACK_IMPORTED_MODULE_0__.compact)(notes.map(_tonaljs_midi__WEBPACK_IMPORTED_MODULE_1__.toMidi));
  if (!notes.length || midi.length !== notes.length) {
    return [];
  }
  return midi.reduce(
    (result, note) => {
      const last = result[result.length - 1];
      return result.concat((0,_tonaljs_collection__WEBPACK_IMPORTED_MODULE_0__.range)(last, note).slice(1));
    },
    [midi[0]]
  );
}
function chromatic(notes, options) {
  return numeric(notes).map((midi) => (0,_tonaljs_midi__WEBPACK_IMPORTED_MODULE_1__.midiToNoteName)(midi, options));
}
var range_default = { numeric, chromatic };

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@tonaljs/roman-numeral/dist/index.mjs":
/*!************************************************************!*\
  !*** ./node_modules/@tonaljs/roman-numeral/dist/index.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ roman_numeral_default),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "names": () => (/* binding */ names),
/* harmony export */   "tokenize": () => (/* binding */ tokenize)
/* harmony export */ });
/* harmony import */ var _tonaljs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tonaljs/core */ "./node_modules/@tonaljs/core/dist/index.mjs");
// index.ts

var NoRomanNumeral = { empty: true, name: "", chordType: "" };
var cache = {};
function get(src) {
  return typeof src === "string" ? cache[src] || (cache[src] = parse(src)) : typeof src === "number" ? get(NAMES[src] || "") : (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.isPitch)(src) ? fromPitch(src) : (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.isNamed)(src) ? get(src.name) : NoRomanNumeral;
}
var romanNumeral = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.deprecate)(
  "RomanNumeral.romanNumeral",
  "RomanNumeral.get",
  get
);
function names(major = true) {
  return (major ? NAMES : NAMES_MINOR).slice();
}
function fromPitch(pitch) {
  return get((0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.altToAcc)(pitch.alt) + NAMES[pitch.step]);
}
var REGEX = /^(#{1,}|b{1,}|x{1,}|)(IV|I{1,3}|VI{0,2}|iv|i{1,3}|vi{0,2})([^IViv]*)$/;
function tokenize(str) {
  return REGEX.exec(str) || ["", "", "", ""];
}
var ROMANS = "I II III IV V VI VII";
var NAMES = ROMANS.split(" ");
var NAMES_MINOR = ROMANS.toLowerCase().split(" ");
function parse(src) {
  const [name, acc, roman, chordType] = tokenize(src);
  if (!roman) {
    return NoRomanNumeral;
  }
  const upperRoman = roman.toUpperCase();
  const step = NAMES.indexOf(upperRoman);
  const alt = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.accToAlt)(acc);
  const dir = 1;
  return {
    empty: false,
    name,
    roman,
    interval: (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.interval)({ step, alt, dir }).name,
    acc,
    chordType,
    alt,
    step,
    major: roman === upperRoman,
    oct: 0,
    dir
  };
}
var roman_numeral_default = {
  names,
  get,
  romanNumeral
};

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@tonaljs/scale-type/dist/index.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/@tonaljs/scale-type/dist/index.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NoScaleType": () => (/* binding */ NoScaleType),
/* harmony export */   "add": () => (/* binding */ add),
/* harmony export */   "addAlias": () => (/* binding */ addAlias),
/* harmony export */   "all": () => (/* binding */ all),
/* harmony export */   "default": () => (/* binding */ scale_type_default),
/* harmony export */   "entries": () => (/* binding */ entries),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "keys": () => (/* binding */ keys),
/* harmony export */   "names": () => (/* binding */ names),
/* harmony export */   "removeAll": () => (/* binding */ removeAll),
/* harmony export */   "scaleType": () => (/* binding */ scaleType)
/* harmony export */ });
/* harmony import */ var _tonaljs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tonaljs/core */ "./node_modules/@tonaljs/core/dist/index.mjs");
/* harmony import */ var _tonaljs_pcset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tonaljs/pcset */ "./node_modules/@tonaljs/pcset/dist/index.mjs");
// index.ts



// data.ts
var SCALES = [
  ["1P 2M 3M 5P 6M", "major pentatonic", "pentatonic"],
  ["1P 3M 4P 5P 7M", "ionian pentatonic"],
  ["1P 3M 4P 5P 7m", "mixolydian pentatonic", "indian"],
  ["1P 2M 4P 5P 6M", "ritusen"],
  ["1P 2M 4P 5P 7m", "egyptian"],
  ["1P 3M 4P 5d 7m", "neopolitan major pentatonic"],
  ["1P 3m 4P 5P 6m", "vietnamese 1"],
  ["1P 2m 3m 5P 6m", "pelog"],
  ["1P 2m 4P 5P 6m", "kumoijoshi"],
  ["1P 2M 3m 5P 6m", "hirajoshi"],
  ["1P 2m 4P 5d 7m", "iwato"],
  ["1P 2m 4P 5P 7m", "in-sen"],
  ["1P 3M 4A 5P 7M", "lydian pentatonic", "chinese"],
  ["1P 3m 4P 6m 7m", "malkos raga"],
  ["1P 3m 4P 5d 7m", "locrian pentatonic", "minor seven flat five pentatonic"],
  ["1P 3m 4P 5P 7m", "minor pentatonic", "vietnamese 2"],
  ["1P 3m 4P 5P 6M", "minor six pentatonic"],
  ["1P 2M 3m 5P 6M", "flat three pentatonic", "kumoi"],
  ["1P 2M 3M 5P 6m", "flat six pentatonic"],
  ["1P 2m 3M 5P 6M", "scriabin"],
  ["1P 3M 5d 6m 7m", "whole tone pentatonic"],
  ["1P 3M 4A 5A 7M", "lydian #5P pentatonic"],
  ["1P 3M 4A 5P 7m", "lydian dominant pentatonic"],
  ["1P 3m 4P 5P 7M", "minor #7M pentatonic"],
  ["1P 3m 4d 5d 7m", "super locrian pentatonic"],
  ["1P 2M 3m 4P 5P 7M", "minor hexatonic"],
  ["1P 2A 3M 5P 5A 7M", "augmented"],
  ["1P 2M 3m 3M 5P 6M", "major blues"],
  ["1P 2M 4P 5P 6M 7m", "piongio"],
  ["1P 2m 3M 4A 6M 7m", "prometheus neopolitan"],
  ["1P 2M 3M 4A 6M 7m", "prometheus"],
  ["1P 2m 3M 5d 6m 7m", "mystery #1"],
  ["1P 2m 3M 4P 5A 6M", "six tone symmetric"],
  ["1P 2M 3M 4A 5A 6A", "whole tone", "messiaen's mode #1"],
  ["1P 2m 4P 4A 5P 7M", "messiaen's mode #5"],
  ["1P 3m 4P 5d 5P 7m", "minor blues", "blues"],
  ["1P 2M 3M 4P 5d 6m 7m", "locrian major", "arabian"],
  ["1P 2m 3M 4A 5P 6m 7M", "double harmonic lydian"],
  ["1P 2M 3m 4P 5P 6m 7M", "harmonic minor"],
  [
    "1P 2m 2A 3M 4A 6m 7m",
    "altered",
    "super locrian",
    "diminished whole tone",
    "pomeroy"
  ],
  ["1P 2M 3m 4P 5d 6m 7m", "locrian #2", "half-diminished", "aeolian b5"],
  [
    "1P 2M 3M 4P 5P 6m 7m",
    "mixolydian b6",
    "melodic minor fifth mode",
    "hindu"
  ],
  ["1P 2M 3M 4A 5P 6M 7m", "lydian dominant", "lydian b7", "overtone"],
  ["1P 2M 3M 4A 5P 6M 7M", "lydian"],
  ["1P 2M 3M 4A 5A 6M 7M", "lydian augmented"],
  [
    "1P 2m 3m 4P 5P 6M 7m",
    "dorian b2",
    "phrygian #6",
    "melodic minor second mode"
  ],
  ["1P 2M 3m 4P 5P 6M 7M", "melodic minor"],
  ["1P 2m 3m 4P 5d 6m 7m", "locrian"],
  [
    "1P 2m 3m 4d 5d 6m 7d",
    "ultralocrian",
    "superlocrian bb7",
    "superlocrian diminished"
  ],
  ["1P 2m 3m 4P 5d 6M 7m", "locrian 6", "locrian natural 6", "locrian sharp 6"],
  ["1P 2A 3M 4P 5P 5A 7M", "augmented heptatonic"],
  [
    "1P 2M 3m 4A 5P 6M 7m",
    "dorian #4",
    "ukrainian dorian",
    "romanian minor",
    "altered dorian"
  ],
  ["1P 2M 3m 4A 5P 6M 7M", "lydian diminished"],
  ["1P 2m 3m 4P 5P 6m 7m", "phrygian"],
  ["1P 2M 3M 4A 5A 7m 7M", "leading whole tone"],
  ["1P 2M 3M 4A 5P 6m 7m", "lydian minor"],
  ["1P 2m 3M 4P 5P 6m 7m", "phrygian dominant", "spanish", "phrygian major"],
  ["1P 2m 3m 4P 5P 6m 7M", "balinese"],
  ["1P 2m 3m 4P 5P 6M 7M", "neopolitan major"],
  ["1P 2M 3m 4P 5P 6m 7m", "aeolian", "minor"],
  ["1P 2M 3M 4P 5P 6m 7M", "harmonic major"],
  ["1P 2m 3M 4P 5P 6m 7M", "double harmonic major", "gypsy"],
  ["1P 2M 3m 4P 5P 6M 7m", "dorian"],
  ["1P 2M 3m 4A 5P 6m 7M", "hungarian minor"],
  ["1P 2A 3M 4A 5P 6M 7m", "hungarian major"],
  ["1P 2m 3M 4P 5d 6M 7m", "oriental"],
  ["1P 2m 3m 3M 4A 5P 7m", "flamenco"],
  ["1P 2m 3m 4A 5P 6m 7M", "todi raga"],
  ["1P 2M 3M 4P 5P 6M 7m", "mixolydian", "dominant"],
  ["1P 2m 3M 4P 5d 6m 7M", "persian"],
  ["1P 2M 3M 4P 5P 6M 7M", "major", "ionian"],
  ["1P 2m 3M 5d 6m 7m 7M", "enigmatic"],
  [
    "1P 2M 3M 4P 5A 6M 7M",
    "major augmented",
    "major #5",
    "ionian augmented",
    "ionian #5"
  ],
  ["1P 2A 3M 4A 5P 6M 7M", "lydian #9"],
  ["1P 2m 2M 4P 4A 5P 6m 7M", "messiaen's mode #4"],
  ["1P 2m 3M 4P 4A 5P 6m 7M", "purvi raga"],
  ["1P 2m 3m 3M 4P 5P 6m 7m", "spanish heptatonic"],
  ["1P 2M 3M 4P 5P 6M 7m 7M", "bebop"],
  ["1P 2M 3m 3M 4P 5P 6M 7m", "bebop minor"],
  ["1P 2M 3M 4P 5P 5A 6M 7M", "bebop major"],
  ["1P 2m 3m 4P 5d 5P 6m 7m", "bebop locrian"],
  ["1P 2M 3m 4P 5P 6m 7m 7M", "minor bebop"],
  ["1P 2M 3m 4P 5d 6m 6M 7M", "diminished", "whole-half diminished"],
  ["1P 2M 3M 4P 5d 5P 6M 7M", "ichikosucho"],
  ["1P 2M 3m 4P 5P 6m 6M 7M", "minor six diminished"],
  [
    "1P 2m 3m 3M 4A 5P 6M 7m",
    "half-whole diminished",
    "dominant diminished",
    "messiaen's mode #2"
  ],
  ["1P 3m 3M 4P 5P 6M 7m 7M", "kafi raga"],
  ["1P 2M 3M 4P 4A 5A 6A 7M", "messiaen's mode #6"],
  ["1P 2M 3m 3M 4P 5d 5P 6M 7m", "composite blues"],
  ["1P 2M 3m 3M 4A 5P 6m 7m 7M", "messiaen's mode #3"],
  ["1P 2m 2M 3m 4P 4A 5P 6m 6M 7M", "messiaen's mode #7"],
  ["1P 2m 2M 3m 3M 4P 5d 5P 6m 6M 7m 7M", "chromatic"]
];
var data_default = SCALES;

// index.ts
var NoScaleType = {
  ..._tonaljs_pcset__WEBPACK_IMPORTED_MODULE_1__.EmptyPcset,
  intervals: [],
  aliases: []
};
var dictionary = [];
var index = {};
function names() {
  return dictionary.map((scale) => scale.name);
}
function get(type) {
  return index[type] || NoScaleType;
}
var scaleType = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.deprecate)(
  "ScaleDictionary.scaleType",
  "ScaleType.get",
  get
);
function all() {
  return dictionary.slice();
}
var entries = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_0__.deprecate)(
  "ScaleDictionary.entries",
  "ScaleType.all",
  all
);
function keys() {
  return Object.keys(index);
}
function removeAll() {
  dictionary = [];
  index = {};
}
function add(intervals, name, aliases = []) {
  const scale = { ...(0,_tonaljs_pcset__WEBPACK_IMPORTED_MODULE_1__.get)(intervals), name, intervals, aliases };
  dictionary.push(scale);
  index[scale.name] = scale;
  index[scale.setNum] = scale;
  index[scale.chroma] = scale;
  scale.aliases.forEach((alias) => addAlias(scale, alias));
  return scale;
}
function addAlias(scale, alias) {
  index[alias] = scale;
}
data_default.forEach(
  ([ivls, name, ...aliases]) => add(ivls.split(" "), name, aliases)
);
var scale_type_default = {
  names,
  get,
  all,
  add,
  removeAll,
  keys,
  entries,
  scaleType
};

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@tonaljs/scale/dist/index.mjs":
/*!****************************************************!*\
  !*** ./node_modules/@tonaljs/scale/dist/index.mjs ***!
  \****************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ scale_default),
/* harmony export */   "extended": () => (/* binding */ extended),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "modeNames": () => (/* binding */ modeNames),
/* harmony export */   "names": () => (/* binding */ names),
/* harmony export */   "rangeOf": () => (/* binding */ rangeOf),
/* harmony export */   "reduced": () => (/* binding */ reduced),
/* harmony export */   "scale": () => (/* binding */ scale),
/* harmony export */   "scaleChords": () => (/* binding */ scaleChords),
/* harmony export */   "scaleNotes": () => (/* binding */ scaleNotes),
/* harmony export */   "tokenize": () => (/* binding */ tokenize)
/* harmony export */ });
/* harmony import */ var _tonaljs_chord_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tonaljs/chord-type */ "./node_modules/@tonaljs/chord-type/dist/index.mjs");
/* harmony import */ var _tonaljs_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tonaljs/collection */ "./node_modules/@tonaljs/collection/dist/index.mjs");
/* harmony import */ var _tonaljs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tonaljs/core */ "./node_modules/@tonaljs/core/dist/index.mjs");
/* harmony import */ var _tonaljs_note__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tonaljs/note */ "./node_modules/@tonaljs/note/dist/index.mjs");
/* harmony import */ var _tonaljs_pcset__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tonaljs/pcset */ "./node_modules/@tonaljs/pcset/dist/index.mjs");
/* harmony import */ var _tonaljs_scale_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tonaljs/scale-type */ "./node_modules/@tonaljs/scale-type/dist/index.mjs");
// index.ts






var NoScale = {
  empty: true,
  name: "",
  type: "",
  tonic: null,
  setNum: NaN,
  chroma: "",
  normalized: "",
  aliases: [],
  notes: [],
  intervals: []
};
function tokenize(name) {
  if (typeof name !== "string") {
    return ["", ""];
  }
  const i = name.indexOf(" ");
  const tonic = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_2__.note)(name.substring(0, i));
  if (tonic.empty) {
    const n = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_2__.note)(name);
    return n.empty ? ["", name] : [n.name, ""];
  }
  const type = name.substring(tonic.name.length + 1);
  return [tonic.name, type.length ? type : ""];
}
var names = _tonaljs_scale_type__WEBPACK_IMPORTED_MODULE_5__.names;
function get(src) {
  const tokens = Array.isArray(src) ? src : tokenize(src);
  const tonic = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_2__.note)(tokens[0]).name;
  const st = (0,_tonaljs_scale_type__WEBPACK_IMPORTED_MODULE_5__.get)(tokens[1]);
  if (st.empty) {
    return NoScale;
  }
  const type = st.name;
  const notes = tonic ? st.intervals.map((i) => (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_2__.transpose)(tonic, i)) : [];
  const name = tonic ? tonic + " " + type : type;
  return { ...st, name, type, tonic, notes };
}
var scale = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_2__.deprecate)("Scale.scale", "Scale.get", get);
function scaleChords(name) {
  const s = get(name);
  const inScale = (0,_tonaljs_pcset__WEBPACK_IMPORTED_MODULE_4__.isSubsetOf)(s.chroma);
  return (0,_tonaljs_chord_type__WEBPACK_IMPORTED_MODULE_0__.all)().filter((chord) => inScale(chord.chroma)).map((chord) => chord.aliases[0]);
}
function extended(name) {
  const s = get(name);
  const isSuperset = (0,_tonaljs_pcset__WEBPACK_IMPORTED_MODULE_4__.isSupersetOf)(s.chroma);
  return (0,_tonaljs_scale_type__WEBPACK_IMPORTED_MODULE_5__.all)().filter((scale2) => isSuperset(scale2.chroma)).map((scale2) => scale2.name);
}
function reduced(name) {
  const isSubset = (0,_tonaljs_pcset__WEBPACK_IMPORTED_MODULE_4__.isSubsetOf)(get(name).chroma);
  return (0,_tonaljs_scale_type__WEBPACK_IMPORTED_MODULE_5__.all)().filter((scale2) => isSubset(scale2.chroma)).map((scale2) => scale2.name);
}
function scaleNotes(notes) {
  const pcset = notes.map((n) => (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_2__.note)(n).pc).filter((x) => x);
  const tonic = pcset[0];
  const scale2 = (0,_tonaljs_note__WEBPACK_IMPORTED_MODULE_3__.sortedUniqNames)(pcset);
  return (0,_tonaljs_collection__WEBPACK_IMPORTED_MODULE_1__.rotate)(scale2.indexOf(tonic), scale2);
}
function modeNames(name) {
  const s = get(name);
  if (s.empty) {
    return [];
  }
  const tonics = s.tonic ? s.notes : s.intervals;
  return (0,_tonaljs_pcset__WEBPACK_IMPORTED_MODULE_4__.modes)(s.chroma).map((chroma, i) => {
    const modeName = get(chroma).name;
    return modeName ? [tonics[i], modeName] : ["", ""];
  }).filter((x) => x[0]);
}
function getNoteNameOf(scale2) {
  const names2 = Array.isArray(scale2) ? scaleNotes(scale2) : get(scale2).notes;
  const chromas = names2.map((name) => (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_2__.note)(name).chroma);
  return (noteOrMidi) => {
    const currNote = typeof noteOrMidi === "number" ? (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_2__.note)((0,_tonaljs_note__WEBPACK_IMPORTED_MODULE_3__.fromMidi)(noteOrMidi)) : (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_2__.note)(noteOrMidi);
    const height = currNote.height;
    if (height === void 0)
      return void 0;
    const chroma = height % 12;
    const position = chromas.indexOf(chroma);
    if (position === -1)
      return void 0;
    return (0,_tonaljs_note__WEBPACK_IMPORTED_MODULE_3__.enharmonic)(currNote.name, names2[position]);
  };
}
function rangeOf(scale2) {
  const getName = getNoteNameOf(scale2);
  return (fromNote, toNote) => {
    const from = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_2__.note)(fromNote).height;
    const to = (0,_tonaljs_core__WEBPACK_IMPORTED_MODULE_2__.note)(toNote).height;
    if (from === void 0 || to === void 0)
      return [];
    return (0,_tonaljs_collection__WEBPACK_IMPORTED_MODULE_1__.range)(from, to).map(getName).filter((x) => x);
  };
}
var scale_default = {
  get,
  names,
  extended,
  modeNames,
  reduced,
  scaleChords,
  scaleNotes,
  tokenize,
  rangeOf,
  scale
};

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/@tonaljs/time-signature/dist/index.mjs":
/*!*************************************************************!*\
  !*** ./node_modules/@tonaljs/time-signature/dist/index.mjs ***!
  \*************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ time_signature_default),
/* harmony export */   "get": () => (/* binding */ get),
/* harmony export */   "names": () => (/* binding */ names),
/* harmony export */   "parse": () => (/* binding */ parse)
/* harmony export */ });
// index.ts
var NONE = {
  empty: true,
  name: "",
  upper: void 0,
  lower: void 0,
  type: void 0,
  additive: []
};
var NAMES = ["4/4", "3/4", "2/4", "2/2", "12/8", "9/8", "6/8", "3/8"];
function names() {
  return NAMES.slice();
}
var REGEX = /^(\d*\d(?:\+\d)*)\/(\d+)$/;
var CACHE = /* @__PURE__ */ new Map();
function get(literal) {
  const stringifiedLiteral = JSON.stringify(literal);
  const cached = CACHE.get(stringifiedLiteral);
  if (cached) {
    return cached;
  }
  const ts = build(parse(literal));
  CACHE.set(stringifiedLiteral, ts);
  return ts;
}
function parse(literal) {
  if (typeof literal === "string") {
    const [_, up2, low] = REGEX.exec(literal) || [];
    return parse([up2, low]);
  }
  const [up, down] = literal;
  const denominator = +down;
  if (typeof up === "number") {
    return [up, denominator];
  }
  const list = up.split("+").map((n) => +n);
  return list.length === 1 ? [list[0], denominator] : [list, denominator];
}
var time_signature_default = { names, parse, get };
var isPowerOfTwo = (x) => Math.log(x) / Math.log(2) % 1 === 0;
function build([up, down]) {
  const upper = Array.isArray(up) ? up.reduce((a, b) => a + b, 0) : up;
  const lower = down;
  if (upper === 0 || lower === 0) {
    return NONE;
  }
  const name = Array.isArray(up) ? `${up.join("+")}/${down}` : `${up}/${down}`;
  const additive = Array.isArray(up) ? up : [];
  const type = lower === 4 || lower === 2 ? "simple" : lower === 8 && upper % 3 === 0 ? "compound" : isPowerOfTwo(lower) ? "irregular" : "irrational";
  return {
    empty: false,
    name,
    type,
    upper,
    lower,
    additive
  };
}

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./node_modules/tonal/dist/index.mjs":
/*!*******************************************!*\
  !*** ./node_modules/tonal/dist/index.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "accToAlt": () => (/* reexport safe */ _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__.accToAlt),
/* harmony export */   "altToAcc": () => (/* reexport safe */ _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__.altToAcc),
/* harmony export */   "coordToInterval": () => (/* reexport safe */ _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__.coordToInterval),
/* harmony export */   "coordToNote": () => (/* reexport safe */ _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__.coordToNote),
/* harmony export */   "decode": () => (/* reexport safe */ _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__.decode),
/* harmony export */   "deprecate": () => (/* reexport safe */ _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__.deprecate),
/* harmony export */   "distance": () => (/* reexport safe */ _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__.distance),
/* harmony export */   "encode": () => (/* reexport safe */ _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__.encode),
/* harmony export */   "fillStr": () => (/* reexport safe */ _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__.fillStr),
/* harmony export */   "interval": () => (/* reexport safe */ _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__.interval),
/* harmony export */   "isNamed": () => (/* reexport safe */ _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__.isNamed),
/* harmony export */   "isPitch": () => (/* reexport safe */ _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__.isPitch),
/* harmony export */   "note": () => (/* reexport safe */ _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__.note),
/* harmony export */   "stepToLetter": () => (/* reexport safe */ _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__.stepToLetter),
/* harmony export */   "tokenizeInterval": () => (/* reexport safe */ _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__.tokenizeInterval),
/* harmony export */   "tokenizeNote": () => (/* reexport safe */ _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__.tokenizeNote),
/* harmony export */   "transpose": () => (/* reexport safe */ _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__.transpose),
/* harmony export */   "AbcNotation": () => (/* reexport safe */ _tonaljs_abc_notation__WEBPACK_IMPORTED_MODULE_0__.default),
/* harmony export */   "Array": () => (/* reexport module object */ _tonaljs_array__WEBPACK_IMPORTED_MODULE_1__),
/* harmony export */   "Chord": () => (/* reexport safe */ _tonaljs_chord__WEBPACK_IMPORTED_MODULE_2__.default),
/* harmony export */   "ChordDictionary": () => (/* binding */ ChordDictionary),
/* harmony export */   "ChordType": () => (/* reexport safe */ _tonaljs_chord_type__WEBPACK_IMPORTED_MODULE_3__.default),
/* harmony export */   "Collection": () => (/* reexport safe */ _tonaljs_collection__WEBPACK_IMPORTED_MODULE_4__.default),
/* harmony export */   "Core": () => (/* reexport module object */ _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__),
/* harmony export */   "DurationValue": () => (/* reexport safe */ _tonaljs_duration_value__WEBPACK_IMPORTED_MODULE_6__.default),
/* harmony export */   "Interval": () => (/* reexport safe */ _tonaljs_interval__WEBPACK_IMPORTED_MODULE_7__.default),
/* harmony export */   "Key": () => (/* reexport safe */ _tonaljs_key__WEBPACK_IMPORTED_MODULE_8__.default),
/* harmony export */   "Midi": () => (/* reexport safe */ _tonaljs_midi__WEBPACK_IMPORTED_MODULE_9__.default),
/* harmony export */   "Mode": () => (/* reexport safe */ _tonaljs_mode__WEBPACK_IMPORTED_MODULE_10__.default),
/* harmony export */   "Note": () => (/* reexport safe */ _tonaljs_note__WEBPACK_IMPORTED_MODULE_11__.default),
/* harmony export */   "PcSet": () => (/* binding */ PcSet),
/* harmony export */   "Pcset": () => (/* reexport safe */ _tonaljs_pcset__WEBPACK_IMPORTED_MODULE_12__.default),
/* harmony export */   "Progression": () => (/* reexport safe */ _tonaljs_progression__WEBPACK_IMPORTED_MODULE_13__.default),
/* harmony export */   "Range": () => (/* reexport safe */ _tonaljs_range__WEBPACK_IMPORTED_MODULE_14__.default),
/* harmony export */   "RomanNumeral": () => (/* reexport safe */ _tonaljs_roman_numeral__WEBPACK_IMPORTED_MODULE_15__.default),
/* harmony export */   "Scale": () => (/* reexport safe */ _tonaljs_scale__WEBPACK_IMPORTED_MODULE_16__.default),
/* harmony export */   "ScaleDictionary": () => (/* binding */ ScaleDictionary),
/* harmony export */   "ScaleType": () => (/* reexport safe */ _tonaljs_scale_type__WEBPACK_IMPORTED_MODULE_17__.default),
/* harmony export */   "TimeSignature": () => (/* reexport safe */ _tonaljs_time_signature__WEBPACK_IMPORTED_MODULE_18__.default),
/* harmony export */   "Tonal": () => (/* binding */ Tonal)
/* harmony export */ });
/* harmony import */ var _tonaljs_abc_notation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tonaljs/abc-notation */ "./node_modules/@tonaljs/abc-notation/dist/index.mjs");
/* harmony import */ var _tonaljs_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tonaljs/array */ "./node_modules/@tonaljs/array/dist/index.mjs");
/* harmony import */ var _tonaljs_chord__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tonaljs/chord */ "./node_modules/@tonaljs/chord/dist/index.mjs");
/* harmony import */ var _tonaljs_chord_type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tonaljs/chord-type */ "./node_modules/@tonaljs/chord-type/dist/index.mjs");
/* harmony import */ var _tonaljs_collection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tonaljs/collection */ "./node_modules/@tonaljs/collection/dist/index.mjs");
/* harmony import */ var _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tonaljs/core */ "./node_modules/@tonaljs/core/dist/index.mjs");
/* harmony import */ var _tonaljs_duration_value__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tonaljs/duration-value */ "./node_modules/@tonaljs/duration-value/dist/index.mjs");
/* harmony import */ var _tonaljs_interval__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tonaljs/interval */ "./node_modules/@tonaljs/interval/dist/index.mjs");
/* harmony import */ var _tonaljs_key__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tonaljs/key */ "./node_modules/@tonaljs/key/dist/index.mjs");
/* harmony import */ var _tonaljs_midi__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tonaljs/midi */ "./node_modules/@tonaljs/midi/dist/index.mjs");
/* harmony import */ var _tonaljs_mode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @tonaljs/mode */ "./node_modules/@tonaljs/mode/dist/index.mjs");
/* harmony import */ var _tonaljs_note__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @tonaljs/note */ "./node_modules/@tonaljs/note/dist/index.mjs");
/* harmony import */ var _tonaljs_pcset__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @tonaljs/pcset */ "./node_modules/@tonaljs/pcset/dist/index.mjs");
/* harmony import */ var _tonaljs_progression__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @tonaljs/progression */ "./node_modules/@tonaljs/progression/dist/index.mjs");
/* harmony import */ var _tonaljs_range__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @tonaljs/range */ "./node_modules/@tonaljs/range/dist/index.mjs");
/* harmony import */ var _tonaljs_roman_numeral__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @tonaljs/roman-numeral */ "./node_modules/@tonaljs/roman-numeral/dist/index.mjs");
/* harmony import */ var _tonaljs_scale__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @tonaljs/scale */ "./node_modules/@tonaljs/scale/dist/index.mjs");
/* harmony import */ var _tonaljs_scale_type__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @tonaljs/scale-type */ "./node_modules/@tonaljs/scale-type/dist/index.mjs");
/* harmony import */ var _tonaljs_time_signature__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @tonaljs/time-signature */ "./node_modules/@tonaljs/time-signature/dist/index.mjs");
// index.ts




















var Tonal = _tonaljs_core__WEBPACK_IMPORTED_MODULE_5__;
var PcSet = _tonaljs_pcset__WEBPACK_IMPORTED_MODULE_12__.default;
var ChordDictionary = _tonaljs_chord_type__WEBPACK_IMPORTED_MODULE_3__.default;
var ScaleDictionary = _tonaljs_scale_type__WEBPACK_IMPORTED_MODULE_17__.default;

//# sourceMappingURL=index.mjs.map

/***/ }),

/***/ "./src/FunctionKernel.ts":
/*!*******************************!*\
  !*** ./src/FunctionKernel.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionKernel": () => (/* binding */ FunctionKernel)
/* harmony export */ });
/* harmony import */ var _FunctionSequencer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FunctionSequencer */ "./src/FunctionSequencer.ts");
/* harmony import */ var _RemoteUI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RemoteUI */ "./src/RemoteUI.ts");
/* harmony import */ var _RemoteUIController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./RemoteUIController */ "./src/RemoteUIController.ts");
/* harmony import */ var tonal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tonal */ "./node_modules/tonal/dist/index.mjs");




class FunctionKernel {
    constructor(processor) {
        this.remoteUI = new _RemoteUI__WEBPACK_IMPORTED_MODULE_1__.RemoteUI(this);
        this.api = new _FunctionSequencer__WEBPACK_IMPORTED_MODULE_0__.FunctionAPI(this.remoteUI, this);
        this.transport = {
            tempo: 120,
            timeSigDenominator: 4,
            timeSigNumerator: 4,
            playing: false,
            currentBar: 0,
            currentBarStarted: 0
        };
        this.registerParametersCalled = false;
        this.parameterIds = [];
        this.processor = processor;
        this.additionalState = {};
        this.additionalStateDirty = false;
        this.cachedSetState = [];
        this.uiController = new _RemoteUIController__WEBPACK_IMPORTED_MODULE_2__.RemoteUIController(this, processor.port);
    }
    onTick(ticks) {
        if (!this.function) {
            return;
        }
        try {
            if (this.function.onTick) {
                this.function.onTick(ticks);
            }
            this.flush();
        }
        catch (e) {
            this.processor.port.postMessage({ source: "functionSeq", action: "error", error: e.toString(), stack: e.stack });
            this.function = undefined;
        }
    }
    /**
     * Messages from main thread appear here.
     * @param {MessageEvent} message
     */
    async onMessage(message) {
        if (message.data && message.data.action == "function") {
            try {
                this.uiController.register(undefined);
                this.registerParametersCalled = false;
                this.function = new Function('api', 'ui', 'tonal', message.data.code)(this.api, this.remoteUI, tonal__WEBPACK_IMPORTED_MODULE_3__);
                if (!!this.function.init) {
                    this.function.init();
                }
                if (this.noteList && this.function.onCustomNoteList) {
                    this.function.onCustomNoteList(this.noteList);
                }
                if (!this.registerParametersCalled) {
                    // may have to not clear the cached set state or something like that. not sure.
                    this.registerParameters([]);
                }
            }
            catch (e) {
                this.error(e);
            }
            this.flush();
        }
        else if (message.data && message.data.action == "noteList") {
            this.noteList = message.data.noteList;
            if (this.function && this.function.onCustomNoteList) {
                this.function.onCustomNoteList(message.data.noteList);
            }
            this.flush();
        }
        else if (message.data && message.data.action == "additionalState") {
            this.additionalState = message.data.state;
            this.onStateChange();
        }
        else {
            // @ts-ignore
            super._onMessage(message);
        }
    }
    onTransport(transportData) {
        try {
            if (this.transport && this.function) {
                if (this.transport.playing && !transportData.playing) {
                    if (this.function.onTransportStop) {
                        this.function.onTransportStop(transportData);
                    }
                }
                else if (!this.transport.playing && transportData.playing) {
                    if (this.function.onTransportStart) {
                        this.function.onTransportStart(transportData);
                    }
                }
                this.flush();
                this.transport = transportData;
            }
        }
        catch (e) {
            this.error(e);
        }
    }
    onMidi(event) {
        if (this.function && this.function.onMidi) {
            try {
                this.function.onMidi(event.bytes);
                this.flush();
            }
            catch (e) {
                this.error(e);
            }
        }
    }
    onAction(name) {
        if (this.function && this.function.onAction) {
            try {
                this.function.onAction(name);
                this.flush();
            }
            catch (e) {
                this.error(e);
            }
        }
    }
    onStateChange() {
        if (this.function && this.function.onStateChange) {
            try {
                this.function.onStateChange({ ...this.additionalState });
                this.flush();
            }
            catch (e) {
                this.error(e);
            }
        }
    }
    registerParameters(parameters) {
        let map = {};
        this.parameterIds = [];
        for (let p of parameters) {
            this.validateParameter(p);
            map[p.id] = p.config;
            this.parameterIds.push(p.id);
        }
        this.processor.port.postMessage({ source: "functionSeq", action: "newParams", params: parameters });
        this.processor.updateParameters(map);
        for (let state of this.cachedSetState) {
            this.processor._setParameterValues(state, false);
        }
        this.cachedSetState = [];
        this.registerParametersCalled = true;
    }
    validateParameter(p) {
        if (p.id === undefined || p.config === undefined) {
            throw new Error(`Invalid parameter ${p}: must have id and config defined`);
        }
        if (p.id.length == 0) {
            throw new Error("Invalid parameter: id must be string and not blank");
        }
        if (['float', 'int', 'boolean', 'choice'].findIndex(t => t == p.config.type) == -1) {
            throw new Error(`Invalid parameter type ${p.config.type}`);
        }
        const VALID_CONFIG_KEYS = ["label", "type", "defaultValue", "minValue", "maxValue", "discreteStep", "exponent", "choices", "units"];
        for (let key of Object.keys(p.config)) {
            if (VALID_CONFIG_KEYS.indexOf(key) == -1) {
                throw new Error(`Param ${p.id}: Invalid configuration key ${key}.  Valid configuration keys are ${VALID_CONFIG_KEYS.join(",")}`);
            }
        }
    }
    setAdditionalState(name, value) {
        this.additionalState[name] = value;
        this.additionalStateDirty = true;
    }
    getAdditionalState(name) {
        return this.additionalState[name];
    }
    error(e) {
        this.processor.port.postMessage({ source: "functionSeq", action: "error", error: e.toString(), stack: e.stack });
        this.function = undefined;
    }
    flush() {
        this.uiController.flush();
        if (this.additionalStateDirty) {
            this.additionalStateDirty = false;
            this.processor.port.postMessage({ source: "functionSeq", action: "additionalState", state: this.additionalState });
            this.onStateChange();
        }
    }
}


/***/ }),

/***/ "./src/FunctionSeqProcessor.ts":
/*!*************************************!*\
  !*** ./src/FunctionSeqProcessor.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MIDI": () => (/* binding */ MIDI),
/* harmony export */   "FunctionSequencerProcessor": () => (/* binding */ FunctionSequencerProcessor)
/* harmony export */ });
/* harmony import */ var _FunctionKernel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FunctionKernel */ "./src/FunctionKernel.ts");

const moduleId = "com.sequencerParty.functionSeq";
const audioWorkletGlobalScope = globalThis;
const PPQN = 96;
class MIDI {
}
MIDI.NOTE_ON = 0x90;
MIDI.NOTE_OFF = 0x80;
MIDI.CC = 0xB0;
const { registerProcessor } = audioWorkletGlobalScope;
const ModuleScope = audioWorkletGlobalScope.webAudioModules.getModuleScope(moduleId);
const { WamProcessor, } = ModuleScope;
const DynamicParameterProcessor = ModuleScope.DynamicParameterProcessor;
class FunctionSequencerProcessor extends DynamicParameterProcessor {
    constructor(options) {
        super(options);
        this.count = 0;
        this.function = new _FunctionKernel__WEBPACK_IMPORTED_MODULE_0__.FunctionKernel(this);
    }
    /**
     * Implement custom DSP here.
     * @param {number} startSample beginning of processing slice
     * @param {number} endSample end of processing slice
     * @param {Float32Array[][]} inputs
     * @param {Float32Array[][]} outputs
     */
    _process(startSample, endSample, inputs, outputs) {
        const { currentTime } = audioWorkletGlobalScope;
        if (!this.transportData) {
            return;
        }
        if (this.transportData.playing && currentTime >= this.transportData.currentBarStarted) {
            var timeElapsed = currentTime - this.transportData.currentBarStarted;
            var beatPosition = (this.transportData.currentBar * this.transportData.timeSigNumerator) + ((this.transportData.tempo / 60.0) * timeElapsed);
            var tickPosition = Math.floor(beatPosition * PPQN);
            if (this.ticks != tickPosition) {
                this.ticks = tickPosition;
                this.function.onTick(this.ticks);
            }
        }
        return;
    }
    /**
     * Messages from main thread appear here.
     * @param {MessageEvent} message
     */
    async _onMessage(message) {
        var _a, _b, _c;
        if (message.data && message.data.source == "function") {
            this.function.onMessage(message);
        }
        else if (message.data && message.data.source == "remoteUI") {
            this.function.uiController.onMessage(message);
        }
        else {
            if (message.data && message.data.request == "set/state") {
                if (!this.function.registerParametersCalled && ((_c = (_b = (_a = message.data) === null || _a === void 0 ? void 0 : _a.content) === null || _b === void 0 ? void 0 : _b.state) === null || _c === void 0 ? void 0 : _c.parameterValues)) {
                    // we queue up any setState calls until the script registers parameters, and then we send them out.
                    // otherwise we drop initial state values saved in the script
                    this.function.cachedSetState.push(message.data.content.state.parameterValues);
                }
            }
            // @ts-ignore
            super._onMessage(message);
        }
    }
    _onTransport(transportData) {
        this.transportData = transportData;
        this.function.onTransport(transportData);
    }
    _onMidi(midiData) {
        this.function.onMidi(midiData);
    }
}
try {
    registerProcessor('com.sequencerParty.functionSeq', FunctionSequencerProcessor);
}
catch (error) {
    // eslint-disable-next-line no-console
    console.warn(error);
}


/***/ }),

/***/ "./src/FunctionSequencer.ts":
/*!**********************************!*\
  !*** ./src/FunctionSequencer.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FunctionAPI": () => (/* binding */ FunctionAPI)
/* harmony export */ });
/* harmony import */ var _FunctionSeqProcessor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./FunctionSeqProcessor */ "./src/FunctionSeqProcessor.ts");
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _FunctionAPI_ui, _FunctionAPI_kernel;

const PPQN = 96;
const audioWorkletGlobalScope = globalThis;
class FunctionAPI {
    constructor(ui, kernel) {
        _FunctionAPI_ui.set(this, void 0);
        _FunctionAPI_kernel.set(this, void 0);
        __classPrivateFieldSet(this, _FunctionAPI_ui, ui, "f");
        __classPrivateFieldSet(this, _FunctionAPI_kernel, kernel, "f");
    }
    /**
     * emits a MIDI Note on message followed by a MIDI Note off message delayed by the duration
     * @param channel {number} the MIDI channel minus one, from 0-15. So to emit on channel 1, send a 0.
     * @param note {number} the MIDI note number, from 0-127
     * @param velocity {number} MIDI note on velocity, from 0-127
     * @param duration {number} the midi note duration, in seconds.
     * @param startTime {number} optionally set the starting time of the note, in relation to api.getCurrentTime()
     * */
    emitNote(channel, note, velocity, duration, startTime) {
        if (startTime === undefined) {
            startTime = audioWorkletGlobalScope.currentTime;
        }
        if (!(Number.isInteger(channel) && channel >= 0 && channel <= 15)) {
            throw new Error(`emitNote: channel value ${channel} invalid.  Must be integer value from 0-15 (ch#1-#16)`);
        }
        this.emitMidiEvent([_FunctionSeqProcessor__WEBPACK_IMPORTED_MODULE_0__.MIDI.NOTE_ON | channel, note, velocity], startTime);
        this.emitMidiEvent([_FunctionSeqProcessor__WEBPACK_IMPORTED_MODULE_0__.MIDI.NOTE_OFF | channel, note, velocity], startTime + duration);
    }
    /**
     * Emit a regular, non-sysex MIDI message up to 3 bytes in length.
     * @param bytes {number[]} a 1 to 3 array of bytes, the raw MIDI message.
     * @param eventTime {number} the time to emit the event, relative to api.getCurrentTime()
     * */
    emitMidiEvent(bytes, eventTime) {
        if (bytes.length > 3) {
            throw new Error("emitMidiEvent can only emit regular MIDI messages - use emitSysex to emit sysex messages.");
        }
        for (let i = 0; i < bytes.length; i++) {
            if (!Number.isInteger(bytes[i]) || bytes[i] < 0 || bytes[i] > 255) {
                throw new Error(`MIDI event byte at index ${i} is not an integer between 0-255, is ${bytes[i]}`);
            }
        }
        __classPrivateFieldGet(this, _FunctionAPI_kernel, "f").processor.emitEvents({ type: 'wam-midi', time: eventTime, data: { bytes } });
    }
    /**
     * returns the current time
     * @returns {number} the current audioContext time, in seconds
     */
    getCurrentTime() {
        return audioWorkletGlobalScope.currentTime;
    }
    /**
     * returns the duration, in seconds, for the input number of ticks
     * @param ticks {number} the number of ticks to convert to seconds
     */
    getTickDuration(ticks) {
        return ticks * 1.0 / ((__classPrivateFieldGet(this, _FunctionAPI_kernel, "f").transport.tempo / 60.0) * PPQN);
    }
    /**
     * Set (or unset) a list of named MIDI notes.  Used to inform earlier MIDI processors what MIDI notes are valid.
     * @param noteList {NoteDefinition[]} a list of midi notes this processor accepts.  Set to undefined to clear the custom note list.
     */
    setCustomNoteList(noteList) {
        __classPrivateFieldGet(this, _FunctionAPI_kernel, "f").processor.port.postMessage({ source: "functionSeq", action: "noteList", noteList });
    }
    /**
     * Register the complete list of plugin parameters.  These parameters can be mapped to UI controls and are exposed to the host for automation.
     * @param parameters {ParameterDefinition[]} the list of parameters to register for the plugin.
     */
    registerParameters(parameters) {
        __classPrivateFieldGet(this, _FunctionAPI_kernel, "f").registerParameters(parameters);
    }
    /**
     * Register a custom UI interface.
     * @params root {RemoteUIElement} the top-level root UI element, usually a ui.Col or ui.Row.
     */
    registerUI(root) {
        __classPrivateFieldGet(this, _FunctionAPI_kernel, "f").uiController.register(root);
    }
    /**
     * Stores an additional variable into the patch.  This gets sent to other collaborators and will be restored after refreshing the page.
     * Be warned: this is an expensive operation as the value change is sent to the server and all other users.  Only use this function
     * to hold state that is not in a registered parameter (which are automatically synced to the server).
     * Calling setState() will result in your onStateChange() callback running on all plugin instances including locally.
     * @param name {string} the variable name
     * @param value {any} the value to store
     */
    setState(name, value) {
        __classPrivateFieldGet(this, _FunctionAPI_kernel, "f").setAdditionalState(name, value);
    }
    /**
     * Returns the stored value for a variable name that was previously stored with setState.
     * @param name {string} the variable name to return
     * @returns {any} the previously stored value, or undefined if nothing is stored.
     */
    getState(name) {
        return __classPrivateFieldGet(this, _FunctionAPI_kernel, "f").getAdditionalState(name);
    }
    /**
     * Returns the values for all parameters that were registered by registerParameters.
     * @returns {Record<string, number>} a map of parameter names to parameter values
     */
    getParams() {
        let params = {};
        for (let id of __classPrivateFieldGet(this, _FunctionAPI_kernel, "f").parameterIds) {
            params[id] = __classPrivateFieldGet(this, _FunctionAPI_kernel, "f").processor._parameterState[id].value;
        }
        return params;
    }
}
_FunctionAPI_ui = new WeakMap(), _FunctionAPI_kernel = new WeakMap();


/***/ }),

/***/ "./src/RemoteUI.ts":
/*!*************************!*\
  !*** ./src/RemoteUI.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoteUI": () => (/* binding */ RemoteUI)
/* harmony export */ });
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RemoteUI_kernel;
class RemoteUI {
    constructor(kernel) {
        _RemoteUI_kernel.set(this, void 0);
        __classPrivateFieldSet(this, _RemoteUI_kernel, kernel, "f");
    }
    Col(name, children, properties) {
        return {
            type: "col",
            name,
            children,
            props: properties !== null && properties !== void 0 ? properties : {}
        };
    }
    Row(name, children, properties) {
        return {
            type: "row",
            name,
            children,
            props: properties !== null && properties !== void 0 ? properties : {}
        };
    }
    Action(name, properties) {
        return {
            type: "action",
            name,
            props: properties !== null && properties !== void 0 ? properties : {}
        };
    }
    Toggle(name, properties) {
        return {
            type: "toggle",
            name,
            props: properties !== null && properties !== void 0 ? properties : {}
        };
    }
    Knob(name, properties) {
        return {
            type: "knob",
            name,
            props: properties !== null && properties !== void 0 ? properties : {}
        };
    }
    Slider(name, properties) {
        return {
            type: "slider",
            name,
            props: properties !== null && properties !== void 0 ? properties : {}
        };
    }
    Label(name, properties) {
        return {
            type: "label",
            name,
            props: properties !== null && properties !== void 0 ? properties : {}
        };
    }
    Select(name, properties) {
        return {
            type: "select",
            name,
            props: properties !== null && properties !== void 0 ? properties : {}
        };
    }
    Highlight(name, value) {
        __classPrivateFieldGet(this, _RemoteUI_kernel, "f").uiController.highlight(name, value);
    }
}
_RemoteUI_kernel = new WeakMap();


/***/ }),

/***/ "./src/RemoteUIController.ts":
/*!***********************************!*\
  !*** ./src/RemoteUIController.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoteUIController": () => (/* binding */ RemoteUIController)
/* harmony export */ });
// this class runs in the remote context, handling the client's ui perspective
class RemoteUIController {
    constructor(kernel, port) {
        this.kernel = kernel;
        this.port = port;
        this.pendingUpdates = [];
    }
    register(root) {
        this.ui = root;
        this.uiMap = {};
        if (this.ui) {
            const setMapValues = (el) => {
                if (this.uiMap[el.name]) {
                    throw new Error(`UI has two elements named ${el.name}`);
                }
                this.uiMap[el.name] = {};
                if (el.children) {
                    for (let child of el.children) {
                        setMapValues(child);
                    }
                }
            };
            setMapValues(this.ui);
        }
        this.port.postMessage({ source: "remoteUI", action: "ui", ui: root ? JSON.stringify(root) : undefined });
    }
    highlight(name, value) {
        try {
            if (this.uiMap[name].highlighted != value) {
                this.uiMap[name].highlighted = value;
                this.pendingUpdates.push({ t: "high", f: name, v: value });
            }
        }
        catch (e) {
            console.error(`error highlighting ${name}: ${e}`);
        }
    }
    flush() {
        const updates = this.pendingUpdates;
        this.pendingUpdates = [];
        if (updates.length > 0) {
            this.port.postMessage({ source: "remoteUI", action: "up", updates });
        }
    }
    onMessage(message) {
        if (!message.data || message.data.source != "remoteUI") {
            return;
        }
        if (message.data.action == "action" && message.data.name) {
            this.kernel.onAction(message.data.name);
        }
    }
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/FunctionSeqProcessor.ts");
/******/ 	
/******/ })()
;