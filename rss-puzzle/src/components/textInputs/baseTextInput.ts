import { ClassList } from '../../types/index';
import Listener from '../../types/listener';
import BaseElement from '../baseElement';

export default class TextInput extends BaseElement<'input'> {
  protected label: HTMLLabelElement | null = null;

  constructor(
    name: string,
    classList: ClassList,
    type: 'text' | 'search' | 'tel' | 'url' | 'email' | 'password' = 'text'
  ) {
    super('input', classList);
    this.element.type = type;
    this.element.name = name;
  }

  public set placeholder(txt: string) {
    this.element.placeholder = txt;
  }

  public set required(isRequired: boolean) {
    this.element.required = isRequired;
  }

  public set pattern(regExp: string) {
    this.element.pattern = regExp;
  }

  public set minLength(minLength: number) {
    this.element.minLength = minLength;
  }

  public createLabel(title: string, classList: ClassList) {
    this.label = document.createElement('label');
    this.label.textContent = title;
    this.label.classList.add(...classList);
    this.label.append(this.element);
  }

  public get node() {
    if (this.label) return this.label;
    return this.element;
  }

  public addEventListener = (
    eventType: keyof HTMLElementEventMap,
    callback: (event: Event) => void
  ) => new Listener(eventType, callback, this.element);
}
