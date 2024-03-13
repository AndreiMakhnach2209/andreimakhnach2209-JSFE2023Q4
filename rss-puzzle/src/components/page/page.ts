import Container from '../container';

export default class Page extends Container {
  public start() {
    document.querySelector('body')?.append(this.element);
  }

  public stop() {
    this.element.remove();
  }
}
