import Page from '../../components/page/page';
import { header } from './components/header/header';
import styles from './gamePage.module.scss';
import { startBtn } from './components/startBtn/startBtn';
import { greeting } from './components/header/greeting/greeting';

class GamePage extends Page {
  public start(): void {
    super.start();
    this.element.append(greeting.greet());
  }
}

const gamePage = new GamePage([styles.gamePage], header.node, startBtn.node);

export { gamePage };
