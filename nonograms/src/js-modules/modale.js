import styles from '../css-modules/modale.css';
import stylesSketch from '../css-modules/gamefield-styles.css';
import missions from '../assets/missions/missions.js';
import createGamefield from './gamefield.js';
import { timer } from './control-panel.js';
import createCloseBtn from './close-button.js';

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

function resetGame(level, index) {
  const oldGamefield = document.querySelector('.' + stylesSketch.container);
  const newGamefield = createGamefield(level, index);
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
  ['score', 'save_game', 'load_game', 'new_game', 'random_game', 'solution'].forEach((item) => {
    document.getElementById(item).disabled = false;
  });
}
