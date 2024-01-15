import { modale, backdrop } from "./modale.js";
import modaleStyles from '../css-modules/modale.css';
import { wordWrap, countCurrent, quizGen, quiz, counter, countWrap} from "./quiz";
import { changedChars } from "./inputHandler.js";
import { container as keyboard } from "./keyboard.js";
import keyboardStyles from '../css-modules/keyboard.css';
import manStyles from '../css-modules/man.css';
import { container as man } from "./man.js";



export default function () {
  wordWrap.innerHTML = '';
  quizGen(quiz);
  countCurrent = 0;
  countWrap.innerHTML = counter(countCurrent).innerHTML;
  const keys = keyboard.querySelectorAll('.' + keyboardStyles.key);
  for (let key of keys) {
    key.disabled = false;
  }
  changedChars.length = 0;
  for (let part of man.children) {
    part.classList.add(manStyles.hidden);
  }
  modale.addEventListener('transitionend', 
                        () => { backdrop.classList.add(modaleStyles.hidden)},
                        {once: true});
  modale.style = '';
  modale.innerHTML = '';
}

