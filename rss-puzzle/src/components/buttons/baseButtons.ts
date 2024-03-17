import BaseElement from '../baseElement';
import styless from './button.module.scss';

export default class Button extends BaseElement<'input'> {
  constructor(type: 'button' | 'submit' | 'reset' | 'image' = 'button') {
    super('input', [styless.button]);
    this.element.type = type;
  }

  public set disabled(isDisable: boolean) {
    this.element.disabled = isDisable;
  }

  public set text(text: string) {
    this.element.value = text;
  }
}
