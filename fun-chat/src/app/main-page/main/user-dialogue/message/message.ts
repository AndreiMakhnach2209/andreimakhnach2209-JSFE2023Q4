import { MessagePayload } from '../../../../../types/types';
import createElement from '../../../../../utilits/createElement';
import Socket from '../../../../socket/socket';
import styles from './message.module.scss';

export default class Message extends HTMLDivElement {
  private messageState = createElement();

  public text = createElement('p', [styles.textContent]);

  private editBtn = createElement(
    'div',
    [styles.btn, styles.editBtn],
    {},
    'Редактировать'
  );

  private deleteBtn = createElement(
    'div',
    [styles.btn, styles.deleteBtn],
    {},
    'Удалить'
  );

  private editWrap = createElement(
    'div',
    [styles.btnWrap],
    {},
    this.editBtn,
    this.deleteBtn
  );

  public payload: MessagePayload | undefined;

  constructor(message?: MessagePayload) {
    super();
    this.className = styles.message;
    if (message) {
      this.setStatus(message);
      this.messageState.append(
        createElement(
          'span',
          [styles.messageDate],
          {},
          message?.datetime ? new Date(message.datetime).toLocaleString() : ''
        )
      );
      this.text.textContent = message.text;
      this.append(this.editWrap, this.text, this.messageState);
      this.editWrap.addEventListener('click', () => {
        this.edit();
      });
    }
  }

  private setStatus(message: MessagePayload) {
    this.payload = message;
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
  }

  private edit() {
    const textArea = createElement('textarea', [styles.textArea], {
      title: 'Для подтверждения нажмите "Enter"',
    }) as HTMLTextAreaElement;
    textArea.value = this.payload?.text || '';
    textArea.addEventListener('blur', () => textArea.remove());
    this.append(textArea);
    textArea.focus();
    textArea.addEventListener('keyup', (event) => {
      if (
        event instanceof KeyboardEvent &&
        event.key === 'Enter' &&
        !event.shiftKey &&
        this.payload?.id
      ) {
        Socket.editMessage(textArea.value, this.payload?.id);
        textArea.blur();
        this.dataset.isEdited = 'true';
      }
    });
  }
}

customElements.define('message-element', Message, { extends: 'div' });
