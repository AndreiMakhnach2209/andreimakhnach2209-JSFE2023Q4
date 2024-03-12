import { ClassList } from '../../types/index';
import BaseElement from '../baseElement';

export default class MainTittle extends BaseElement<'h1'> {
  constructor(classList: ClassList) {
    super('h1', classList);
  }

  public set text(txt: string) {
    this.element.textContent = txt;
  }
}
