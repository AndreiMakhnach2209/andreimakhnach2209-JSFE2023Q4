import styles from '../css-modules/control-panel.css';
import { Timer } from './timer.js';

const container = document.createElement('div');
container.className = styles.container;

const timerWrap = document.createElement('div');
timerWrap.className = styles.timer_wrap;
container.append(timerWrap);

const timer = new Timer();
timer.node.className = styles.timer;
console.log(timer.node);
timerWrap.append(timer.node);

export { container, timer };
