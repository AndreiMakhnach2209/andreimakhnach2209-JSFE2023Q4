import BaseElement from '../../../../components/baseElement';
import Container from '../../../../components/container';
import Word from '../../../../components/word/word';
import WordCollection from '../../../../components/word/wordCollection';
import { dropHandler } from '../../../../utilits/dropHandler';
import { resetTranslate, translate } from '../../../../utilits/translate';
import { autoCompleteBtn } from '../../components/autoCompleteBtn/autoCompleteBtn';
import { checkBtn } from '../../components/checkBtn/checkBtn';
import { continueBtn } from '../../components/continueBtn/continueBtn';
import { sourceBlock } from '../components/puzzle';
import styles from './activeRow.module.scss';

export class ActiveRow extends Container {
  public static numberOfWordsInRound = 10;

  public wordCollection: WordCollection;

  private wordCollectionLenght: number;

  private isDisable = false;

  constructor(private example: string) {
    super([styles.wordRow]);
    this.wordCollection = new WordCollection(
      ...example.split(' ').map((word) => new Word(word))
    ).dragNDropInit();
    this.wordCollectionLenght = this.wordCollection.length;
    this.wordCollection.forEach((card) => {
      if (card) {
        this.append(card);
        card.addEventListener('animationend', () =>
          card.removeClass(styles.moving, styles.movingReverse)
        );
      }
    });

    checkBtn.removeClass(styles.noDisplay);
    checkBtn.addEventListener('click', () => {
      if (!this.isDisable) this.checking();
    });
    autoCompleteBtn.addEventListener(
      'click',
      () => {
        this.autoComlete();
      },
      true
    );

    this.addEventListener('dragover', (event) => {
      event.preventDefault();
      if (!this.wordCollection.includes(WordCollection.dropped))
        translate(event);
    });
    this.addEventListener('dragleave', ({ target }) => {
      if (target instanceof HTMLElement && target === this.node)
        resetTranslate(this.node);
    });
    this.addEventListener('drop', (event) => {
      dropHandler(event);
      resetTranslate(this.node);
      this.wordCollection.drop();
      this.update();
      checkBtn.disabled = !(
        this.wordCollection.filter((item) => item).length ===
        this.wordCollectionLenght
      );
      this.exampleTest();
    });
  }

  public append(
    ...children: (BaseElement<keyof HTMLElementTagNameMap> | null)[]
  ): void {
    children.forEach((item) => {
      const empty = this.emptyCard();
      this.element.append(item ? item.node : empty.node);
      this.children.push(item || empty);
    });
  }

  private emptyCard() {
    const empty = new Word('-');
    empty.addClass(styles.emptyCard);
    const widthEmpty =
      (0.5 * this.node.clientWidth) / this.wordCollectionLenght;
    empty.node.style.width = `${widthEmpty}px`;
    window.addEventListener('resize', () => {
      empty.node.style.width = `${widthEmpty}px`;
    });
    empty.node.dataset.isEmpty = 'true';
    empty.node.ondragstart = () => false;
    return empty;
  }

  private moving(word: Word) {
    word.addEventListener('click', ({ currentTarget }) => {
      if (currentTarget instanceof HTMLElement) {
        if (currentTarget.parentElement === sourceBlock.node) {
          this.movingToResult(word);
          checkBtn.disabled = !(
            this.wordCollection.filter((item) => item).length ===
            this.wordCollectionLenght
          );
          this.exampleTest();
        } else if (currentTarget.parentElement === this.node && !this.isDisable)
          this.movingToSource(word);
      }
    });
  }

  private movingToResult(word: Word) {
    word.addClass(styles.moving);
    word.removeClass(styles.selected);
    const indexNull = this.wordCollection.indexOf(null);
    if (indexNull === -1) {
      this.append(word);
      this.wordCollection.push(word);
    } else {
      this.wordCollection[indexNull] = word;
      word.addEventListener('animationend', this.update, true);
    }
  }

  private movingToSource(word: Word) {
    if (!this.isDisable) {
      word.addClass(styles.movingReverse, styles.selected);
      word.removeClass(styles.correct, styles.incorrect);
      checkBtn.disabled = true;
      sourceBlock.append(word);
      this.wordCollection.remove(word);
      this.update();
    }
  }

  private update = () => {
    this.clearNode();
    this.append(...this.wordCollection);
  };

  public toSource(isRandom: boolean = false) {
    while (this.wordCollection.length)
      this.wordCollection.forEach((word, index) => {
        if (Math.random() < 0.5 || isRandom) {
          if (word) sourceBlock.append(word);
          this.wordCollection.splice(index, 1);
          if (!this.isDisable && word) this.moving(word);
        }
      });
    this.update();
  }

  public fixHeigth() {
    const parent = this.element.offsetParent;
    const parentHeight = parent?.clientHeight;
    if (parentHeight)
      this.element.style.height = `${parentHeight / ActiveRow.numberOfWordsInRound}px`;
    return parentHeight ? parentHeight / ActiveRow.numberOfWordsInRound - 4 : 0;
  }

  private exampleTest() {
    if (
      this.wordCollection.length === this.wordCollectionLenght &&
      this.example ===
        this.wordCollection.map((word) => word?.textContent).join(' ')
    ) {
      continueBtn.disabled = false;
      checkBtn.disabled = true;
      checkBtn.addClass(styles.noDisplay);
      this.disabled = true;
      return true;
    }
    return false;
  }

  private set disabled(value: boolean) {
    this.addClass(styles.disabled);
    this.isDisable = value;
    this.children.forEach((child) => {
      const card = child.node;
      card.draggable = false;
    });
    window.addEventListener('resize', () => {
      this.element.style.height = `${this.fixHeigth()}px`;
    });
    this.wordCollection.forEach((word) => {
      word?.removeClass(styles.correct, styles.incorrect);
    });
  }

  private checking() {
    const wordsExample = this.example.split(' ');
    this.wordCollection.forEach((word, index) => {
      if (word?.textContent === wordsExample[index])
        word.addClass(styles.correct);
      else word?.addClass(styles.incorrect);
    });
  }

  private autoComlete() {
    this.disabled = true;
    this.toSource(true);
    const wordCards = sourceBlock.children;
    this.example.split(' ').forEach((word, index) => {
      for (let i = 0; i < wordCards.length; i += 1) {
        const card = wordCards[i];
        if (card instanceof Word && card.textContent === word) {
          setTimeout(() => this.movingToResult(card), 500 * index);
          wordCards.splice(i, 1);
          break;
        }
      }
    });
    checkBtn.addClass(styles.noDisplay);
    checkBtn.disabled = true;
    continueBtn.disabled = false;
  }

  private insertDragWordBefore(word: Word | null) {
    const index = this.wordCollection.indexOf(word);
    this.wordCollection.splice(index, 0, WordCollection.dropped);
  }
}
