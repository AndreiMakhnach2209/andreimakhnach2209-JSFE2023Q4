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

  public fixWidth() {
    this.element.style.width = `${this.element.clientWidth}px`;
  }

  public setHeight(height: number = 0) {
    this.element.style.height = `${height}px`;
  }
}
