import Button from '../../components/buttons';
import createElement from '../../utilits/creatingElement';
import styles from './view.module.scss';

export default class View {
  protected btnNextPage = new Button('NEXT');

  protected btnPreviousPage = new Button('PREV');

  protected numberPage = createElement('p');

  public element: HTMLElement;

  protected page = 1;

  constructor(classList?: string[]) {
    this.element = createElement('div', [
      styles.container,
      ...(classList ?? []),
    ]);

    this.btnNextPage.addEventListener('click', () => this.nextPage());
    this.btnPreviousPage.addEventListener('click', () => this.prevPage());
  }

  hidde() {
    this.element.classList.add(styles.hidden);
  }

  shows() {
    this.element.classList.remove(styles.hidden);
  }

  protected nextPage() {
    this.page += 1;
    this.viewContent();
  }

  protected prevPage() {
    this.page -= 1;
    this.viewContent();
  }

  protected async viewContent() {
    this.btnNextPage.disabled = true;
    this.btnPreviousPage.disabled = true;
    this.numberPage.innerText = `Page#${this.page}`;
  }
}
