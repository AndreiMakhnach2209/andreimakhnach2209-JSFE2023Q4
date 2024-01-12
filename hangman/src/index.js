import styles from './css-modules/body.css';
import gallow from './js-modules/gallow-create.js';
const body = document.getElementsByTagName('body')[0];
body.className = styles.body;
body.append(gallow());
