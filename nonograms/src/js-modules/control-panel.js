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

[
  'score',
  'sound',
  'save_game',
  'load_game',
  'new_game',
  'random_game',
  'solution',
].forEach((item) => {
  const btn = document.createElement('button');
  btn.className = styles.btn;
  btn.value = item;
  btn.innerText = item.split('_').join(' ');
  btn.setAttribute('id', item);
  container.append(btn);
});

setTimeout(() => {
  const btnSolution = document.getElementById('solution');
  btnSolution.addEventListener('click', showSolution);
}, 0);

function showSolution() {
  timer.pause();
  for (let cell of document.querySelectorAll('[data-solution]')) {
    cell.dataset.crossed = false;
    cell.dataset.black = false;
    cell.classList.add(styles.unit_disabled);
    cell.addEventListener('pointerout', (event) => {
      event.currentTarget.dataset.black = event.currentTarget.dataset.solution;
      event.currentTarget.dataset.crossed = false;
    });
  }
  for (let cell of document.querySelectorAll('[data-solution = true]')) {
    cell.dataset.black = true;
  }
  document.getElementById('save_game').disabled = true;
}

export { container, timer };
