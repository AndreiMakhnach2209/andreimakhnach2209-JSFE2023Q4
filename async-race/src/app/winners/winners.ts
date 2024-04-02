import { CarRecord, SortParams } from '../../types/index';
import View from '../../types/view/view';
import createElement from '../../utilits/creatingElement';
import RecordsTable from './components/recordsTable/recordTable';
import styles from './winners.module.scss';

export default class Winners extends View {
  private recordsTable = new RecordsTable();

  private totalNuberofWinns = createElement('p');

  private static limitOfWinnersToPage = 10;

  private sortParams: SortParams = { sort: 'id', order: 'ASC' };

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
    this.init();
  }

  private init() {
    document.addEventListener('DOMContentLoaded', () => {
      const sortableHeadCells = document.querySelectorAll('[data-sortable]');
      sortableHeadCells.forEach((headCell, index, headCells) => {
        headCell.addEventListener('click', (event) => {
          headCells.forEach((item) => item.removeAttribute('data-order'));
          const currentTarget = event.currentTarget as HTMLElement;
          if (this.sortParams?.sort === currentTarget.dataset.sortable)
            if (this.sortParams?.order === 'ASC') {
              this.sortParams.order = 'DESC';
              currentTarget.dataset.order = 'desc';
            } else this.sortParams = { sort: 'id', order: 'ASC' };
          else {
            this.sortParams = {
              sort: currentTarget.dataset.sortable,
              order: 'ASC',
            } as SortParams;
            currentTarget.dataset.order = 'asc';
          }
          this.viewContent();
        });
      });
    });
  }

  public async viewContent() {
    try {
      super.viewContent();
      this.recordsTable.clearTable();
      let url = `http://127.0.0.1:3000/winners?_page=${this.page}&_limit=${Winners.limitOfWinnersToPage}`;
      url += `&_sort=${this.sortParams.sort}&_order=${this.sortParams.order}`;
      const response = await fetch(url);
      const totalNumsOfWinns = response.headers.get('X-Total-Count');
      this.totalNuberofWinns.textContent = `Winners (${totalNumsOfWinns})`;

      const winns = (await response.json()) as CarRecord[];
      winns.forEach((winner: CarRecord, index) => {
        this.recordsTable.addRow(winner, index + (this.page - 1) * 10);
      });

      this.btnNextPage.disabled = !(
        this.page <
        Number(totalNumsOfWinns) / Winners.limitOfWinnersToPage
      );
      this.btnPreviousPage.disabled = this.page === 1;
    } catch {
      console.warn('Server is not available!');
    }
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
    } catch {
      console.warn('This is new winner!');
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
    try {
      await fetch(`http://127.0.0.1:3000/winners/${winnerInfo.id}`, {
        method: 'PUT',
        headers: { 'Content-type': 'application/json' },
        body: JSON.stringify({
          wins: winnerInfo.wins + 1,
          time: winnerInfo.time > currentTime ? currentTime : winnerInfo.time,
        }),
      });
      this.viewContent();
    } catch {
      console.warn('Server is not available!');
    }
  }
}
