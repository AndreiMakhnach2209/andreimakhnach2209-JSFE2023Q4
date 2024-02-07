import styles from '../css-modules/themes.css';
import formStyles from '../css-modules/form-themes.css';
import { isSound } from './control-panel';
import click from '../assets/audio/click.wav';

export default {
  list: new (function () {
    const arr = [];
    for (let style in styles) arr.push(style);
    return arr;
  })(),

  create() {
    const btnsRow = document.createElement('div');
    btnsRow.className = formStyles.btns_row;
    const titleThemes = document.createElement('legend');
    titleThemes.className = formStyles.title_radio;
    titleThemes.innerText = 'Сhoose a color theme';
    this.list.forEach((item) => {
      const input = document.createElement('input');
      input.className = formStyles.radio;
      input.setAttribute('type', 'radio');
      input.setAttribute('name', 'themes');
      input.setAttribute('id', item);
      input.setAttribute('checked', 'true');
      const label = document.createElement('label');
      label.className = formStyles.label_radio;
      label.setAttribute('for', item);
      label.innerText = item;
      btnsRow.append(input, label);
    });
    const themesForm = document.createElement('form');
    themesForm.setAttribute('name', 'themesForm');
    themesForm.className = formStyles.themes_box;
    themesForm.append(titleThemes, btnsRow);
    return themesForm;
  },

  init(page) {
    for (let input of document.forms.themesForm)
      if (input.checked) page.classList.add(styles[input.id]);
    document.forms.themesForm.addEventListener('change', (event) => {
      this.list.forEach((item) => {
        page.classList.remove(styles[item]);
        page.classList.add(styles[event.target.id]);
      });
      if (isSound) new Audio(click).play();
    });
  },
};
