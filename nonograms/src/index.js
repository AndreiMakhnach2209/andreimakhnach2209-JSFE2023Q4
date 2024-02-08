import styles from './css-modules/body.css';
import createGamefield from './js-modules/gamefield.js';
import { container as controlPanel } from './js-modules/control-panel.js';
import themes from './js-modules/themes.js';
import { timer } from './js-modules/control-panel.js';

const body = document.getElementsByTagName('body')[0];
const gamefield = createGamefield('easy', Math.floor(Math.random() * 5));
const gamefieldWrap = document.createElement('div');

gamefieldWrap.className = styles.field_wrap;
body.className = styles.body;
gamefieldWrap.append(gamefield);
body.append(gamefieldWrap);
const controlWrap = document.createElement('div');
controlWrap.className = styles.control_wrap;
body.prepend(controlWrap);
controlWrap.append(controlPanel);

setTimeout(() => {
  const burgerBtn = document.getElementById('burger_btn');
  burgerBtn.addEventListener('click', () => {
    controlWrap.classList.toggle(styles.control_wrap_opened);
    if (controlWrap.classList.contains(styles.control_wrap_opened)) timer.pause();
    else timer.start();
  });
}, 0);

themes.init(body);
