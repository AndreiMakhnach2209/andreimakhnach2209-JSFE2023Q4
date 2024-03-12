export default class Listener {
  constructor(
    eventType: keyof HTMLElementEventMap,
    callback: (event: Event) => void,
    element: HTMLElement
  ) {
    element.addEventListener(eventType, callback);
  }
}
