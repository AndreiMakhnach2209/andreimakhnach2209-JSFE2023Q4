import { ClassList } from '../../types/index';
import BaseElement from '../baseElement';
import Container from '../container';
import styles from './page.module.scss';

export default class Page extends Container {
  constructor(
    classList: ClassList,
    ...children: BaseElement<keyof HTMLElementTagNameMap>[]
  ) {
    super([styles.page, ...classList], ...children);
  }

  public start() {
    document.querySelector('body')?.append(this.element);
  }

  public stop() {
    this.element.remove();
  }
}
