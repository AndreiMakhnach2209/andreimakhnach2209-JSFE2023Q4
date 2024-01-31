import styles from '../css-modules/control-panel.css';
import Timer from './timer.js';

const container = document.createElement('div');
container.className = styles.container;

const timerWrap = document.createElement('div');
timerWrap.className = styles.timer_wrap;
container.append(timerWrap);

const timer = new Timer();
timer.node.className = styles.timer;
timerWrap.append(timer.node);

const btnsRow = document.createElement('div');
btnsRow.className = styles.btns_row;
const titleThemes = document.createElement('h2');
titleThemes.className = styles.title_radio;
titleThemes.innerText = 'Сhoose a color theme';
const themeBtns = ['light', 'dark', 'cold', 'warm'].reduce(
  (a, item) => {
    a[item] = document.createElement('input');
    a[item].className = styles.radio;
    a[item].setAttribute('type', 'radio');
    a[item].setAttribute('name', 'themes');
    a[item].setAttribute('id', item + 'ThemeBtn');
    a.labels[item] = document.createElement('label');
    a.labels[item].className = styles.label_radio;
    a.labels[item].setAttribute('for', item + 'ThemeBtn');
    a.labels[item].innerText = item;
    btnsRow.append(a[item], a.labels[item]);
    return a;
  },
  { labels: {} }
);
const themesBox = document.createElement('div');
themesBox.className = styles.themes_box;
themesBox.append(titleThemes, btnsRow);
container.append(themesBox);

const btns = [
  'score',
  'sound',
  'save_game',
  'load_game',
  'new_game',
  'solution',
].map((item) => {
  const btn = document.createElement('button');
  btn.className = styles.btn;
  btn.value = item;
  btn.innerText = item.split('_').join(' ');
  container.append(btn);
  return btn;
});

export { container, timer, btns, themeBtns };
