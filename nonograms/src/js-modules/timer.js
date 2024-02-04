export default class {
  constructor(initValue = 0) {
    this.value = initValue;
    this.node = document.createElement('span');
    this.node.innerText = 'Time : ' + this.secToMMSS(this.value);
  }

  secToMMSS(s) {
    const mm = Math.floor(s / 60).toString();
    const ss = s % 60 < 10 ? '0' + (s % 60) : (s % 60).toString();
    return `${mm}:${ss}`;
  }
  // use '.bind'
  start() {
    this._id = setInterval(() => {
      this.value++;
      this.node.innerText = 'Time : ' + this.secToMMSS(this.value);
    }, 1000);
  }

  pause() {
    clearInterval(this._id);
  }
}
