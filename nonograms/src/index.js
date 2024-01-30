import styles from './css-modules/body.css';
import createGamefield from './js-modules/create-gamefield.js';
import { container as controlPanel } from './js-modules/control-panel.js';

const body = document.getElementsByTagName('body')[0];
const gamefield = createGamefield();
const gamefieldWrap = document.createElement('div');

gamefieldWrap.className = styles.field_wrap;
body.className = styles.body;
gamefieldWrap.append(gamefield);
body.append(gamefieldWrap);

const controlWrap = document.createElement('div');
controlWrap.className = styles.control_wrap;
body.prepend(controlWrap);
controlWrap.append(controlPanel);
