import { ClassList } from '../../types/index';
import Listener from '../../types/listener';
import BaseElement from '../baseElement';

export default class Button extends BaseElement<'input'> {
  constructor(
    classList: ClassList,
    type: 'button' | 'submit' | 'reset' | 'image' = 'button'
  ) {
    super('input', classList);
    this.element.type = type;
  }

  public set disabled(isDisable: boolean) {
    this.element.disabled = isDisable;
  }

  public set text(text: string) {
    this.element.value = text;
  }

  public addEventListener = (
    eventType: keyof HTMLElementEventMap,
    callback: (event: Event) => void
  ) => new Listener(eventType, callback, this.element);
}
