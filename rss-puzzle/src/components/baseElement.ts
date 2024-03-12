import { ClassList } from '../types/index';

export default class BaseElement<T extends keyof HTMLElementTagNameMap> {
  protected element: HTMLElementTagNameMap[T];

  constructor(tagName: T, classList: ClassList, ...children: HTMLElement[]) {
    this.element = document.createElement(tagName);
    if (children) this.element.append(...children);
    this.element.classList.add(...classList);
  }

  public get node(): HTMLElementTagNameMap[T] | HTMLElement {
    return this.element;
  }

  public clearNode() {
    while (this.element.firstChild) this.element.firstChild.remove();
  }

  public deleteNode() {
    this.element.remove();
  }
}