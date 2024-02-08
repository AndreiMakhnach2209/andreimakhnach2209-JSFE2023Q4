export default class {
  constructor(initValue = 0) {
    this.value = initValue;
    this.node = document.createElement('span');
    this.node.innerText = 'Time : ' + this.secToMMSS(this.value);
    this.isStarted = false;
  }

  secToMMSS(s) {
    const mm = Math.floor(s / 60).toString();
    const ss = s % 60 < 10 ? '0' + (s % 60) : (s % 60).toString();
    return `${mm}:${ss}`;
  }
  // use '.bind'
  start() {
    if (!this.isStarted) {
      this._id = setInterval(() => {
        this.value++;
        this.node.innerText = 'Time : ' + this.secToMMSS(this.value);
      }, 1000);
      this.isStarted = true;
    }
  }

  pause() {
    clearInterval(this._id);
    this.isStarted = false;
  }

  reset(newValue = 0) {
    this.pause();
    this.value = newValue;
    this.node.innerText = 'Time : ' + this.secToMMSS(this.value);
  }
}
