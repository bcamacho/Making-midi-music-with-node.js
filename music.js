const scribble = require('scribbletune');
/*
 Generate midi music :)
 x = note on, - = notes off, _ = sustain
 https://www.npmjs.com/package/scribbletune
 Execute "node music.js" to generate midi files for us in your favorite music editor
*/
let cMajor = scribble.scale('c','major');
//clip
let clip1 = scribble.clip({
	notes: ['c4','d4','e4','f4','g4','a4','b4','c5'],
	pattern: 'x-x-x-x-x-x-x-x-',
	sizzle:true,
	shuffle: true
});

let clip2 = scribble.clip({
	notes: cMajor.filter( (a, x) => x % 2 === 0 ),
	pattern: 'x-'.repeat(8)
})

scribble.midi(clip1.concat(clip2), 'combined_clip.mid');

// bass
let bass = scribble.clip({
	notes: ['f#2'],
	pattern:'x-'.repeat(8)
})

scribble.midi(bass, 'bass.mid');

// kick
let kick = scribble.clip({
	notes: ['c4'],
	pattern:'x---'.repeat(4)
})
scribble.midi(kick);

// Snare
let snare = scribble.clip({
	notes: ['c4'],
	pattern:'----x------------'
})
scribble.midi(snare, 'snare.mid');

// Clap
let clap = scribble.clip({
	notes: ['c4'],
	pattern:'-------------x---'
})
scribble.midi(clap,'clap.mid');

// rise with accentMap
let rise = scribble.clip({
	notes: ['c4'],
	pattern:'x'.repeat(16),
	accentMap:[5,10,20,30,40,50,60,70,80,90,100,110,120,120,120,120]
})
scribble.midi(rise, 'rise.mid');
