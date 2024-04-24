import Button from '../../../../components/button';
import TextInput from '../../../../components/input';
import {
  MessagePayload,
  RequestToServer,
  RequestTypes,
  ResponseFromServer,
  UserPayload,
} from '../../../../types/types';
import createElement from '../../../../utilits/createElement';
import dataRecesive from '../../../../utilits/formHandler';
import validate from '../../../../utilits/validateForm';
import Socket from '../../../socket/socket';
import styles from './dialogue.module.scss';
import Message from './message/message';

export default class Dialogue {
  public static node: HTMLElement;

  private static messagesContainer: HTMLElement;

  private static messageInput: TextInput;

  private static messageForm: HTMLFormElement;

  public static currentUser: string | null;

  private static unreadedMessages: Record<string, Message>;

  constructor() {
    Dialogue.node = createElement(
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

    Dialogue.messagesContainer = createElement('div', [styles.messages]);

    Dialogue.messageInput = new TextInput(
      'Введите здесь свое сообщение',
      'textarea',
      styles.messageInput,
      'message'
    );

    Dialogue.messageForm = createElement(
      'form',
      [styles.messageForm],
      {
        name: 'messageForm',
      },
      Dialogue.messageInput,
      new Button('Отправить', 'submit', true)
    ) as HTMLFormElement;

    Dialogue.currentUser = null;

    Dialogue.init();

    Dialogue.unreadedMessages = {};
  }

  private static init() {
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
          message: { to: this.currentUser || '', text: sendingText.message },
        },
      };
      Socket.chat.send(JSON.stringify(request));
    });
  }

  public static open(user: UserPayload) {
    this.node.innerHTML = '';
    this.currentUser = user.login;
    const changedUser = createElement(
      'p',
      [styles.userName],
      {},
      this.currentUser
    );
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
    Socket.messagesFrom(user.login);
  }

  public static showMessage(msg: ResponseFromServer) {
    const messages = msg.payload?.messages;
    if (msg.id === Dialogue.currentUser) {
      if (messages?.length) {
        this.messagesContainer.innerHTML = '';
        messages.forEach((message) => {
          this.addMessage(message);
        });
        this.fixReadingState();
      } else {
        this.messagesContainer.innerHTML = '<p>Здесь пока нет сообщений</p>';
      }
    }
  }

  public static addMessage(message: MessagePayload | undefined) {
    if (
      message?.from === Dialogue.currentUser ||
      message?.to === Dialogue.currentUser
    ) {
      const newMessage = new Message(message);
      this.messagesContainer.append(newMessage);
      if (message.id) this.unreadedMessages[message.id] = newMessage;
      newMessage.scrollIntoView();
    }
  }

  public static updateCurrentDialogue(users: UserPayload[] | undefined) {
    users?.forEach((user) => {
      if (Dialogue.currentUser === user.login) Dialogue.open(user);
    });
  }

  private static fixReadingState() {
    (
      Dialogue.node.querySelectorAll(
        '[data-is-readed="false"]'
      ) as NodeListOf<Message>
    ).forEach((message) => {
      if (message.payload?.to === sessionStorage.getItem('login')) {
        message.setAttribute('data-is-readed', 'true');
        Socket.fixReadingState(message.payload?.id);
      }
    });
  }

  public static getMessageById(id: string) {
    return this.unreadedMessages[id];
  }
}
