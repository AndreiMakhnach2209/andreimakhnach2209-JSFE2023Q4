import Page from '../../components/page/page';
import { header } from './components/header/header';
import styles from './gamePage.module.scss';
import { startBtn } from './components/startBtn/startBtn';
import { greeting } from './components/header/greeting/greeting';
import GameField from './gameField/gameField';
import { continueBtn } from './components/continueBtn/continueBtn';
import { ClassList } from '../../types/index';
import BaseElement from '../../components/baseElement';
import { ActiveRow } from './gameField/activeRow/activeRow';
import { checkBtn } from './components/checkBtn/checkBtn';

class GamePage extends Page {
  public gameField: GameField;

  public numberRound = 0;

  public numberLevel = 0;

  constructor(
    classList: ClassList,
    ...children: BaseElement<keyof HTMLElementTagNameMap>[]
  ) {
    super(classList, ...children);
    this.gameField = new GameField(this.numberLevel, this.numberRound);
    this.numberRound += 1;
  }

  public start(): void {
    super.start();
    this.element.append(greeting.greet());
  }

  public nextRound(
    round: number = this.numberRound,
    level: number = this.numberLevel
  ) {
    this.gameField.deleteNode();
    if (this.gameField.numberOfrounds >= round) {
      this.numberLevel += 1;
      this.numberRound = 0;
      this.gameField = new GameField(this.numberLevel, this.numberRound);
    } else this.gameField = new GameField(level, round);
    continueBtn.before(this.gameField);
    this.gameField.addNextActiveRow();
    this.numberRound += 1;
  }
}

const gamePage = new GamePage([styles.gamePage], header, startBtn);

startBtn.addEventListener('click', () => {
  startBtn.addClass(styles.hidden);
  startBtn.addEventListener(
    'transitionend',
    () => {
      startBtn.addClass(styles.noDisplay);
      startBtn.removeClass(styles.hidden);
      gamePage.append(gamePage.gameField, continueBtn, checkBtn);
      gamePage.gameField.addNextActiveRow();
    },
    true
  );
});

continueBtn.addEventListener('click', () => {
  continueBtn.disabled = true;
  if (gamePage.gameField.wordsNumber >= ActiveRow.numberOfWordsInRound)
    gamePage.nextRound();
  else gamePage.gameField.addNextActiveRow();
});

export { gamePage };
