import styles from '../css-modules/gamefield-styles.css';
import missions from '../assets/missions/missions.js';

export default function () {
  const container = document.createElement('div');
  container.className = styles.container;

  const currentMatrix = missions.easy[0];
  let range = currentMatrix.length;

  const field = document.createElement('div');
  field.className = styles.field;
  field.classList.add(styles.field_easy);
  container.append(field);

  for (let i = 0; i < range; i++) {
    for (let j = 0; j < range; j++) {
      const unit = document.createElement('div');
      unit.className = styles.unit;
      // if (currentMatrix[i][j]) unit.classList.add(styles.black); // FOR TEST
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
  [aside.className, header.className] = [
    styles.aside_field,
    styles.header_field,
  ];

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
  let mouseIsDown = false;
  parrent.addEventListener('mousedown', (event) => {
    event.target.classList.toggle(styles.black);
    mouseIsDown = true;
  });
  parrent.addEventListener('mouseover', (event) => {
    if (mouseIsDown) event.target.classList.toggle(styles.black);
  });
  parrent.addEventListener('mouseup', () => {
    mouseIsDown = false;
  });
}
