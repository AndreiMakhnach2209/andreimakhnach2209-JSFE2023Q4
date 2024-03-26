import { CarRecord } from '../../../../types/index';
import createElement from '../../../../utilits/creatingElement';
import Car from '../../../garage/components/car/car';
import styles from './recordsTable.module.scss';

export default class RecordsTable extends HTMLTableElement {
  constructor() {
    super();
    this.className = styles.table;
    this.createTHead();
    this.createTBody();
    const titles = ['Number', 'Car', 'Name', 'Winns', 'Best time (sec)'].map(
      (text) => {
        const thElement = createElement('th', [styles.head]);
        thElement.textContent = text;
        return thElement;
      }
    );
    this.tHead?.append(createElement('tr', [], {}, ...titles));
  }

  public async addRow(winnerInfo: CarRecord, index: number) {
    const response = await fetch(
      `http://127.0.0.1:3000/garage/${winnerInfo.id}`
    );
    const carInfo = await response.json();
    const rowContent = [
      index + 1,
      new Car(carInfo),
      carInfo.name,
      winnerInfo.wins,
      winnerInfo.time,
    ].map((item) => {
      const cell = createElement('td', [styles.cell]);
      if (item instanceof Car) {
        cell.append(item);
        item.classList.add(styles.car);
      } else cell.textContent = item;
      return cell;
    });
    this.tBodies?.item(0)?.append(createElement('tr', [], {}, ...rowContent));
  }
}

customElements.define('custom-table', RecordsTable, { extends: 'table' });
