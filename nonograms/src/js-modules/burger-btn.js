import styles from '../css-modules/burger-btn.css';

export default function (tag = 'div') {
  const container = document.createElement(tag);
  container.id = 'burger_btn';
  container.className = styles.container;
  for (let i = 0; i < 3; i++) {
    const line = document.createElement('div');
    line.className = styles.line;
    container.append(line);
  }

  container.addEventListener('click', () => {
    container.classList.toggle(styles.active);
  });
  return container;
}
