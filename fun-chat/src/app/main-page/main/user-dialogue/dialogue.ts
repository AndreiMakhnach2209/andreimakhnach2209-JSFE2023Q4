import Button from '../../../../components/button';
import TextInput from '../../../../components/input';
import {
  MessagePayload,
  RequestToServer,
  RequestTypes,
  UserPayload,
} from '../../../../types/types';
import createElement from '../../../../utilits/createElement';
import dataRecesive from '../../../../utilits/formHandler';
import validate from '../../../../utilits/validateForm';
import Socket from '../../../socket/socket';
import styles from './dialogue.module.scss';
import Message from './message/message';

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
  ) as HTMLFormElement;

  private static login: string | null = null;

  public static init() {
    this.messageInput.required = true;
    this.messageForm.addEventListener('input', validate);
    this.messageForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const sendingText = dataRecesive(this.messageForm);
      this.messageForm.reset();
      (
        this.messageForm.querySelector('[type="submit"') as HTMLInputElement
      ).disabled = true;
      const request: RequestToServer = {
        id: 'sending_message',
        type: RequestTypes.MSG_SEND,
        payload: {
          message: { to: this.login || '', text: sendingText.message },
        },
      };
      Socket.chat.send(JSON.stringify(request));
    });
  }

  public static open(user: UserPayload) {
    this.node.innerHTML = '';
    this.login = user.login;
    const changedUser = createElement('p', [styles.userName], {}, this.login);
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
    const request: RequestToServer = {
      id: user.login,
      type: RequestTypes.MSG_FROM_USER,
      payload: {
        user: {
          login: user.login,
        },
      },
    };
    Socket.chat.send(JSON.stringify(request));
  }

  public static showMessage(messages?: MessagePayload[]) {
    if (messages?.length) {
      this.messagesContainer.innerHTML = '';
      messages.forEach((message) => {
        this.addMessage(message);
      });
    } else {
      this.messagesContainer.innerHTML = '<p>Здесь пока нет сообщений</p>';
    }
  }

  public static addMessage(message: MessagePayload | undefined) {
    this.messagesContainer.append(new Message(message));
  }
}
