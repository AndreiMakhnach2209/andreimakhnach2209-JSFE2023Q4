import { CarInfo } from '../../types/index';
import View from '../../types/view/view';
import createElement from '../../utilits/creatingElement';
import dataRecesive from '../../utilits/formHandler';
import generateCarData from '../../utilits/generateCarData';
import Car from './components/car/car';
import ControlPanel from './components/controlPanel/controlPanel';
import styles from './garage.module.scss';
import finishFlag from '../../assets/images/BSicon_RACE.svg';

export default class Garage extends View {
  private totalNuberofCars = createElement('p');

  private controlPanel = new ControlPanel();

  private static limitOfCarsOnPage = 7;

  private isRaceReset = false;

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

  protected async viewContent() {
    super.viewContent();
    try {
      const response = await fetch(
        `http://127.0.0.1:3000/garage?_page=${this.page}&_limit=${Garage.limitOfCarsOnPage}`
      );
      const totalNumsCars = response.headers.get('X-Total-Count');
      this.totalNuberofCars.textContent = `Garage (${totalNumsCars})`;

      const cars = (await response.json()) as CarInfo[];
      document
        .querySelectorAll(`.${styles.track}`)
        .forEach((item) => item.remove());
      cars.forEach((carInfo) => {
        this.createTrack(carInfo);
      });
      this.btnNextPage.disabled = !(
        this.page <
        Number(totalNumsCars) / Garage.limitOfCarsOnPage
      );
      this.btnPreviousPage.disabled = this.page === 1;
    } catch (error) {
      console.warn('Server is not available!');
    }
  }

  private createTrack(carInfo: CarInfo) {
    const car = new Car(carInfo);
    this.element.append(
      createElement(
        'div',
        [styles.track],
        {},
        car,
        createElement('img', [styles.flag], {
          src: finishFlag,
          alt: 'finish',
        })
      )
    );
    const observer = new MutationObserver((mutations) => {
      switch (mutations[0].attributeName) {
        case 'data-removed':
          this.removeCar(carInfo.id);
          break;
        case 'data-selected':
          this.controlPanel.updateForm.fill(carInfo);
          this.controlPanel.updateForm.idPseudoInput.value = `${carInfo.id}`;
          break;
        case 'disabled':
          if (mutations[0].target === car.startBtn)
            this.controlPanel.raceBtn.disabled = this.stateRaceBtn();
          if (mutations[0].target === car.stopBtn)
            this.controlPanel.resetBtn.disabled = this.stateResetBtn();
          break;
        default:
          break;
      }
    });
    observer.observe(car, {
      attributes: true,
      subtree: true,
      attributeFilter: ['data-removed', 'data-selected', 'disabled'],
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

    this.controlPanel.generateBtn.addEventListener('click', () => {
      this.addCar(...generateCarData(100));
    });

    this.controlPanel.raceBtn.addEventListener('click', () => this.startRace());
    this.controlPanel.resetBtn.addEventListener('click', () =>
      this.resetRace()
    );

    [this.btnNextPage, this.btnPreviousPage].forEach((button) => {
      button.addEventListener('click', async () => {
        if (!this.isRaceReset) this.resetRace();
      });
    });
  }

  private async addCar(...carsData: CarInfo[]) {
    carsData.forEach(async (carData) => {
      try {
        await fetch(`http://127.0.0.1:3000/garage`, {
          method: 'POST',
          headers: { 'Content-type': 'application/json' },
          body: JSON.stringify({ name: carData.name, color: carData.color }),
        });
      } catch (error) {
        console.warn('Server is not available!');
      }
    });
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

  private async startRace() {
    this.isRaceReset = false;
    const cars = this.element.getElementsByTagName(
      'custom-car'
    ) as unknown as Car[];
    const promises = Object.values(cars).map((car) => car.startEngine());
    Promise.any(promises)
      .then((firstCar) => {
        const winner = firstCar as Car;
        if (!this.isRaceReset && winner.dataset.finished) {
          const greeting = createElement('p');
          greeting.textContent = `${winner.carInfo.name} won the race [${(winner.time / 1000).toFixed(2)}s]`;
          const greetingWrap = createElement(
            'div',
            [styles.greeting],
            {},
            greeting
          );
          this.element.append(greetingWrap);
          greetingWrap.addEventListener('click', () => greetingWrap.remove());
          winner.dispatchEvent(
            new CustomEvent('race', {
              bubbles: true,
              detail: { id: winner.carInfo.id, time: winner.time },
            })
          );
        }
      })
      .catch((error) => console.warn(error));
  }

  private resetRace() {
    this.isRaceReset = true;
    const cars = this.element.getElementsByTagName('custom-car');
    Object.values(cars).forEach((car) => {
      if (car instanceof Car) car.stop();
    });
  }

  private stateRaceBtn() {
    const startBtns = this.element.querySelectorAll(
      '[name=startEngine]'
    ) as unknown as HTMLButtonElement[];
    return !Object.values(startBtns).every((item) => !item.disabled);
  }

  private stateResetBtn() {
    const stopBtns = this.element.querySelectorAll(
      '[name=stopEngine]'
    ) as unknown as HTMLButtonElement[];
    return !Object.values(stopBtns).some((item) => !item.disabled);
  }
}
