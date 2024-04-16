import styles from './modal.module.scss';

export default class ModalContainer extends HTMLDivElement {
  constructor(...children: HTMLElement[]) {
    super();
    this.className = styles.modal;
    this.append(...children);
  }

  public show() {
    this.classList.remove(styles.hidden);
  }

  public hide() {
    this.classList.add(styles.hidden);
  }
}
customElements.define('custom-modal', ModalContainer, { extends: 'div' });
