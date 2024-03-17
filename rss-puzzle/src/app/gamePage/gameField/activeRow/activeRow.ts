import Container from '../../../../components/container';
import Word from '../../../../components/word/word';
import { sourceBlock } from '../components/puzzle';
import styles from './activeRow.module.scss';

export class ActiveRow extends Container {
  public wordCollection: Word[] = [];

  constructor(words: string) {
    super([styles.wordRow]);
    this.wordCollection = words.split(' ').map((word) => {
      const card = new Word(word);
      return card;
    });
    this.wordCollection.forEach((card) => {
      this.append(card);
    });
  }

  private moving(word: Word) {
    word.addEventListener(
      'click',
      () => {
        word.addClass(styles.moving);
        this.append(word);
        word.addEventListener(
          'click',
          () => {
            word.addClass(styles.movingReverse);
            sourceBlock.append(word);
            this.moving(word);
          },
          true
        );
      },
      true
    );
    word.addEventListener('animationend', () =>
      word.removeClass(styles.moving, styles.movingReverse)
    );
  }

  public toSource() {
    while (this.wordCollection.length)
      this.wordCollection.forEach((word, index) => {
        if (Math.random() < 0.5) {
          sourceBlock.append(word);
          this.wordCollection.splice(index, 1);
          this.moving(word);
        }
      });
  }

  public fixHeigth() {
    const parent = this.element.offsetParent;
    const parentHeight = parent?.clientHeight;
    if (parentHeight) this.element.style.height = `${parentHeight / 10}px`;
    return parentHeight ? parentHeight / 10 : 0;
  }
}
