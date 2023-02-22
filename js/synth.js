class Synth {
  constructor(adsr={a:0,d:0,s:0,r:0}) {
    this.adsrEnv = adsr;

  }

  get audioContext() {
    return this.ac;
  }

  set audioContext(value) {
    this.ac = value;
    this.engine();
  }

  engine() {
    this.osc = this.ac.createOscillator();
    this.osc.type = 'sine';
    this.oscGain = this.ac.createGain();
    this.osc.onended = _ => {
      this.disconnect();
    }
  }

  MIDINoteToFreq(midiNote) {
    return (2**((midiNote-69.0)/12))*440.0;
  }

  MIDIVelToAmp(midiValue) {
    return midiValue/127.0;
  }

  set onended(f) {
    this.osc.onended = f;
  }

  get waveType() {
    return this.osc.type;
  }

  set waveType(type) {
    this.osc.type = type;
  }

  get note() {
    return this.osc.frequency.value;
  }

  set note(note) {
    this.osc.frequency.setValueAtTime(this.MIDINoteToFreq(note), 0);
  }

  get adsr() {
    return this.adsrEnv;
  }

  set adsr(value) {
    this.adsrEnv = value;
  }

  get vel() {
    return this.oscGain.gain.value;
  }

  set vel(value) {
    this.sVel = this.MIDIVelToAmp(value);
  }

  connect(destination) {
    this.osc.connect(this.oscGain);
    this.oscGain.connect(destination);
  }

  disconnect(time=0) {
    this.osc.disconnect(time);
    this.oscGain.disconnect(time);
  }

  start(currentTime=0) {
    this.osc.start(0);

    this.oscGain.gain.setValueAtTime(0,0);
    this.oscGain.gain.linearRampToValueAtTime(1.0, this.ac.currentTime+this.adsrEnv.a);
    this.oscGain.gain.linearRampToValueAtTime(this.sVel, this.ac.currentTime+this.adsrEnv.a+this.adsrEnv.d);
    this.oscGain.gain.linearRampToValueAtTime(this.sVel, this.ac.currentTime+this.adsrEnv.a+this.adsrEnv.d+this.adsrEnv.s);

    this.stop(this.ac.currentTime+this.adsrEnv.a+this.adsrEnv.d+this.adsrEnv.s);
  }

  stop(currentTime=0) {
    try {
      this.oscGain.gain.linearRampToValueAtTime(0.0, currentTime+this.adsrEnv.r);
      this.osc.stop(currentTime+this.adsrEnv.r);
    } catch(err) {
        console.log(err);
    }
  }
}

// Synth class extended to become a FM synth
class SynthFM extends Synth {
  engine() {
    this.carrier = ac.createOscillator();
    this.carrierGain = ac.createGain();
    this.modulator = ac.createOscillator();
    this.modulator.frequency.setValueAtTime(rand(10,1500), 0);
    this.modulatorGain = ac.createGain();
    this.modulatorGain.gain.setValueAtTime(rand(50, 150), 0);

    this.carrier.onended = _ => {
      this.disconnect();
    }
    this.modulator.connect(this.modulatorGain);
  }

  set waveType(type) {
    this.carrier.type = type;
  }

  get note() {
    return this.carrier.frequency.value;
  }

  set note(note) {
    this.carrier.frequency.setValueAtTime(this.MIDINoteToFreq(note), 0);
  }

  get vel() {
    return this.carrierGain.gain.value;
  }

  set vel(value) {
    this.sVel = this.MIDIVelToAmp(value);
  }

  connect(destination) {
    this.modulatorGain.connect(this.carrier.frequency);
    this.carrier.connect(this.carrierGain);
    this.carrierGain.connect(destination);
  }

  disconnect(time=0) {
    this.modulator.disconnect(time);
    this.modulatorGain.disconnect(time);
    this.carrier.disconnect(time);
    this.carrierGain.disconnect(time);
  }

  start(currentTime=0) {
    this.modulator.start(0);
    this.carrier.start(0);

    this.carrierGain.gain.setValueAtTime(0,0);
    this.carrierGain.gain.linearRampToValueAtTime(1.0, this.ac.currentTime+this.adsrEnv.a);
    this.carrierGain.gain.linearRampToValueAtTime(this.sVel, this.ac.currentTime+this.adsrEnv.a+this.adsrEnv.d);
    this.carrierGain.gain.linearRampToValueAtTime(this.sVel, this.ac.currentTime+this.adsrEnv.a+this.adsrEnv.d+this.adsrEnv.s);

    this.stop(this.ac.currentTime+this.adsrEnv.a+this.adsrEnv.d+this.adsrEnv.s);
  }

  stop(currentTime=0) {
    try {
      this.carrierGain.gain.linearRampToValueAtTime(0.0, currentTime+this.adsrEnv.r);
      this.carrier.stop(currentTime+this.adsrEnv.r);
      this.modulator.stop(currentTime+this.adsrEnv.r);
    } catch(err) {
        console.log(err);
    }
  }
}



