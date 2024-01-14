import questions from "../data/questions";
import styles from '../css-modules/quiz.css';


export const wordWrap = document.createElement('div');
wordWrap.className = styles.wordWrap;

export const hintWrap = document.createElement('div');
hintWrap.className = styles.hintWrap;

export let countCurrent = 0;
export let countWrap = counter(countCurrent);

const hint = document.createElement('p');
hint.className = styles.hint;
hintWrap.append(hint);

export let quiz = questions[Math.floor(Math.random()*questions.length)];

export function quizGen (oldquiz) {
  while (quiz.answer === oldquiz.answer) {
    quiz = questions[Math.floor(Math.random()*questions.length)]
  }
  addingQuiz(quiz, wordWrap);
};

function addingQuiz(quizCurrent, wrapper) {
  hint.innerText = quizCurrent.hint;
  const charsOfQuiz  = quizCurrent.answer.toUpperCase().split('');
  charsOfQuiz.forEach(item => {
    const charCard = document.createElement('div'),
          char = document.createElement('p');
    charCard.className = styles.charCard;
    char.className = styles.charText;
    char.innerText = item;
    charCard.classList.add(styles.hidden);
    charCard.append(char);
    wrapper.append(charCard);
  });
  console.log(quizCurrent.answer);
}

export function counter(n) {
  const wrapper = document.createElement('div');
  wrapper.className = styles.countWrap;

  const countText = document.createElement('span');
  countText.className = styles.countText;
  countText.innerText = `Использовано попыток: `;
  wrapper.append(countText);

  const countValue = document.createElement('span');
  countValue.className = styles.countValue;
  countValue.innerText = `${n}/6`;
  wrapper.append(countValue);

  return wrapper;
}

quizGen(quiz);
