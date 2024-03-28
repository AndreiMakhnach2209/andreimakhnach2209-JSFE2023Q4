import Button from '../../components/buttons';
import { CarInfo } from '../../types/index';
import View from '../../types/view/view';
import createElement from '../../utilits/creatingElement';
import dataRecesive from '../../utilits/formHandler';
import generateCarData from '../../utilits/generateCarData';
import Car from './components/car/car';
import ControlPanel from './components/controlPanel/controlPanel';
import styles from './garage.module.scss';

export default class Garage extends View {
  private btnNextPage = new Button('NEXT');

  private btnPreviousPage = new Button('PREV');

  private totalNuberofCars = createElement('p');

  private numberPage = createElement('p');

  private controlPanel = new ControlPanel();

  private page = 1;

  private static limitOfCarsOnPage = 7;

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
      this.controlPanel,
      statisticsWrap,
      createElement(
        'div',
        [styles.btnsRow],
        {},
        this.btnPreviousPage,
        this.btnNextPage
      )
    );
    this.viewContent();
    this.init();
  }

  private async viewContent() {
    try {
      const response = await fetch(
        `http://127.0.0.1:3000/garage?_page=${this.page}&_limit=${Garage.limitOfCarsOnPage}`
      );
      const totalNumsCars = response.headers.get('X-Total-Count');
      this.totalNuberofCars.textContent = `Garage (${totalNumsCars})`;
      this.numberPage.innerText = `Page#${this.page}`;

      this.btnPreviousPage.disabled = this.page === 1;
      this.btnNextPage.disabled = !(
        this.page <
        Number(totalNumsCars) / Garage.limitOfCarsOnPage
      );

      const cars = (await response.json()) as CarInfo[];
      document
        .querySelectorAll(`.${styles.track}`)
        .forEach((item) => item.remove());
      cars.forEach((carInfo) => {
        this.createTrack(carInfo);
      });
    } catch (error) {
      console.warn('Server is not available!');
    }
  }

  private createTrack(carInfo: CarInfo) {
    const car = new Car(carInfo);
    this.element.append(createElement('div', [styles.track], {}, car));
    const observer = new MutationObserver((mutations) => {
      switch (mutations[0].attributeName) {
        case 'data-removed':
          this.removeCar(carInfo.id);
          break;
        case 'data-selected':
          this.controlPanel.updateForm.fill(carInfo);
          this.controlPanel.updateForm.idPseudoInput.value = `${carInfo.id}`;
          break;
        default:
          break;
      }
    });
    observer.observe(car, {
      attributes: true,
      attributeFilter: ['data-removed', 'data-selected'],
    });
  }

  private init() {
    this.controlPanel.createForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const carData = dataRecesive(
        this.controlPanel.createForm
      ) as unknown as CarInfo;
      this.addCar(carData);
      this.controlPanel.createForm.reset();
    });

    this.controlPanel.updateForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const carData = dataRecesive(
        this.controlPanel.updateForm
      ) as unknown as CarInfo;
      this.updateCar(carData);
      this.controlPanel.updateForm.reset();
    });

    this.btnNextPage.addEventListener('click', () => this.nextPage());
    this.btnPreviousPage.addEventListener('click', () => this.prevPage());

    this.controlPanel.generateBtn.addEventListener('click', () => {
      this.addCar(...generateCarData(100));
    });
  }

  private async addCar(...carsData: CarInfo[]) {
    try {
      carsData.forEach(async (carData) => {
        await fetch(`http://127.0.0.1:3000/garage`, {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({ name: carData.name, color: carData.color }),
        });
      });
    } catch (error) {
      console.warn('Server is not available!');
    }
    this.viewContent();
  }

  private async updateCar(carData: CarInfo) {
    try {
      await fetch(`http://127.0.0.1:3000/garage/${carData.id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          name: carData.name,
          color: carData.color,
        }),
      });
    } catch (error) {
      console.warn('Server is not available!');
    }
    this.viewContent();
  }

  private async removeCar(carId: number | undefined) {
    try {
      await fetch(`http://127.0.0.1:3000/garage/${carId}`, {
        method: 'DELETE',
      });
      await fetch(`http://127.0.0.1:3000/winners/${carId}`, {
        method: 'DELETE',
      });
    } catch (error) {
      console.warn('Server is not available!');
    }
    this.viewContent();
  }

  private nextPage() {
    this.page += 1;
    this.viewContent();
  }

  private prevPage() {
    this.page -= 1;
    this.viewContent();
  }
}
