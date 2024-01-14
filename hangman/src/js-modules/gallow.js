import styles from '../css-modules/gallow.css';
import {container as man} from './man.js';
const container = document.createElement('div');
container.className = styles.container;

const gallow = document.createElement('div');
gallow.className = styles.gallow;
container.append(gallow);

const shadow = document.createElement('div');
shadow.className = styles.shadow;
container.append(shadow);

const manWrap = document.createElement('div');
manWrap.className = styles.manWrap;
gallow.append(manWrap);
manWrap.append(man);

const title = document.createElement('h1');
title.innerText = 'hangman';
title.className = styles.title;
container.append(title);
export {container};