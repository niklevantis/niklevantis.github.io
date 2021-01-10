let mystic = {c:0, ds:6, f:5, fs:3, g:10, as:7};
let beat = [8,8,8,8,16,16,16,16,8,8,8];
let scaleLength = Object.values(mystic).length;

var ascending = true;


let f = _ => {
  if (round(rand(0, countTo(scaleLength-1))) == 0) {
    ascending = !ascending;
  }

  if (ascending) {
    return {note:countTo(scaleLength-1), vel:countTo(scaleLength-1)>=2 && countTo(scaleLength-1)<=4? 60: 59, oct:3};
  } else {
    return {note:countFrom(scaleLength-1), vel:countFrom(scaleLength-1)>=1 && countFrom(scaleLength-1)<=4? 40: 1, oct:(rand(4,4.01))};
  }
}


Sequencer.generator(mystic, f).synth('Synth',{a:0,d:0,r:1}).start(ac,round(rand(60,60)), beat);
