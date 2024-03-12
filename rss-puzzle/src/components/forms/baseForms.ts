import { ClassList } from '../../types/index';
import Listener from '../../types/listener';
import saveToLocalStorage from '../../utilits/saveFormDataToLocalStorage';
import BaseElement from '../baseElement';

export default class BaseForm extends BaseElement<'form'> {
  constructor(name: string, classList: ClassList, ...children: HTMLElement[]) {
    super('form', classList, ...children);
    this.element.name = name;
  }

  public addEventListener = (
    eventType: keyof HTMLElementEventMap,
    callback: (event: Event) => void
  ) => new Listener(eventType, callback, this.element);

  public toLocalStorage() {
    saveToLocalStorage(this.element);
  }
}
