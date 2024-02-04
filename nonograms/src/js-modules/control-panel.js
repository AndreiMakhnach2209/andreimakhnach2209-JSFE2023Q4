import styles from '../css-modules/control-panel.css';
import Timer from './timer.js';
import themes from './themes.js';
import modale from './modale.js';

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
  'reset_game',
].forEach((item) => {
  const btn = document.createElement('button');
  btn.className = styles.btn;
  btn.value = item;
  btn.innerText = item.split('_').join(' ');
  btn.setAttribute('id', item);
  container.append(btn);
});

let isSound = true;
const soundClick = document.createElement('audio');
soundClick.setAttribute('src', '../src/assets/audio/click.wav');
const soundLong = document.createElement('audio');
soundLong.setAttribute('src', '../src/assets/audio/stroke_long.wav');

setTimeout(() => {
  const btnSolution = document.getElementById('solution');
  btnSolution.addEventListener('click', () => {
    btnSolution.disabled = true;
    if (isSound) soundLong.play();
    showSolution();
  });

  const btnSound = document.getElementById('sound');
  btnSound.dataset.active = isSound;
  btnSound.addEventListener('click', () => {
    isSound = isSound ? false : true;
    btnSound.dataset.active = isSound;
    if (isSound) soundClick.play();
  });

  ['score', 'new_game'].forEach((btnId) => {
    const btn = document.getElementById(btnId);
    btn.addEventListener('click', (event) => {
      if (isSound) soundLong.play();
      container.after(modale(event.target.id));
    });
  });

  const resetBtn = document.getElementById('reset_game');
  resetBtn.addEventListener('click', resetGame);
}, 0);

function showSolution() {
  timer.pause();
  for (let cell of document.querySelectorAll('[data-solution]')) {
    cell.dataset.crossed = false;
    cell.dataset.black = false;
    cell.classList.add(styles.unit_disabled);
    cell.addEventListener('pointerout', (event) => {
      let isSoundTemp = isSound;
      isSound = false;
      event.currentTarget.dataset.black = event.currentTarget.dataset.solution;
      event.currentTarget.dataset.crossed = false;
      setTimeout(() => (isSound = isSoundTemp), 0);
    });
  }
  for (let cell of document.querySelectorAll('[data-solution = true]')) {
    cell.dataset.black = true;
  }
  document.getElementById('save_game').disabled = true;
}

function resetGame() {
  for (let cell of document.querySelectorAll('[data-black = true]')) cell.dataset.black = false;
  for (let cell of document.querySelectorAll('[data-crossed = true]')) cell.dataset.crossed = false;
  timer.pause();
  timer.start();
}

export { container, timer, isSound };
