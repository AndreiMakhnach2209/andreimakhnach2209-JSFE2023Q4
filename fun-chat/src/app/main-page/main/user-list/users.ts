import TextInput from '../../../../components/input';
import { ResponseFromServer, UserPayload } from '../../../../types/types';
import createElement from '../../../../utilits/createElement';
import Socket from '../../../socket/socket';
import Dialogue from '../user-dialogue/dialogue';
import styles from './users.module.scss';

export default class Users {
  private static userList: UserPayload[];

  private static input: TextInput;

  static privateNode: HTMLUListElement;

  constructor() {
    Users.userList = [];

    Users.input = new TextInput(
      'Введите имя пользователя',
      'text',
      styles.input,
      'userSearch'
    );

    Users.privateNode = createElement(
      'ul',
      [styles.list],
      {},
      Users.input
    ) as HTMLUListElement;
  }

  public static init() {
    Users.input.addEventListener('input', ({ target }) => {
      const search = target as HTMLInputElement;
      Users.view(
        Users.userList.filter((user) =>
          user.login.toLowerCase().includes(search.value.toLowerCase())
        )
      );
    });
  }

  private static clear() {
    while (!(this.node.lastChild instanceof HTMLInputElement))
      this.node.lastChild?.remove();
  }

  public static reset() {
    this.userList.length = 0;
  }

  private static view(userList = this.userList) {
    this.clear();
    userList.forEach((user) => {
      if (sessionStorage.getItem('login') !== user.login) {
        const style = user.isLogined ? styles.active : styles.offline;
        const contact = createElement('li', [style, styles.contact]);
        contact.addEventListener('click', () => {
          Dialogue.open(user);
          this.updateActiveContact();
        });
        contact.textContent = user.login;
        contact.dataset.login = user.login;
        this.privateNode.append(
          createElement('div', [styles.contactWrap], {}, contact)
        );
        this.updateActiveContact();
      }
    });
  }

  public static addUsers(...users: UserPayload[]) {
    this.userList.push(...users);
    users.forEach((user) => {
      Socket.messagesFrom(user.login);
    });
    this.view();
  }

  public static get node() {
    return this.privateNode;
  }

  public static updateCounter(msg: ResponseFromServer) {
    const counter = msg.payload?.messages?.filter(
      (message) =>
        !message.status?.isReaded &&
        message.from !== sessionStorage.getItem('login')
    ).length;
    const contact = document.querySelector(`[data-login="${msg.id}"]`);
    const countNode = createElement(
      'span',
      [styles.counter],
      {},
      counter?.toString() || ''
    );
    if (counter && contact?.nextSibling)
      contact.nextSibling.replaceWith(countNode);
    else if (counter !== 0) contact?.after(countNode);
  }

  private static updateActiveContact() {
    Users.privateNode
      .querySelector(`.${styles.activeContact}`)
      ?.classList.remove(styles.activeContact);
    Users.privateNode
      .querySelectorAll(`.${styles.contact}`)
      .forEach((contact) => {
        if (contact.textContent === Dialogue.currentUser)
          contact.classList.add(styles.activeContact);
      });
  }

  public static resetCounter() {
    this.privateNode
      .querySelector(`.${styles.activeContact} + .${styles.counter}`)
      ?.remove();
  }
}
