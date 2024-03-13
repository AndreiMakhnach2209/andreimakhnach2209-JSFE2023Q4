import { ClassList } from '../../types/index';
import BaseElement from '../baseElement';
import styles from './h1.module.scss';

export default class MainTittle extends BaseElement<'h1'> {
  constructor(classList: ClassList) {
    super('h1', [styles.title, ...classList]);
  }

  public set text(txt: string) {
    this.element.textContent = txt;
  }
}
