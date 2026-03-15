const musicKeys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'Ab', 'A', 'Bb', 'B'];
const scaleTypes = ['Ionian', 'Dorian', 'Phyrgian', 'Lydian', 'Mixolydian', 'Aeolian', 'Locrian']
const chordTypes = ['Major Triad', 'Minor Triad', 'Augmented Triad', 'Diminished Triad', 'Major 7th', 'Minor 7th', 'Major-Minor 7th', 'Dominant 7th']

let keyBtn = document.getElementById('keyBtn');
let chordBtn = document.getElementById('chordBtn');
let scaleBtn = document.getElementById('scaleBtn');

let keyDisplayBox = document.getElementById('keyDisplayBox');
let chordDisplayBox = document.getElementById('chordDisplayBox');
let scaleDisplayBox = document.getElementById('scaleDisplayBox');

let keyIndex = 0;


keyBtn.addEventListener('click', function() {
    keyIndex = Math.floor(Math.random() * musicKeys.length)
    keyDisplayBox.textContent = musicKeys[keyIndex]
});



chordBtn.addEventListener('click', function() {
    let chordIndex = Math.floor(Math.random() * chordTypes.length)
    chordDisplayBox.textContent = musicKeys[chordIndex] + ' ' + chordTypes[chordIndex]
});

scaleBtn.addEventListener('click', function() {
    let scaleIndex = Math.floor(Math.random() * scaleTypes.length)
    scaleDisplayBox.textContent = musicKeys[keyIndex] + ' ' + scaleTypes[scaleIndex]
});