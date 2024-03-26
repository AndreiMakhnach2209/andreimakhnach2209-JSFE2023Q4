import Button from '../../components/buttons';
import { CarRecord } from '../../types/index';
import View from '../../types/view/view';
import createElement from '../../utilits/creatingElement';
import RecordsTable from './components/recordsTable/recordTable';
import styles from './winners.module.scss';

export default class Winners extends View {
  private btnNextPage = new Button('NEXT');

  private btnPreviousPage = new Button('PREV');

  private recordsTable = new RecordsTable();

  private totalNuberofWinns = createElement('p');

  private numberPage = createElement('p');

  constructor() {
    super([styles.winners]);
    const statisticsWrap = createElement(
      'div',
      [styles.statistics],
      {},
      this.totalNuberofWinns,
      this.numberPage
    );
    this.element.append(
      statisticsWrap,
      createElement('div', [], {}, this.btnPreviousPage, this.btnNextPage),
      this.recordsTable
    );
    this.viewContent();
  }

  private async viewContent(page: number = 1) {
    const response = await fetch(
      `http://127.0.0.1:3000/winners?_page=${page}&_limit=10`
    );
    this.totalNuberofWinns.textContent = `Winners (${response.headers.get('X-Total-Count')})`;
    this.numberPage.innerText = `Page#${page}`;
    const winns = (await response.json()) as CarRecord[];
    winns.forEach((winner: CarRecord, index) => {
      this.recordsTable.addRow(winner, index);
    });
  }
}
