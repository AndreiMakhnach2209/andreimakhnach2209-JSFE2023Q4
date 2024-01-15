import styles from '../css-modules/keyboard.css';

const container = document.createElement('div');
container.className = styles.container;

for (let i = 1040; i < 1072; i++) {
  const key = document.createElement('button');
  key.className = styles.key;
  key.innerText = String.fromCharCode(i);
  container.append(key);
}

export {container};