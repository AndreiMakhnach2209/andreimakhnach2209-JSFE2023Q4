import styles from './button.module.scss';

export default class Button extends HTMLInputElement {
  constructor(
    innerText: string = 'button',
    type: 'submit' | 'reset' | 'image' | 'button' = 'button',
    isDisabled: boolean = false
  ) {
    super();
    this.className = styles.button;
    this.type = type;
    this.value = innerText;
    this.disabled = isDisabled;
  }
}
customElements.define('custom-btn', Button, { extends: 'input' });
