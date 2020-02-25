const s = (p) => {
  let broken, img, d_map, fft, audio, toggleBtn

  p.preload = () => {
    audio = p.loadSound('audio/broken.mp3')
    broken = p.loadShader('shaders/base.vert', 'shaders/broken.frag')
    img = p.loadImage('img/flowers.jpg')
    d_map = p.loadImage('img/flowers.jpg')
  }

  p.setup = () => {
      playBtn = document.querySelector('#play-btn')
      playBtn.addEventListener('click', () => {
        document.body.classList.add('start-anim')
        audio.loop()
      })

      p.pixelDensity(1)
      p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL)

      toggleBtn = document.querySelector('#toggle-btn')
      toggleBtn.addEventListener('click', () => {
        toggleBtn.classList.toggle('toggle--on')
        this.toggleAudio()
      })

      fft = new p5.FFT()
      p.shader(broken)
      broken.setUniform('u_resolution', [p.windowWidth, p.windowHeight])
      broken.setUniform('d_map', d_map)
      broken.setUniform('img', img)
      broken.setUniform('u_tResolution', [img.width, img.height])
  }

  p.draw = () => {
    p.background(0)

    fft.analyze()

    const bass    = fft.getEnergy("bass")
    const treble  = fft.getEnergy("treble")
    const mid     = fft.getEnergy("mid")

    const mapBass     = p.map(bass, 0, 255, 0, 0.108)
    const mapMid     = p.map(mid, 0, 70, 10, 10.001)
    const mapTreble     = p.map(treble, 100, 90, 10, 50.8)
    // let fc = p.map(p.frameCount, 0, 1000, 0.0, 2.5)
    const tc = p.map(audio.currentTime(), 0, audio.duration(), 2.0, 2.0)
    broken.setUniform('u_time', tc)
    broken.setUniform('u_bass', mapBass)
    broken.setUniform('u_mid', mapMid)
    broken.setUniform('u_treble', mapTreble)
    p.rect(0, 0 , p.width, p.height)
  }

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight)
    broken.setUniform('u_resolution', [p.windowWidth, p.windowHeight])
  }

  toggleAudio = () => {
    if (audio.isPlaying()) {
      audio.pause()
    } else {
      audio.loop()
    }
  }
};

new p5(s)