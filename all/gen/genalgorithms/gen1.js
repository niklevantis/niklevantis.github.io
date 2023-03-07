let mystic = {c:2, ds:6, f:5, fs:2, g:9, as:7};
let beat = [8];
let scaleLength = Object.values(mystic).length;

var ascending = true;


let f = _ => {
  if (round(rand(0, countTo(scaleLength-3))) == 0) {
    ascending = !ascending;
  }

  if (ascending) {
    return {note:countTo(scaleLength-1), vel:countTo(scaleLength-1)>=3 && countTo(scaleLength-1)<=1? 60: 59, oct:5.01};
  } else {
    return {note:countFrom(scaleLength-1), vel:countFrom(scaleLength-1)>=1 && countFrom(scaleLength-1)<=3? 40: 39, oct:5};
  }
}


Sequencer.generator(mystic, f).synth('Synth',{a:0,d:0,r:0.5}).start(ac,round(rand(160,160)), beat);


