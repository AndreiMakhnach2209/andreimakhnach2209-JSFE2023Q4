import Button from '../../../components/button';
import ModalContainer from '../../../components/modal';
import createElement from '../../../utilits/createElement';
import styles from './error.module.scss';

export default class ModalMessage extends ModalContainer {
  constructor(text?: string) {
    super();
    this.classList.add(styles.modal);
    const closeBtn = new Button('Зактрыть');
    closeBtn.addEventListener('click', () => this.remove());
    const message = createElement(
      'div',
      [styles.message],
      {},
      text || '',
      closeBtn
    );
    this.append(message);
  }
}

customElements.define('error-message', ModalMessage, { extends: 'div' });
