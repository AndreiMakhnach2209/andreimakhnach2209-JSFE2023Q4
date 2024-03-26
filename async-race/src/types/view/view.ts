import createElement from '../../utilits/creatingElement';
import styles from './view.module.scss';

export default class View {
  public element: HTMLElement;

  constructor(classList?: string[]) {
    this.element = createElement('div', [
      styles.container,
      ...(classList ?? []),
    ]);
  }

  hidde() {
    this.element.classList.add(styles.hidden);
  }

  shows() {
    this.element.classList.remove(styles.hidden);
  }
}
