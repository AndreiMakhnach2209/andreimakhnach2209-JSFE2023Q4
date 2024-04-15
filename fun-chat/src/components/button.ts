import styles from './button.module.scss';

export default class Button extends HTMLInputElement {
  constructor(
    innerText: string = 'button',
    type: 'submit' | 'reset' | 'image' | 'button' = 'button'
  ) {
    super();
    this.className = styles.button;
    this.type = type;
    this.value = innerText;
  }
}
customElements.define('custom-btn', Button, { extends: 'input' });
