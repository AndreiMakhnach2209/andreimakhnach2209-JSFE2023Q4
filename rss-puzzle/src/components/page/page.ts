import { ClassList } from '../../types/index';
import Container from '../container';
import styles from './page.module.scss';

export default class Page extends Container {
  constructor(classList: ClassList, ...children: HTMLElement[]) {
    super([styles.page, ...classList], ...children);
  }

  public start() {
    document.querySelector('body')?.append(this.element);
  }

  public stop() {
    this.element.remove();
  }
}
