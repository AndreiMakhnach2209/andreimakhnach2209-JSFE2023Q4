import { ClassList } from '../../types/index';
import BaseElement from '../baseElement';
import styles from './paragraph.module.scss';

export default class Paragraph extends BaseElement<'p'> {
  constructor(classList: ClassList) {
    super('p', [styles.paragraph, ...classList]);
  }

  public set text(txt: string) {
    this.element.textContent = txt;
  }
}
