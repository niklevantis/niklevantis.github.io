// define global variables
const items = document.querySelectorAll('.item');
const button = document.querySelector('.button');
const body = document.body;
const layers = document.querySelectorAll('.layer');
const links = document.querySelectorAll('a');




// remove videos from DOM on mobile
const videos = document.querySelectorAll('video source');

if(!(matchMedia('(pointer:coarse)').matches)) {
  videos.forEach(function(video) {
    var src = video.getAttribute('data-src');
    video.setAttribute('src', src);
    video.parentNode.load();
  });
}

else {
  var mobileitem = document.querySelector('.mobileitem');
  var mobilevid = document.querySelector('.mobileitem video source');

  var src = mobilevid.getAttribute('data-src');
  mobilevid.setAttribute('src', src);
  mobilevid.parentNode.load();
  mobilevid.parentNode.play();
}



// get random function
function getRandom(arr, n) {
    var result = new Array(n),
        len = arr.length,
        taken = new Array(len);
    if (n > len)
        throw new RangeError("getRandom: more elements taken than available");
    while (n--) {
        var x = Math.floor(Math.random() * len);
        result[n] = arr[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}





// show 4 random items and hide others
function getRandomItems() {
  items.forEach(function(item) {
    item.classList.remove('item--visible', 'item--invert', 'item--visible-1', 'item--visible-2', 'item--visible-3', 'item--visible-4');
  });

  var randomItems = getRandom(items, 4);

  randomItems.forEach(function(randomItem) {
    randomItem.classList.add('item--visible');
  });

  let visibleItems = document.querySelectorAll('.item--visible');


  // add numbers to visible items
  var viNum = 0;
  visibleItems.forEach(function(visibleItem) {
    viNum++;
    visibleItem.classList.add('item--visible-'+viNum);
  });


  // randomly invert some items
  var invertItems = getRandom(items, 4);

  invertItems.forEach(function(item) {
    item.classList.add('item--invert');
  });
}




// play once on start
getRandomItems();

function randomize() {
  getRandomItems();

  // body.classList.remove('body--animated');
  // void body.offsetWidth;
  body.classList.add('body--animated');

  setTimeout(function() {
    body.classList.remove('body--animated');
  }, 100);

};



layers.forEach(function(layer) {
  layer.addEventListener('mouseleave', randomize);
  // layer.addEventListener('mouseout', randomize);
});


let scale = [
  264, 330, 352, 391.1, 440, 488.9
]
scale = scale.concat(scale.map(x => x * 1))

console.log(scale)

function quantize(scale, freq) {
  return scale.reduce(function(prev, curr) {
      return (Math.abs(curr - freq) < Math.abs(prev - freq) ? curr : prev);
  });
}

const audioCtx = new(window.AudioContext || window.webkitAudioContext)()
const observer = new MutationObserver(observe)

function observe(mutationsList) {
  // with delay
  delayNote(gain => playNote(mutationsList, gain), 300, 0.5)
      // without
      // playNote(mutationsList)
}

// Compressor as final stage to prevent clipping
const compressor = audioCtx.createDynamicsCompressor()
compressor.threshold.setValueAtTime(-40, audioCtx.currentTime);
compressor.knee.setValueAtTime(40, audioCtx.currentTime);
compressor.ratio.setValueAtTime(12, audioCtx.currentTime);
compressor.attack.setValueAtTime(0, audioCtx.currentTime);
compressor.release.setValueAtTime(0.25, audioCtx.currentTime);
compressor.connect(audioCtx.destination)

async function playNote(mutationsList, gain = 1) {
  audioCtx.resume()

  const oscillator = audioCtx.createOscillator()
  oscillator.type = "triangle"
  const biquadFilter = audioCtx.createBiquadFilter();
  biquadFilter.type = "lowpass";
  const gainNode = audioCtx.createGain();
  const panNode = audioCtx.createStereoPanner();

  // Setup audio chain 
  oscillator.connect(biquadFilter);
  biquadFilter.connect(gainNode);
  gainNode.connect(panNode);
  panNode.connect(compressor)

  let freq = quantize(scale, 440 * (Math.random() * 1))

  oscillator.frequency.setValueAtTime(
      quantize(scale, freq),
      audioCtx.currentTime,
  )

  // Low pass gate 
  biquadFilter.frequency.setValueAtTime(
      quantize(scale, freq * 5),
      audioCtx.currentTime
  );

  biquadFilter.frequency.setTargetAtTime(
      freq,
      audioCtx.currentTime,
      0.09,
  );

  // accend the low pass gate with normal attenuatiob
  gainNode.gain.setValueAtTime(
      gain,
      audioCtx.currentTime
  );

  gainNode.gain.setTargetAtTime(
      0,
      audioCtx.currentTime,
      0.1,
  );

  // random stereo pan
  panNode.pan.setValueAtTime(
      Math.random() * 2 - 1,
      audioCtx.currentTime
  );

  oscillator.start()
  oscillator.stop(audioCtx.currentTime + 1)
}

async function delayNote(f, time, decay, gain = 1) {
  if (gain <= 0) {
      return // stop repeats when they become inaudible
  }

  f(gain)

  setTimeout(_ => delayNote(f, time, decay, gain - decay), time);
}

observer.observe(document, {
  attributes: true,
  childList: true,
  subtree: true,
  characterData: true,
})