import styles from '../css-modules/quizPart.css';
import { container as keyboard } from './keyboard.js';
import { hintWrap as hint, wordWrap as word, countWrap as counter} from './quiz.js';

const keyboardWrap = document.createElement('div'),
      countWrap = document.createElement('div'),
      hintWrap = document.createElement('div');

export const container = document.createElement('div'),
             quizWordWrap = document.createElement('div');

container.className = styles.container;
keyboardWrap.className = styles.keyboardWrap;
quizWordWrap.className = styles.quizWordWrap;
hintWrap.className = styles.hintWrap;
countWrap.className = styles.countWrap;

container.append(quizWordWrap);
container.append(hintWrap);
container.append(countWrap);
container.append(keyboardWrap);

keyboardWrap.append(keyboard);
hintWrap.append(hint);
quizWordWrap.append(word);
countWrap.append(counter);

