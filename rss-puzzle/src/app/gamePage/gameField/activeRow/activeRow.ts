import BaseElement from '../../../../components/baseElement';
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

  private isDisable = false;

  constructor(private words: string) {
    super([styles.wordRow]);
    this.wordCollection = new WordCollection(
      ...words.split(' ').map((word) => new Word(word))
    );
    this.wordCollectionLenght = this.wordCollection.length;
    this.wordCollection.forEach((card) => {
      if (card) this.append(card);
    });
  }

  public append(
    ...children: (BaseElement<keyof HTMLElementTagNameMap> | null)[]
  ): void {
    children.forEach((item) => {
      if (item) this.element.append(item.node);
      else {
        const emptyCard = new Word('-');
        emptyCard.addClass(styles.emptyCard);
        const widthEmpty = () =>
          (this.element.clientWidth -
            this.wordCollection.reduce(
              (summ: number, word) => (word ? word.node.clientWidth : 1),
              0
            )) /
          this.wordCollectionLenght;
        emptyCard.node.style.width = `${widthEmpty()}px`;
        this.element.append(emptyCard.node);
        window.addEventListener('resize', () => {
          emptyCard.node.style.width = `${widthEmpty()}px`;
        });
      }
    });
  }

  private moving(word: Word) {
    word.addEventListener(
      'click',
      () => {
        word.addClass(styles.moving);
        word.removeClass(styles.selected);
        const indexNull = this.wordCollection.indexOf(null);
        if (indexNull === -1) {
          this.append(word);
          this.wordCollection.push(word);
        } else {
          this.wordCollection[indexNull] = word;
          word.addEventListener('animationend', () => this.update(), true);
        }
        if (this.exampleTest() && word) {
          continueBtn.disabled = false;
          this.disabled = true;
        } else
          word.addEventListener(
            'click',
            () => {
              if (!this.isDisable) {
                word.addClass(styles.movingReverse, styles.selected);
                sourceBlock.append(word);
                this.wordCollection.remove(word);
                this.update();
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

  private update() {
    this.clearNode();
    this.append(...this.wordCollection);
  }

  public toSource() {
    while (this.wordCollection.length)
      this.wordCollection.forEach((word, index) => {
        if (Math.random() < 0.5 && word) {
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
        this.wordCollection.map((word) => word?.textContent).join(' ')
    )
      return true;
    return false;
  }

  private set disabled(value: boolean) {
    this.addClass(styles.disabled);
    this.isDisable = true;
    window.addEventListener('resize', () => {
      this.element.style.height = `${this.fixHeigth()}px`;
    });
  }
}
