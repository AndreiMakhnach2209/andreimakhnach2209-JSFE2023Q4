import Container from '../../../components/container';
import { Round } from '../../../types/index';
import gettingData from '../../../utilits/gettingData';
import { ActiveRow } from './activeRow/activeRow';
import styles from './gameField.module.scss';
import { sourceBlock, puzzleBlock, hint } from './components/puzzle';
import BaseTextElement from '../../../components/baseTextElement';

export default class GameField extends Container {
  private wordsNumber: number = 0;

  private roundNumber: number;

  private data: Round;

  private activeRow: ActiveRow | null = null;

  private hint = hint.children[0];

  constructor(level: number, round: number) {
    super([styles.gameField], hint, puzzleBlock, sourceBlock);
    this.roundNumber = round;
    this.data = gettingData(level).rounds[round];
  }

  public addNextActiveRow() {
    this.activeRow = new ActiveRow(
      this.data.words[this.roundNumber].textExample
    );
    if (this.hint instanceof BaseTextElement)
      this.hint.text = this.data.words[this.roundNumber].textExampleTranslate;
    puzzleBlock.node.append(this.activeRow.node);
    this.activeRow.fixHeigth();
    this.activeRow.wordCollection.forEach((word) => {
      word.fixWidth();
      word.setHeight(this.activeRow?.fixHeigth());
      window.addEventListener('resize', () => {
        word.setHeight(this.activeRow?.fixHeigth());
      });
    });
    this.activeRow.toSource();
    this.wordsNumber += 1;
  }
}
