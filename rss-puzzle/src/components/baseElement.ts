import { ClassList } from '../types/index';
import Listener from '../types/listener';

export default abstract class BaseElement<
  T extends keyof HTMLElementTagNameMap,
> {
  protected element: HTMLElementTagNameMap[T];

  public children: BaseElement<keyof HTMLElementTagNameMap>[] = [];

  constructor(
    tagName: T,
    classList: ClassList,
    ...children: BaseElement<keyof HTMLElementTagNameMap>[]
  ) {
    this.element = document.createElement(tagName);
    if (children) this.append(...children);
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

  public addClass(...classList: ClassList) {
    this.element.classList.add(...classList);
  }

  public removeClass(...classList: ClassList) {
    this.element.classList.remove(...classList);
  }

  public append(...children: BaseElement<keyof HTMLElementTagNameMap>[]) {
    children.forEach((child) => {
      this.children.push(child);
      this.element.append(child.node);
    });
  }

  public before(...children: BaseElement<keyof HTMLElementTagNameMap>[]) {
    children.forEach((item) => this.element.before(item.node));
  }

  public addEventListener = (
    eventType: keyof HTMLElementEventMap,
    callback: (event: Event) => void,
    isOnce?: boolean | undefined
  ) => new Listener(eventType, callback, this.element, isOnce);
}
