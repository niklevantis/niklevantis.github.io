

function preload(){
  sound = loadSound('https://nicklevantis.com/audio/romance.mp3');
 
}

function setup(){
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.mouseClicked(togglePlay);
  fft = new p5.FFT();
  sound.amp(0.2);
}

function draw(){
  background(1);

//  let spectrum = fft.analyze();
//  noStroke();
//  fill(4, 1, 5);
//  for (let i = 0; i< spectrum.length; i++){
//    let x = map(i, 0, spectrum.length, 0, width);
//    let h = -height + map(spectrum[i], 0, 255, height, 0);
//    rect(x, height, width / spectrum.length, h )
//  }

  let waveform = fft.waveform();
  noFill();
  beginShape();
  stroke(255);
  for (let i = 0; i < waveform.length; i++){
    let x = map(i, 0, waveform.length, 0, width);
    let y = map( waveform[i], -1, 1, 0, height);
    vertex(x,y);
  }
  endShape();
   
   textSize(10);
  text('tap to play or stop', 46, 380);  
    
}

function togglePlay() {
  if (sound.isPlaying()) {
    sound.pause();
  } else {
    sound.loop();
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

