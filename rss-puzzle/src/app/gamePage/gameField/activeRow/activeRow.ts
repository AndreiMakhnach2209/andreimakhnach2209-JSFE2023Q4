import Container from '../../../../components/container';
import Word from '../../../../components/word/word';
import WordCollection from '../../../../components/word/wordCollection';
import { continueBtn } from '../../components/continueBtn/continueBtn';
import { sourceBlock } from '../components/puzzle';
import styles from './activeRow.module.scss';

export class ActiveRow extends Container {
  public static numberOfWordsInRound = 10;

  public wordCollection: WordCollection;

  private wordCollectionLenght: number;

  private disabled = false;

  constructor(private words: string) {
    console.log(words);
    super([styles.wordRow]);
    this.wordCollection = new WordCollection(
      ...words.split(' ').map((word) => new Word(word))
    );
    this.wordCollectionLenght = this.wordCollection.length;
    this.wordCollection.forEach((card) => {
      this.append(card);
    });
  }

  private moving(word: Word) {
    word.addEventListener(
      'click',
      () => {
        word.addClass(styles.moving);
        word.removeClass(styles.selected);
        this.append(word);
        this.wordCollection.push(word);
        if (this.exampleTest()) {
          continueBtn.disabled = false;
          this.disabled = true;
          this.addClass(styles.disabled);
        } else
          word.addEventListener(
            'click',
            () => {
              if (!this.disabled) {
                word.addClass(styles.movingReverse, styles.selected);
                sourceBlock.append(word);
                this.wordCollection.remove(word);
                this.moving(word);
              }
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
    return parentHeight ? parentHeight / ActiveRow.numberOfWordsInRound : 0;
  }

  private exampleTest() {
    if (
      this.wordCollection.length === this.wordCollectionLenght &&
      this.words ===
        this.wordCollection.map((word) => word.textContent).join(' ')
    )
      return true;
    return false;
  }
}
