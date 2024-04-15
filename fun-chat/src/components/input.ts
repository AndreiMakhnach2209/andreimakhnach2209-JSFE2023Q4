import styles from './input.module.scss';

export default class TextInput extends HTMLInputElement {
  constructor(
    innerText: string = 'Введитие текст',
    type: 'text' | 'password' = 'text'
  ) {
    super();
    this.className = styles.input;
    this.type = type;
    this.placeholder = innerText;
  }
}
customElements.define('custom-text-input', TextInput, { extends: 'input' });
