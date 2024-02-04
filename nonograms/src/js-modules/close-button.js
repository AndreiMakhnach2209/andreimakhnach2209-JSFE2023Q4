import styles from '../css-modules/close-button.css';

export default function (tag = 'div') {
  const container = document.createElement(tag);
  container.className = styles.container;

  for (let i = 0; i < 2; i++) {
    const line = document.createElement('div');
    line.className = styles.line;
    container.append(line);
  }

  return container;
}
