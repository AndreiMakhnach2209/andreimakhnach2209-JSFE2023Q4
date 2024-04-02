import { CarInfo, DriveData } from '../../../../types/index';
import createElement from '../../../../utilits/creatingElement';
import carIcon from '../../../../assets/images/sprite.svg';
import styles from './car.module.scss';
import Button from '../../../../components/buttons';

export default class Car extends HTMLElement {
  private selectBtn = new Button('SELECT');

  private removeBtn = new Button('REMOVE');

  public startBtn = new Button('Start');

  public stopBtn = new Button('Stop');

  private carImageWrap = createElement('div', [styles.carImageWrap]);

  public time = 0;

  private animationID: number | undefined;

  private progress: number = 0;

  private distance: number = 0;

  constructor(public carInfo: CarInfo) {
    super();
    this.className = styles.carWrap;
    this.carImageWrap.innerHTML = `<svg class=${styles.carImage} fill=${carInfo.color} stroke=#ffffff stroke-width=2><use xlink:href=${carIcon}#93123_car></use></svg>`;
    const carName = createElement('span', [styles.carName]);
    carName.textContent = carInfo.name;
    this.append(this.carImageWrap, carName);
    const btnsRow = createElement('div', [styles.btnsRow]);
    btnsRow.append(this.selectBtn, this.removeBtn);
    this.prepend(btnsRow);
    const engineBtns = createElement('div', [styles.engineBtns]);
    this.startBtn.name = 'startEngine';
    this.stopBtn.disabled = true;
    this.stopBtn.name = 'stopEngine';
    engineBtns.append(this.startBtn, this.stopBtn);
    this.append(engineBtns);
    const setDistance = () =>
      this.carImageWrap.offsetParent
        ? this.carImageWrap.offsetParent.clientWidth - this.offsetWidth
        : 0;
    setTimeout(() => {
      this.distance = setDistance();
    }, 0);

    window.addEventListener('resize', () => {
      this.distance = setDistance();
      this.setTranslate();
    });

    this.removeBtn.addEventListener('click', () => {
      this.dataset.removed = 'true';
    });
    this.selectBtn.addEventListener('click', () => {
      this.dataset.selected = 'true';
    });

    this.startBtn.addEventListener('click', () => this.startEngine());

    this.stopBtn.addEventListener('click', () => this.stop());
  }

  public async startEngine() {
    try {
      this.startBtn.disabled = true;
      const response = await fetch(
        `http://127.0.0.1:3000/engine?id=${this.carInfo.id}&status=started`,
        { method: 'PATCH' }
      );
      this.stopBtn.disabled = false;
      const { distance, velocity } = (await response.json()) as DriveData;
      this.time = distance / velocity;
      return await new Promise((resolve) => {
        this.drive()
          .then(() => resolve(this))
          .catch((error: Error) => {
            console.warn(error.message);
          });
      });
    } catch (error) {
      this.startBtn.disabled = false;
      return await new Promise((resolve, reject) => {
        reject(error);
      });
    }
  }

  private animation(duration: number) {
    const start = performance.now();

    const callback = (time: number) => {
      let timeFraction = (time - start) / duration;
      if (timeFraction >= 1) {
        timeFraction = 1;
        this.dataset.finished = 'true';
      }

      this.progress = timeFraction;

      this.setTranslate();
      if (timeFraction < 1) {
        this.animationID = requestAnimationFrame(callback);
      }
    };

    requestAnimationFrame(callback);
  }

  private async drive() {
    this.animation(this.time);
    const response = await fetch(
      `http://127.0.0.1:3000/engine?id=${this.carInfo.id}&status=drive`,
      { method: 'PATCH' }
    );
    if (response.status === 500 && this.animationID) {
      cancelAnimationFrame(this.animationID);
      throw new Error(`Engine trouble: ${this.carInfo.name} is stopped`);
    }
    if (response.status === 404) this.stop();
  }

  public async stop() {
    try {
      this.stopBtn.disabled = true;
      this.removeAttribute('data-finished');
      const response = await fetch(
        `http://127.0.0.1:3000/engine?id=${this.carInfo.id}&status=stopped`,
        { method: 'PATCH' }
      );
      if (response.ok && this.animationID) {
        this.startBtn.disabled = false;
        cancelAnimationFrame(this.animationID);
        this.progress = 0;
        this.setTranslate();
      }
    } catch {
      console.warn('Server is not available!');
    }
  }

  private setTranslate() {
    this.carImageWrap.style.setProperty(
      'transform',
      `translateX(${this.distance * this.progress}px`
    );
  }
}
customElements.define('custom-car', Car);
