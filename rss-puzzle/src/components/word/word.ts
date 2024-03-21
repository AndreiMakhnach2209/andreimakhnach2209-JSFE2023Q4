import BaseTextElement from '../baseTextElement';
import Container from '../container';
import styles from './word.module.scss';

export default class Word extends Container {
  constructor(private text: string) {
    super([styles.wordCard]);
    const textNode = new BaseTextElement('span', []);
    textNode.text = text;
    this.append(textNode);
    this.element.draggable = true;
  }

  public setWidth(width: number = 0) {
    this.element.style.width = `${width}px`;
  }

  public setHeight(height: number = 0) {
    this.element.style.height = `${height}px`;
  }

  public get textContent() {
    return this.text;
  }
}
