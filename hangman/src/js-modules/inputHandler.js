import { container as keyboard } from './keyboard.js';
import keyboardStyles from '../css-modules/keyboard.css'
import {container as man} from './man.js';
import manStyles from '../css-modules/man.css';
import { wordWrap, countWrap, countCurrent, quiz } from './quiz.js';
import quizPartStyles from '../css-modules/quiz.css';


export default function () {
  // console.log(man.querySelectorAll('.' + manStyles.hidden));
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
    console.log(quiz.answer, input);
  } else {
    const countValue = countWrap.querySelector('.' + quizPartStyles.countValue);
    countCurrent++;
    countValue.innerText = `${countCurrent}/6`;
  };
};