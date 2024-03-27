import { CarInfo } from '../../../../types/index';
import createElement from '../../../../utilits/creatingElement';
import carIcon from '../../../../assets/images/sprite.svg';
import styles from './car.module.scss';
import Button from '../../../../components/buttons';

export default class Car extends HTMLElement {
  private selectBtn = new Button('SELECT');

  private removeBtn = new Button('REMOVE');

  private startBtn = new Button('Start');

  private stopBtn = new Button('Stop');

  constructor(carInfo: CarInfo) {
    super();
    this.className = styles.carWrap;
    this.innerHTML = `<svg class=${styles.carImage} fill=${carInfo.color} stroke=#ffffff stroke-width=2><use xlink:href=${carIcon}#93123_car></use></svg>`;
    const carName = createElement('span', [styles.carName]);
    carName.textContent = carInfo.name;
    this.append(carName);
    const btnsRow = createElement('div', [styles.btnsRow]);
    btnsRow.append(this.selectBtn, this.removeBtn);
    this.prepend(btnsRow);
    const engineBtns = createElement('div', [styles.engineBtns]);
    engineBtns.append(this.startBtn, this.stopBtn);
    this.append(engineBtns);

    this.removeBtn.addEventListener('click', () => {
      this.dataset.removed = 'true';
    });
    this.selectBtn.addEventListener('click', () => {
      this.dataset.selected = 'true';
    });
  }
}
customElements.define('custom-car', Car);
