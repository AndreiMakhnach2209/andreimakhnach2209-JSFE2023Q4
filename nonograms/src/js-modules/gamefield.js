import styles from '../css-modules/gamefield-styles.css';
import missions from '../assets/missions/missions.js';
import { timer, isSound } from './control-panel.js';
import openModale from './modale.js';
import addCross from './close-button.js';
import click from '../assets/audio/click.wav';
import win from '../assets/audio/win.wav';

export default function (level, index, savedData, isSaved = false) {
  const container = document.createElement('div');
  container.className = styles.container;
  container.classList.add(styles[`container_${level}`]);
  const matrix = missions[level][index];
  const range = matrix.length;

  const field = document.createElement('div');
  field.className = styles.field;
  field.classList.add(styles[`field_${level}`]);
  container.append(field);
  field.addEventListener('pointerdown', timer.start.bind(timer), {
    once: true,
  });

  const audioStroke = new Audio(click);
  let observer = new MutationObserver(() => {
    if (isSound) audioStroke.play();
    if (gameOver() && document.getElementById('solution').disabled === false) {
      container.after(gameOver());
      const audioWin = new Audio(win);
      if (isSound) audioWin.play();
      saveResult(level, timer.value);
    }
  });

  for (let i = 0; i < range; i++) {
    for (let j = 0; j < range; j++) {
      const unit = document.createElement('div');
      unit.className = styles.unit;
      unit.setAttribute('data-solution', matrix[i][j] ? 'true' : 'false');
      unit.setAttribute('data-black', isSaved ? savedData[i][j].black : 'false');
      unit.setAttribute('data-crossed', isSaved ? savedData[i][j].crossed : 'false');
      const cross = addCross();
      cross.classList.add(styles.cross);
      unit.append(cross);
      observer.observe(unit, { attributes: true });
      field.append(unit);
    }
  }

  const clueVerticale = [];
  const clueHorizontale = [];

  for (let i = 0; i < range; i++) {
    const row = [];
    const coloumn = [];
    for (let j = 0; j < range; j++) {
      row.push(matrix[i][j]);
      coloumn.push(matrix[j][i]);
    }
    clueVerticale.push(fillClueRow(coloumn).length ? fillClueRow(coloumn) : [0]);
    clueHorizontale.push(fillClueRow(row).length ? fillClueRow(row) : [0]);
  }

  const aside = createClue(clueHorizontale);
  const header = createClue(clueVerticale);
  [aside.className, header.className] = [styles.aside_field, styles.header_field];

  container.append(aside, header);
  gameHandler(field);

  setTimeout(() => {
    document.getElementById('save_game').addEventListener('click', () => {
      if (isSound) audioStroke.play();
      const units = document.querySelectorAll('.' + styles.unit);
      const saveMatrix = [];
      for (let i = 0; i < range; i++) {
        const row = [];
        for (let j = 0; j < range; j++) {
          const unit = units[i * range + j];
          row.push(unit.dataset);
        }
        saveMatrix.push(row);
      }
      localStorage.setItem(
        'save',
        JSON.stringify({ matrix: saveMatrix, time: timer.value, level: level, index: index })
      );
      document.getElementById('continue_last_game').disabled = false;
    });
  }, 0);

  return container;
}

function fillClueRow(row) {
  return row
    .join('')
    .split(/0+/)
    .filter((item) => item)
    .map((item) => item.length);
}

function createClue(matrix) {
  const wrap = document.createElement('div');
  for (let rowValues of matrix) {
    const row = document.createElement('div');
    row.className = styles.clue_row;
    for (let value of rowValues) {
      const unit = document.createElement('div');
      unit.className = styles.unit;
      row.append(unit);
      const span = document.createElement('span');
      span.innerText = value;
      unit.append(span);
    }
    wrap.append(row);
  }
  return wrap;
}

function gameHandler(parrent) {
  parrent.addEventListener('click', (event) => {
    const target = event.target.closest('.' + styles.unit);
    if (target) {
      target.dataset.black = target.dataset.black === 'true' ? 'false' : 'true';
      target.dataset.crossed = 'false';
    }
  });
  parrent.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    const target = event.target.closest('.' + styles.unit);
    if (target) {
      target.dataset.crossed = target.dataset.crossed === 'true' ? 'false' : 'true';
      target.dataset.black = 'false';
    }
  });

  // let pointerIsDown = false;
  // let firstTargetIsMarked = false;
  // parrent.addEventListener('pointerdown', (event) => {
  //   console.log(event);
  //   const target = event.target.closest('.' + styles.unit);
  //   switch (event.buttons) {
  //     case 1:
  //       if (target) {
  //         firstTargetIsMarked = target.dataset.black === 'true' ? true : false;
  //         target.dataset.black = firstTargetIsMarked ? 'false' : 'true';
  //         target.dataset.crossed = 'false';
  //         pointerIsDown = true;
  //       }
  //       break;
  //     case 2:
  //       if (target) {
  //         firstTargetIsMarked = target.dataset.crossed === 'true' ? true : false;
  //         target.dataset.crossed = firstTargetIsMarked ? 'false' : 'true';
  //         target.dataset.black = 'false';
  //         pointerIsDown = true;
  //       }
  //       break;
  //   }
  // });
  // parrent.addEventListener('pointerover', (event) => {
  //   const target = event.target.closest('.' + styles.unit);
  //   switch (event.buttons) {
  //     case 1:
  //       if (pointerIsDown && target) {
  //         target.dataset.black = firstTargetIsMarked ? 'false' : 'true';
  //         target.dataset.crossed = 'false';
  //       }
  //       break;
  //     case 2:
  //       if (pointerIsDown && target) {
  //         target.dataset.crossed = firstTargetIsMarked ? 'false' : 'true';
  //         target.dataset.black = 'false';
  //       }
  //       break;
  //   }
  // });
  // parrent.addEventListener('pointerup', () => {
  //   pointerIsDown = false;
  // });
  // parrent.addEventListener('pointerout', (event) => {
  //   pointerIsDown = event.target === parrent ? false : pointerIsDown;
  // });
}

function gameOver() {
  const correctCells = Array.from(document.querySelectorAll('[data-solution = true]'));
  if (
    correctCells.every((item) => item.dataset.black === 'true') &&
    correctCells.length === document.querySelectorAll('[data-black = true]').length
  ) {
    timer.pause();
    setTimeout(() => {
      ['solution', 'save_game', 'reset_game'].forEach(
        (item) => (document.getElementById(item).disabled = true)
      );
    }, 0);
    return openModale('game_over');
  }
}

function saveResult(level, time) {
  const date = new Date();
  if (!localStorage.last) localStorage.setItem('last', JSON.stringify([]));
  const table = JSON.parse(localStorage.getItem('last'));
  table.push([date, level, time]);
  while (table.length > 5) table.shift();
  localStorage.setItem('last', JSON.stringify(table));
  document.getElementById('latest_wins').disabled = false;
}
