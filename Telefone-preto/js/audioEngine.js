class AudioEngine {
    constructor() {
      this.ctx = null;
      this.isMuted = false;
      this.ringInterval = null;
    }
  
    initContext() {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        this.ctx = new AudioCtx();
      }
    }
  
    toggleAudio() {
      this.isMuted = !this.isMuted;
      if (this.isMuted) this.stopPhoneRing();
      return !this.isMuted;
    }
  
    playPhoneRing() {
      if (this.isMuted) return;
      this.initContext();
      this.stopPhoneRing();
  
      const ringOnce = () => {
        if (this.isMuted || !this.ctx) return;
        const osc1 = this.ctx.createOscillator();
        const osc2 = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
  
        osc1.frequency.value = 440;
        osc2.frequency.value = 480;
  
        gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 1.8);
  
        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(this.ctx.destination);
  
        osc1.start();
        osc2.start();
        osc1.stop(this.ctx.currentTime + 1.8);
        osc2.stop(this.ctx.currentTime + 1.8);
      };
  
      ringOnce();
      this.ringInterval = setInterval(ringOnce, 3000);
    }
  
    stopPhoneRing() {
      if (this.ringInterval) {
        clearInterval(this.ringInterval);
        this.ringInterval = null;
      }
    }
  
    playClickSound() {
      if (this.isMuted) return;
      this.initContext();
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
  
      osc.type = 'square';
      osc.frequency.setValueAtTime(120, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(40, this.ctx.currentTime + 0.08);
  
      gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
  
      osc.connect(gain);
      gain.connect(this.ctx.destination);
  
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    }
  }
  
  const audioEngine = new AudioEngine();