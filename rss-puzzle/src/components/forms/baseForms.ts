import { ClassList } from '../../types/index';
import saveToLocalStorage from '../../utilits/saveFormDataToLocalStorage';
import BaseElement from '../baseElement';

export default class BaseForm extends BaseElement<'form'> {
  constructor(
    name: string,
    classList: ClassList,
    ...children: BaseElement<keyof HTMLElementTagNameMap>[]
  ) {
    super('form', classList, ...children);
    this.element.name = name;
  }

  public toLocalStorage() {
    saveToLocalStorage(this.element);
  }
}
