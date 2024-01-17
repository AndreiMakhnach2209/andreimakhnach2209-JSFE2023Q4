import styles from '../css-modules/modale.css';
import { container as gallow } from './gallow.js';
import { container as man } from './man.js';
import { countCurrent } from './quiz.js';
import { quizWordWrap } from './quizPart.js';
import manStyles from '../css-modules/man.css';
import quizWordstyles from '../css-modules/quiz.css';
import gallowStyles from '../css-modules/gallow.css';
import newGame from './newGame.js';

export const backdrop = document.createElement('div');
backdrop.className = styles.backdrop;
backdrop.classList.add(styles.hidden);

export const modale = document.createElement('div');
modale.className = styles.modale;
backdrop.append(modale);

function selectorRemove (removedSelector, parrent) {
  const collection = parrent.querySelectorAll('.' + removedSelector);
  for (let element of collection) {
    element.classList.remove(removedSelector);
  };
};

export function endGame() {
  backdrop.classList.remove(styles.hidden);
  const resGameWrap = document.createElement('div');
  resGameWrap.className = styles.resGameWrap;
  modale.append(resGameWrap);
  setTimeout(() => {
    modale.style = 'opacity: 1';
  }, 0);

  const resGame = document.createElement('p');
  resGame.className = styles.resGame;
  resGameWrap.append(resGame);

  const quizWordModale = quizWordWrap.cloneNode(true);
  resGameWrap.append(quizWordModale);
  selectorRemove(quizWordstyles.hidden, quizWordModale);

  const againBtn = document.createElement('button');
  againBtn.className = styles.againBtn;
  againBtn.innerText = 'Попробовать снова!';
  resGameWrap.append(againBtn);

  if (countCurrent < 6) {
    const manModale = man.cloneNode(true);
    manModale.classList.add(styles.adaptive);
    modale.append(manModale);
    selectorRemove(manStyles.hidden, manModale);
    manModale.style = 'margin: 2% 10%; min-height: 100%;';
    resGame.innerText = 'Поздравляю!\nВы угадали слово!\nПопробуйте еще раз!';
  } else {
    const gallowModale = gallow.cloneNode(true);
    gallowModale.classList.add(styles.adaptive);
    gallowModale.querySelector('.' + gallowStyles.title).remove();
    modale.append(gallowModale);
    gallowModale.style = 'min-height: 80%;'
    selectorRemove(manStyles.hidden, gallowModale);
    resGame.innerText = 'Вы не смогли угадать слово.\nПопробуйте еще раз.';
  };
  againBtn.addEventListener('click', newGame);
}

