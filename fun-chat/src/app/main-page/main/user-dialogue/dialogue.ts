import Button from '../../../../components/button';
import TextInput from '../../../../components/input';
import { UserPayload } from '../../../../types/types';
import createElement from '../../../../utilits/createElement';
import validate from '../../../../utilits/validateForm';
import styles from './dialogue.module.scss';

export default class Dialogue {
  public static node = createElement(
    'div',
    [styles.dialogue],
    {},
    createElement(
      'p',
      [styles.startMessage],
      {},
      'Выберите пользователя для получения и отправки сообщений'
    )
  );

  private static messagesContainer = createElement('div', [styles.messages]);

  private static messageInput = new TextInput(
    'Введите здесь свое сообщение',
    'textarea',
    styles.messageInput,
    'message'
  );

  private static messageForm = createElement(
    'form',
    [styles.messageForm],
    {
      name: 'messageForm',
    },
    this.messageInput,
    new Button('Отправить', 'submit', true)
  );

  public static init() {
    this.messageInput.required = true;
    this.messageForm.addEventListener('input', validate);
    this.messageForm.addEventListener('submit', (event) => {
      event.preventDefault();
    });
  }

  public static open(user: UserPayload) {
    this.node.innerHTML = '';
    const changedUser = createElement('p', [styles.userName], {}, user.login);
    changedUser.dataset.online = user.isLogined?.toString();
    this.node.append(
      createElement(
        'div',
        [styles.headerDialogue],
        {},
        createElement('span', [], {}, changedUser)
      ),
      this.messagesContainer,
      this.messageForm
    );
  }
}
