import { CarInfo } from '../../../../types/index';
import createElement from '../../../../utilits/creatingElement';
import carIcon from '../../../../assets/images/sprite.svg';
import styles from './car.module.scss';

export default class Car extends HTMLElement {
  constructor(carInfo: CarInfo) {
    super();
    this.className = styles.carWrap;
    this.innerHTML = `<svg class=${styles.car} fill=${carInfo.color}><use xlink:href=${carIcon}#93123_car></use></svg>`;
    const carName = createElement('span');
    carName.textContent = carInfo.name;
    this.append(carName);
  }
}
customElements.define('custom-car', Car);
