import styles from '../css-modules/gamefield-styles.css';
import missions from '../assets/missions/missions.js';
import { timer, isSound } from './control-panel.js';

export default function () {
  const container = document.createElement('div');
  container.className = styles.container;

  const currentMatrix = missions.easy[Math.floor(Math.random() * 5)];
  let range = currentMatrix.length;

  const field = document.createElement('div');
  field.className = styles.field;
  field.classList.add(styles.field_easy);
  container.append(field);
  field.addEventListener('pointerdown', timer.start.bind(timer), {
    once: true,
  });

  const audioStroke = document.createElement('audio');
  audioStroke.setAttribute('src', '../src/assets/audio/click.wav');
  let observer = new MutationObserver(() => {
    if (isSound) audioStroke.play();
  });

  for (let i = 0; i < range; i++) {
    for (let j = 0; j < range; j++) {
      const unit = document.createElement('div');
      unit.className = styles.unit;
      unit.setAttribute('data-solution', currentMatrix[i][j] ? 'true' : 'false');
      unit.setAttribute('data-black', 'false');
      unit.setAttribute('data-crossed', 'false');
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
      row.push(currentMatrix[i][j]);
      coloumn.push(currentMatrix[j][i]);
    }
    clueVerticale.push(fillClueRow(coloumn));
    clueHorizontale.push(fillClueRow(row));
  }

  const aside = createClue(clueHorizontale);
  const header = createClue(clueVerticale);
  [aside.className, header.className] = [styles.aside_field, styles.header_field];

  container.append(aside, header);
  gameHandler(field);

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
  let pointerIsDown = false;
  let firstTargetIsMarked = false;
  parrent.addEventListener('pointerdown', (event) => {
    switch (event.button) {
      case 0:
        if (event.target.hasAttribute('data-black')) {
          firstTargetIsMarked = event.target.dataset.black === 'true' ? true : false;
          event.target.dataset.black = firstTargetIsMarked ? 'false' : 'true';
          event.target.dataset.crossed = 'false';
          pointerIsDown = true;
        }
        break;
      case 2:
        if (event.target.hasAttribute('data-crossed')) {
          firstTargetIsMarked = event.target.dataset.crossed === 'true' ? true : false;
          event.target.dataset.crossed = firstTargetIsMarked ? 'false' : 'true';
          event.target.dataset.black = 'false';
          pointerIsDown = true;
        }
        break;
    }
  });
  parrent.addEventListener('pointerover', (event) => {
    switch (event.buttons) {
      case 1:
        if (pointerIsDown && event.target.hasAttribute('data-black')) {
          event.target.dataset.black = firstTargetIsMarked ? 'false' : 'true';
          event.target.dataset.crossed = 'false';
        }
        break;
      case 2:
        if (pointerIsDown && event.target.hasAttribute('data-crossed')) {
          event.target.dataset.crossed = firstTargetIsMarked ? 'false' : 'true';
          event.target.dataset.black = 'false';
        }
        break;
    }
  });
  parrent.addEventListener('pointerup', () => {
    pointerIsDown = false;
  });
  parrent.addEventListener('pointerout', (event) => {
    pointerIsDown = event.target === parrent ? false : pointerIsDown;
  });
}
