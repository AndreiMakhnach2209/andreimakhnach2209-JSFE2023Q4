import questions from "../data/questions";
import styles from '../css-modules/quiz.css';


export const wordWrap = document.createElement('div');
wordWrap.className = styles.wordWrap;

export const hintWrap = document.createElement('div');
hintWrap.className = styles.hintWrap;

const hint = document.createElement('p');
hint.className = styles.hint;
hintWrap.append(hint);

let quiz = questions[Math.floor(Math.random()*questions.length)];

function quizGen (oldquiz) {
  while (quiz.answer === oldquiz.answer) {
    quiz = questions[Math.floor(Math.random()*questions.length)]
  }
  addingQuiz(quiz, wordWrap);
};

function addingQuiz(quizCurrent, wrapper) {
  hint.innerText(quizCurrent.hint);
  const charsOfQuiz  = quizCurrent.answer.split('');
  charsOfQuiz.forEach(item => {
    const charCard = document.createElement('div'),
          char = document.createElement('p');
    charCard.className = styles.charCard;
    char.className = styles.charText;
    char.innerText = item;
    // charCard.classList.add(styles.hidden);
    charCard.append(char);
    wrapper.append(charCard);
  });
}

quizGen(quiz);
