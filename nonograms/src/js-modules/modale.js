import styles from '../css-modules/modale.css';
import stylesSketch from '../css-modules/gamefield-styles.css';
import missions from '../assets/missions/missions.js';
import createGamefield from './gamefield.js';

export default function (event) {
  const container = document.createElement('div');
  container.className = styles.backdrop;

  const modale = document.createElement('div');
  modale.className = styles.modale;
  container.append(modale);
  switch (event.target.id) {
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

function closeModale() {
  const modale = document.querySelector('.' + styles.backdrop);
  modale.remove();
}

function refreshBtns() {
  ['score', 'save_game', 'load_game', 'new_game', 'random_game', 'solution'].forEach((item) => {
    document.getElementById(item).disabled = false;
  });
}
