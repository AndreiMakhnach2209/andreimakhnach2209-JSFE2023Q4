import { container as keyboard } from './keyboard.js';
import keyboardStyles from '../css-modules/keyboard.css'
import {container as man} from './man.js';
import manStyles from '../css-modules/man.css';
import { wordWrap, countWrap, countCurrent, quiz } from './quiz.js';
import quizPartStyles from '../css-modules/quiz.css';


export default function () {
  const keys = keyboard.getElementsByTagName('button');
  for (let key of keys) {
    key.addEventListener('click', virtualKeyboardHandler, {once: true});
  }
}

function virtualKeyboardHandler (event) {
  event.currentTarget.disabled = true;
  const inputChar = event.currentTarget.innerText;
  inputCharChecker(inputChar);
};

function inputCharChecker (input) {
  if (quiz.answer.toUpperCase().includes(input)) {
    const charCards = wordWrap.querySelectorAll('.' + quizPartStyles.charCard);
    for (let card of charCards) {
      if (input === card.innerText){
        card.classList.remove(quizPartStyles.hidden);
      };
    };
    if (!wordWrap.querySelectorAll('.' + quizPartStyles.hidden).length) {
      wordWrap.addEventListener('transitionend',
                                () => alert('ГАМОВЕР!!!'), 
                                {once: true});
    }
  } else {
    const countValue = countWrap.querySelector('.' + quizPartStyles.countValue);
    countCurrent++;
    countValue.innerText = `${countCurrent}/6`;
  };
};