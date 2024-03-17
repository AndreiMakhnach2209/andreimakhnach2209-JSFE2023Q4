export default class Listener {
  constructor(
    eventType: keyof HTMLElementEventMap,
    callback: (event: Event) => void,
    element: HTMLElement,
    isOnse?: boolean
  ) {
    element.addEventListener(eventType, callback, { once: isOnse });
  }
}
