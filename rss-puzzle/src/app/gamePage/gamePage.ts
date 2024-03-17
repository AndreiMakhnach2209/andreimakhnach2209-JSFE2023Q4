import Page from '../../components/page/page';
import { header } from './components/header/header';
import styles from './gamePage.module.scss';
import { startBtn } from './components/startBtn/startBtn';
import { greeting } from './components/header/greeting/greeting';
import GameField from './gameField/gameField';

class GamePage extends Page {
  public start(): void {
    super.start();
    this.element.append(greeting.greet());
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
      const gameField = new GameField(0, 0);
      gamePage.append(gameField);
      gameField.addNextActiveRow();
    },
    true
  );
});

export { gamePage };
