import BaseElement from './baseElement';

export default class BaseTextElement<
  T extends keyof HTMLElementTagNameMap,
> extends BaseElement<T> {
  public set text(txt: string) {
    this.element.textContent = txt;
  }
}
