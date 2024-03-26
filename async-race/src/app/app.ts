import Button from '../components/buttons';
import createElement from '../utilits/creatingElement';
import Garage from './garage/garage';
import Winners from './winners/winners';
import styles from './app.module.scss';

export default class App {
  private garage = new Garage();

  private winners = new Winners();

  private page: HTMLElement;

  private btnGarage = new Button('GARAGE');

  private btnWinners = new Button('WINNERS');

  constructor() {
    this.page = createElement(
      'div',
      [styles.page],
      {},
      this.btnGarage,
      this.btnWinners,
      this.garage.element,
      this.winners.element
    );
  }

  private toGarage() {
    this.btnGarage.disabled = true;
    this.btnWinners.disabled = false;
    this.garage.shows();
    this.winners.hidde();
  }

  private toWinners() {
    this.btnWinners.disabled = true;
    this.btnGarage.disabled = false;
    this.winners.shows();
    this.garage.hidde();
  }

  public start() {
    this.btnGarage.addEventListener('click', () => this.toGarage());
    this.btnWinners.addEventListener('click', () => this.toWinners());
    this.toGarage();
    document.body.append(this.page);
  }
}
