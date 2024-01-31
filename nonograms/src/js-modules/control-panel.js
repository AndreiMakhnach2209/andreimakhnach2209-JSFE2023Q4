import styles from '../css-modules/control-panel.css';
import Timer from './timer.js';
import themes from './themes.js';

const container = document.createElement('div');
container.className = styles.container;

const timerWrap = document.createElement('div');
timerWrap.className = styles.timer_wrap;
container.append(timerWrap);

const timer = new Timer();
timer.node.className = styles.timer;
timerWrap.append(timer.node);
const themesForm = themes.create();
container.append(themesForm);

const btns = [
  'score',
  'sound',
  'save_game',
  'load_game',
  'new_game',
  'solution',
].map((item) => {
  const btn = document.createElement('button');
  btn.className = styles.btn;
  btn.value = item;
  btn.innerText = item.split('_').join(' ');
  container.append(btn);
  return btn;
});

export { container, timer, btns };
