import { CarRecord } from '../../types/index';
import View from '../../types/view/view';
import createElement from '../../utilits/creatingElement';
import RecordsTable from './components/recordsTable/recordTable';
import styles from './winners.module.scss';

export default class Winners extends View {
  private recordsTable = new RecordsTable();

  private totalNuberofWinns = createElement('p');

  private static limitOfWinnersToPage = 10;

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

  protected async viewContent() {
    super.viewContent();
    this.recordsTable.clearTable();
    const response = await fetch(
      `http://127.0.0.1:3000/winners?_page=${this.page}&_limit=${Winners.limitOfWinnersToPage}`
    );
    const totalNumsOfWinns = response.headers.get('X-Total-Count');
    this.totalNuberofWinns.textContent = `Winners (${totalNumsOfWinns})`;
    this.btnNextPage.disabled = !(
      this.page <
      Number(totalNumsOfWinns) / Winners.limitOfWinnersToPage
    );

    const winns = (await response.json()) as CarRecord[];
    winns.forEach((winner: CarRecord, index) => {
      this.recordsTable.addRow(winner, index);
    });
  }

  public async updateRecords(id: number, timeMs: number) {
    const currentTime = Number((timeMs / 1000).toFixed(2));
    try {
      const response = await fetch(`http://127.0.0.1:3000/winners/${id}`);
      if (response.status === 404 && id) {
        await this.createWinner(id, currentTime);
        throw new Error('This is new winner!');
      }
      const winnerInfo = (await response.json()) as CarRecord;
      this.updateWinner(winnerInfo, currentTime);
    } catch (error) {
      console.warn(error);
    }
  }

  private async createWinner(id: number, time: number, wins = 1) {
    try {
      await fetch(`http://127.0.0.1:3000/winners`, {
        method: 'POST',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          id,
          wins,
          time,
        }),
      });
      this.viewContent();
    } catch (error) {
      console.warn('Server is not available!');
    }
  }

  private async updateWinner(winnerInfo: CarRecord, currentTime: number) {
    await fetch(`http://127.0.0.1:3000/winners/${winnerInfo.id}`, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({
        wins: winnerInfo.wins + 1,
        time: winnerInfo.time > currentTime ? currentTime : winnerInfo.time,
      }),
    });
    this.viewContent();
  }
}
