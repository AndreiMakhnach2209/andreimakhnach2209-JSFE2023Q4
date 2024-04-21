import { MessagePayload } from '../../../../../types/types';
import createElement from '../../../../../utilits/createElement';
import styles from './message.module.scss';

export default class Message extends HTMLDivElement {
  private messageState = createElement();

  constructor(message?: MessagePayload) {
    super();
    this.className = styles.message;
    if (message) {
      if (message.from === sessionStorage.getItem('login'))
        this.dataset.outcoming = 'true';
      [
        this.dataset.isDelivered,
        this.dataset.isReaded,
        this.dataset.isDeleted,
        this.dataset.isEdited,
      ] = [
        message.status?.isDelivered?.toString(),
        message.status?.isReaded?.toString(),
        message.status?.isDeleted?.toString(),
        message.status?.isEdited?.toString(),
      ];
      this.messageState.append(
        createElement(
          'span',
          [styles.messageDate],
          {},
          message?.datetime ? new Date(message.datetime).toLocaleString() : ''
        )
      );
      this.append(
        createElement(
          'p',
          [styles.textContent],
          {},
          this.dataset.isDeleted === 'false'
            ? 'Сообщение удалено'
            : message.text
        ),
        this.messageState
      );
    }
  }
}

customElements.define('message-element', Message, { extends: 'div' });
