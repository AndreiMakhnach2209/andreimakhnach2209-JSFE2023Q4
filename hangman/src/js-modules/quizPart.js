import styles from '../css-modules/quizPart.css'

const container = document.createElement('div'),
      keyboardWrap = document.createElement('div'),
      quizWordWrap = document.createElement('div'),
      hintWrap = document.createElement('div'),
      countWrap = document.createElement('div');

container.className = styles.container;
keyboardWrap.className = styles.keyboardWrap;
quizWordWrap.className = styles.quizWordWrap;
hintWrap.className = styles.hintWrap;
countWrap.className = styles.countWrap;

container.append(quizWordWrap);
container.append(hintWrap);
container.append(countWrap);
container.append(keyboardWrap);

export default () => container;