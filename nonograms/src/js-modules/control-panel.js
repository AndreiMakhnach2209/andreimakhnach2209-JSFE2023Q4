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

['score', 'sound', 'save_game', 'load_game', 'new_game', 'random_game', 'solution'].forEach(
  (item) => {
    const btn = document.createElement('button');
    btn.className = styles.btn;
    btn.value = item;
    btn.innerText = item.split('_').join(' ');
    btn.setAttribute('id', item);
    container.append(btn);
  }
);

let isSound = true;
const soundClick = document.createElement('audio');
soundClick.setAttribute('src', '../src/assets/audio/click.wav');
const soundLong = document.createElement('audio');
soundLong.setAttribute('src', '../src/assets/audio/stroke_long.wav');

setTimeout(() => {
  const btnSolution = document.getElementById('solution');
  btnSolution.addEventListener('click', () => {
    if (isSound) soundLong.play();
    showSolution();
    btnSolution.disabled = true;
  });

  const btnSound = document.getElementById('sound');
  btnSound.dataset.active = isSound;
  btnSound.addEventListener('click', () => {
    isSound = isSound ? false : true;
    btnSound.dataset.active = isSound;
    if (isSound) soundClick.play();
  });

  const btnNewGame = document.getElementById('new_game');
  btnNewGame.addEventListener('click', () => {
    if (isSound) soundLong.play();
    container.after(modale());
  });
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

export { container, timer, isSound };
