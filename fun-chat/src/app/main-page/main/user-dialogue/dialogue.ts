import Button from '../../../../components/button';
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

  private static messageInput: HTMLTextAreaElement;

  private static messageForm: HTMLFormElement;

  public static currentUser: string | null;

  private static unreadedWrap: HTMLElement;

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
    Dialogue.unreadedWrap = createElement('div', [styles.unreadedMessages]);
    Dialogue.messagesContainer = createElement('div', [styles.messages]);

    Dialogue.messageInput = createElement('textarea', [styles.messageInput], {
      name: 'message',
      placeholder: 'Введите здесь свое сообщение',
      autocomplete: 'off',
    }) as HTMLTextAreaElement;

    Dialogue.messageForm = createElement(
      'form',
      [styles.messageForm],
      {
        name: 'messageForm',
        id: 'messageForm',
      },
      Dialogue.messageInput,
      new Button('Отправить', 'submit', true, 'submitBtn')
    ) as HTMLFormElement;

    Dialogue.currentUser = null;

    Dialogue.init();
  }

  private static init() {
    this.messageInput.required = true;
    this.messageForm.addEventListener('input', validate);

    this.messageForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const sendingText = dataRecesive(this.messageForm);
      this.messageForm.reset();
      (
        this.messageForm.elements.namedItem('submitBtn') as HTMLInputElement
      ).disabled = true;
      const request: RequestToServer = {
        id: 'sending_message',
        type: RequestTypes.MSG_SEND,
        payload: {
          message: { to: this.currentUser || '', text: sendingText.message },
        },
      };
      Socket.chat.send(JSON.stringify(request));
      this.fixReadingState();
    });

    Dialogue.messagesContainer.addEventListener('wheel', () => {
      this.fixReadingState();
    });

    Dialogue.messagesContainer.addEventListener('click', () => {
      this.fixReadingState();
    });

    this.messageInput.addEventListener('keyup', (event) => {
      if (
        event instanceof KeyboardEvent &&
        event.key === 'Enter' &&
        !event.shiftKey
      )
        this.messageForm.dispatchEvent(new Event('submit'));
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
    this.unreadedWrap.innerHTML = '';
    if (msg.id === Dialogue.currentUser) {
      if (messages?.length) {
        this.messagesContainer.innerHTML = '';
        messages.forEach((message) => {
          this.addMessage(message);
        });
        Dialogue.messagesContainer.append(Dialogue.unreadedWrap);
        (this.messagesContainer.lastChild as HTMLElement).scrollIntoView(false);
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
      if (message.status?.isReaded || newMessage.dataset.outcoming) {
        this.messagesContainer.append(newMessage);
        newMessage.scrollIntoView();
      }
      if (
        message.id &&
        !message.status?.isReaded &&
        !newMessage.dataset.outcoming
      ) {
        this.unreadedWrap.append(newMessage);
      }
    }
  }

  public static updateCurrentDialogue(users: UserPayload[] | undefined) {
    users?.forEach((user) => {
      if (Dialogue.currentUser === user.login) Dialogue.open(user);
    });
  }

  private static fixReadingState() {
    Object.values(
      Dialogue.unreadedWrap.children as unknown as NodeListOf<Message>
    ).forEach((message) => {
      if (message.payload?.to === sessionStorage.getItem('login')) {
        this.messagesContainer.append(message);
        Socket.fixReadingState(message.payload?.id);
      }
    });
  }

  public static getMessageById(id: string) {
    return Object.values(
      this.messagesContainer.querySelectorAll(
        '[data-is-readed="false"]'
      ) as unknown as Message
    ).find((message) => message.payload.id === id);
  }
}
