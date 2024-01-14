import { container as keyboard } from './keyboard.js';
import keyboardStyles from '../css-modules/keyboard.css'
import {container as man} from './man.js';
import manStyles from '../css-modules/man.css';
import { wordWrap, countWrap, countCurrent, quiz } from './quiz.js';
import quizPartStyles from '../css-modules/quiz.css';
import { endGame } from './modale.js';


export default function () {
  const keys = keyboard.getElementsByTagName('button');
  for (let key of keys) {
    key.addEventListener('click', virtualKeyboardHandler);
    window.addEventListener('keyup', physicalKeyboardHandler);
  }
}

function virtualKeyboardHandler (event) {
  const inputChar = event.currentTarget.innerText;
  inputCharChecker(inputChar);
};

function physicalKeyboardHandler (event) {
  const inputChar = event.key.toUpperCase();
  if (inputChar.charCodeAt(0) < 1040 || inputChar.charCodeAt(0) > 1071) {
    alert('Неверный символ!\nВозможно стоит сменить раскладку клавиатуры!');
    return;
  };
  inputCharChecker(inputChar);
}

export const changedChars = [];

function inputCharChecker (input) {
  console.log(changedChars);

  if (changedChars.includes(input)) return;
  changedChars.push(input);

  const charsOfKeys = keyboard.querySelectorAll('.' + keyboardStyles.key);

  for (let key of charsOfKeys) {
    if (key.innerText === input) {
      key.disabled = true;
      break;
    }
  }

  if (quiz.answer.toUpperCase().includes(input)) {
    const charCards = wordWrap.querySelectorAll('.' + quizPartStyles.charCard);
    for (let card of charCards) {
      if (input === card.innerText){
        card.classList.remove(quizPartStyles.hidden);
      };
    };
    if (!wordWrap.querySelectorAll('.' + quizPartStyles.hidden).length) {
      wordWrap.addEventListener('transitionend',
                                endGame(), 
                                {once: true});
    }
  } else {
    const countValue = countWrap.querySelector('.' + quizPartStyles.countValue);
    countCurrent++;
    countValue.innerText = `${countCurrent}/6`;
    man.children[countCurrent - 1].classList.remove(manStyles.hidden);
    if ( countCurrent === 6) man.addEventListener('transitionend',
                                                  endGame(),
                                                  {once: true}
    );
  };
};

