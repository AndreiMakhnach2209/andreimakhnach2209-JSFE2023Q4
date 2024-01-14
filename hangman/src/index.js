import styles from './css-modules/body.css';
import {container as gallow} from './js-modules/gallow.js';
import {container as quizPart} from './js-modules/quizPart.js';
import inputHandler from './js-modules/inputHandler.js';
const body = document.getElementsByTagName('body')[0];
body.className = styles.body;
body.append(gallow);
body.append(quizPart);

inputHandler();