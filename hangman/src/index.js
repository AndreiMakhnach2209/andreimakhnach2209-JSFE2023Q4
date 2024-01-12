import styles from './css-modules/body.css';
import gallow from './js-modules/gallow.js';
import quizPart from './js-modules/quizPart.js';
const body = document.getElementsByTagName('body')[0];
body.className = styles.body;
body.append(gallow());
body.append(quizPart());
