import styles from '../css-modules/modale.css';
import stylesSketch from '../css-modules/gamefield-styles.css';
import missions from '../assets/missions/missions.js';
import createGamefield from './gamefield.js';
import { timer } from './control-panel.js';
import createCloseBtn from './close-button.js';
import stroke from '../assets/audio/stroke_long.wav';
import click from '../assets/audio/click.wav';
import { isSound } from './control-panel.js';
import Timer from './timer.js';

export default function (id) {
  const container = document.createElement('div');
  container.className = styles.backdrop;
  container.addEventListener('click', closeModale);

  const modale = document.createElement('div');
  modale.className = styles.modale;
  container.append(modale);
  const closeBtn = createCloseBtn('button');
  closeBtn.classList.add(styles.close_btn);
  closeBtn.addEventListener('click', closeModale);
  modale.append(closeBtn);
  switch (id) {
    case 'new_game':
      {
        const chooseLevelGameForm = document.createElement('form');
        chooseLevelGameForm.addEventListener('change', () => {
          if (isSound) new Audio(click).play();
        });
        chooseLevelGameForm.className = styles.level_form;
        chooseLevelGameForm.setAttribute('name', 'choosing_level');
        modale.append(chooseLevelGameForm);
        const formTitle = document.createElement('legend');
        formTitle.className = styles.form_title;
        formTitle.innerText = 'Choose level:';
        chooseLevelGameForm.append(formTitle);
        Object.keys(missions).forEach((level) => {
          const btnLevel = document.createElement('input');
          btnLevel.setAttribute('type', 'radio');
          btnLevel.setAttribute('id', `${level}_level`);
          btnLevel.setAttribute('name', `level`);
          btnLevel.setAttribute('checked', 'true');
          btnLevel.className = styles.btn_level;
          chooseLevelGameForm.append(btnLevel);
          const labelLevel = document.createElement('label');
          labelLevel.className = styles.label_level;
          labelLevel.setAttribute('for', `${level}_level`);
          chooseLevelGameForm.append(labelLevel);
          const labelText = document.createElement('span');
          labelText.innerText = level;
          labelLevel.append(labelText);
          const sketchsWrap = document.createElement('div');
          sketchsWrap.className = styles.sketchs_wrap;
          labelLevel.append(sketchsWrap);
          missions[level].forEach((item, index) => {
            sketchsWrap.append(createSketch(level, index));
          });
        });
      }
      break;
    case 'game_over':
      {
        const congrat = document.createElement('p');
        congrat.className = styles.modale_text;
        congrat.innerText = `Great! You have solved the nonogram in ${timer.value} seconds!`;
        modale.append(congrat);
      }
      break;
    case 'random_game':
      {
        const levels = Object.keys(missions);
        const level = levels[Math.floor(Math.random() * levels.length)];
        const i = Math.floor(Math.random() * missions[level].length);
        resetGame(level, i);
        refreshBtns();
      }
      break;
    case 'continue_last_game':
      {
        const saving = JSON.parse(localStorage.getItem('save'));
        resetGame(null, null, saving, true);
        refreshBtns();
      }
      break;
    case 'latest_wins':
      {
        const tableWinsNode = document.createElement('table');
        tableWinsNode.className = styles.table_win;
        const tableHead = document.createElement('thead');
        const tableHeadRow = document.createElement('tr');
        tableHead.append(tableHeadRow);
        tableWinsNode.append(tableHead);
        ['Position', 'Date', 'Level', 'Time'].forEach((item) => {
          const tableHeadItem = document.createElement('th');
          tableHeadItem.innerText = item;
          tableHeadRow.append(tableHeadItem);
        });

        const tableBody = document.createElement('tbody');
        tableWinsNode.append(tableBody);
        const tableWin = JSON.parse(localStorage.getItem('last'));
        tableWin
          .sort((a, b) => a[2] - b[2])
          .map((item, index) => [index + 1].concat(item))
          .forEach((item) => {
            const tableBodyRow = document.createElement('tr');
            tableBody.append(tableBodyRow);
            let [position, date, level, time] = item;
            [position, new Date(date).toLocaleString(), level, new Timer().secToMMSS(time)].forEach(
              (data) => {
                const tableBodyItem = document.createElement('td');
                tableBodyItem.innerText = data;
                tableBodyRow.append(tableBodyItem);
              }
            );
          });
        modale.append(tableWinsNode);
      }
      break;

    default:
      break;
  }
  return container;
}

function createSketch(level, i) {
  const matrix = missions[level][i];
  const range = matrix.length;

  const field = document.createElement('div');
  field.className = stylesSketch.field;
  field.classList.add(stylesSketch[`field_${level}`], styles.sketch);
  field.addEventListener('click', () => {
    if (isSound) {
      new Audio(stroke).play();
    }
    resetGame(level, i);
    refreshBtns();
    closeModale();
  });

  for (let i = 0; i < range; i++) {
    for (let j = 0; j < range; j++) {
      const unit = document.createElement('div');
      unit.className = stylesSketch.unit;
      unit.setAttribute('data-black', matrix[i][j] ? 'true' : 'false');
      field.append(unit);
    }
  }
  return field;
}

function resetGame(level, index, saving, isSaved) {
  timer.reset(saving ? saving.time : 0);
  const oldGamefield = document.querySelector('.' + stylesSketch.container);
  const newGamefield = saving
    ? createGamefield(saving.level, saving.index, saving.matrix, isSaved)
    : createGamefield(level, index);
  oldGamefield.replaceWith(newGamefield);
}

function closeModale(event = null) {
  const modale = document.querySelector('.' + styles.backdrop);
  if (event) {
    if (event.target === event.currentTarget) modale.remove();
  } else {
    modale.remove();
  }
}

function refreshBtns() {
  ['latest_wins', 'save_game', 'new_game', 'random_game', 'solution', 'reset_game'].forEach(
    (item) => {
      document.getElementById(item).disabled = false;
    }
  );
}
