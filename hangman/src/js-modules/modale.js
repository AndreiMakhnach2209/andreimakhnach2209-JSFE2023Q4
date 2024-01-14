import styles from '../css-modules/modale.css';
import { container as gallow } from './gallow.js';
import { container as man, head } from './man.js';
import { countCurrent } from './quiz.js';
import { quizWordWrap } from './quizPart.js';

const backdrop = document.createElement('div');
backdrop.className = styles.backdrop;
// backdrop.classList.add(styles.hidden);

const modale = document.createElement('div');
modale.className = styles.modale;
backdrop.append(modale);

const gallowModale = gallow.cloneNode(true);
modale.append(gallowModale);

const resGameWrap = document.createElement('div');
resGameWrap.className = styles.resGameWrap;
modale.append(resGameWrap);

const resGame = document.createElement('p');
resGame.className = styles.resGame;
resGame.innerText = 'ГАМОВЕР!';
resGameWrap.append(resGame);

const quizWordModale = quizWordWrap.cloneNode(true);
resGameWrap.append(quizWordModale);

const againBtn = document.createElement('button');
againBtn.className = styles.againBtn;
againBtn.innerText = 'Попробуйте\n еще раз!';
resGameWrap.append(againBtn);



export { backdrop };