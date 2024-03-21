import Container from '../../../components/container';
import { Round } from '../../../types/index';
import gettingData from '../../../utilits/gettingData';
import { ActiveRow } from './activeRow/activeRow';
import styles from './gameField.module.scss';
import { sourceBlock, puzzleBlock, hint } from './components/puzzle';
import BaseTextElement from '../../../components/baseTextElement';

export default class GameField extends Container {
  public wordsNumber: number = 0;

  public numberOfrounds: number;

  private data: Round;

  private activeRow: ActiveRow | null = null;

  private hint = hint.children[0];

  constructor(level: number, round: number) {
    super([styles.gameField], hint, puzzleBlock, sourceBlock);
    puzzleBlock.clearNode();
    this.data = gettingData(level).rounds[round];
    this.numberOfrounds = gettingData(level).rounds.length;
  }

  public addNextActiveRow(wordsNumber: number = this.wordsNumber) {
    const example = this.data.words[wordsNumber].textExample;
    this.activeRow = new ActiveRow(example);
    if (this.hint instanceof BaseTextElement)
      this.hint.text = this.data.words[wordsNumber].textExampleTranslate;
    puzzleBlock.node.append(this.activeRow.node);
    this.sizeSinchro(example);
    this.activeRow.toSource();
    this.wordsNumber += 1;
  }

  private sizeSinchro(example: string) {
    this.activeRow?.fixHeigth();
    const numberOfCharInExample = example
      .split('')
      .filter((char) => char !== ' ').length;
    this.activeRow?.wordCollection.forEach((word) => {
      const numberOfCharInWord = word ? word.textContent.length : 1;
      word?.setHeight(this.activeRow?.fixHeigth());
      if (this.activeRow)
        word?.setWidth(
          this.activeRow.node.clientWidth *
            (numberOfCharInWord / numberOfCharInExample) -
            2
        );
      window.addEventListener('resize', () => {
        word?.setHeight(this.activeRow?.fixHeigth());
        if (this.activeRow)
          word?.setWidth(
            this.activeRow.node.clientWidth *
              (numberOfCharInWord / numberOfCharInExample)
          );
      });
    });
  }
}
