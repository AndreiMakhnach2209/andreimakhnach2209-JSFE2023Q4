import styles from './input.module.scss';

export default class TextInput extends HTMLInputElement {
  constructor(
    innerText: string = 'Введитие текст',
    type: 'text' | 'password' = 'text',
    className?: string,
    name?: string
  ) {
    super();
    this.className = styles.input;
    this.classList.add(className ?? styles.input);
    this.type = type;
    this.placeholder = innerText;
    if (name) this.name = name;
  }
}
customElements.define('custom-text-input', TextInput, { extends: 'input' });
