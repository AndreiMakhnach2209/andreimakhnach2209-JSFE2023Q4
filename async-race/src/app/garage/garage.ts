import Button from '../../components/buttons';
import { CarInfo } from '../../types/index';
import View from '../../types/view/view';
import createElement from '../../utilits/creatingElement';
import Car from './components/car/car';
import styles from './garage.module.scss';

export default class Garage extends View {
  private btnNextPage = new Button('NEXT');

  private btnPreviousPage = new Button('PREV');

  private totalNuberofCars = createElement('p');

  private numberPage = createElement('p');

  constructor() {
    super([styles.garage]);
    const statisticsWrap = createElement(
      'div',
      [styles.statistics],
      {},
      this.totalNuberofCars,
      this.numberPage
    );
    this.element.append(
      statisticsWrap,
      createElement('div', [], {}, this.btnPreviousPage, this.btnNextPage)
    );
    this.viewContent();
  }

  private async viewContent(page: number = 1) {
    const response = await fetch(
      `http://127.0.0.1:3000/garage?_page=${page}&_limit=7`
    );
    this.totalNuberofCars.textContent = `Garage (${response.headers.get('X-Total-Count')})`;
    this.numberPage.innerText = `Page#${page}`;
    const cars = (await response.json()) as CarInfo[];
    cars.forEach((carInfo) => {
      this.createTrack(carInfo);
    });
  }

  private createTrack(carInfo: CarInfo) {
    const car = new Car(carInfo);
    this.element.append(createElement('div', [styles.track], {}, car));
  }
}
