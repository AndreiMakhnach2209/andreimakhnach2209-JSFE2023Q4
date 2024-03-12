import { ClassList } from '../../types/index';
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
}
