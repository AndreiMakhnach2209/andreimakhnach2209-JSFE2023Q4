import BaseTextElement from '../baseTextElement';
import Container from '../container';
import styles from './word.module.scss';

export default class Word extends Container {
  private textNode = new BaseTextElement('span', []);

  constructor(private text: string) {
    super([styles.wordCard]);
    this.textNode.text = text;
    this.append(this.textNode);
  }

  public setWidth(width: number = 0) {
    this.element.style.width = `${width}px`;
  }

  public setHeight(height: number = 0) {
    this.element.style.height = `${height}px`;
  }

  public get textContent() {
    return this.textNode.node.textContent
      ? this.textNode.node.textContent
      : ' ';
  }
}
