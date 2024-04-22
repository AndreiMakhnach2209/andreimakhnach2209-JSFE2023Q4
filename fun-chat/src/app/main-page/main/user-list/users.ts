import TextInput from '../../../../components/input';
import {
  RequestToServer,
  RequestTypes,
  UserPayload,
} from '../../../../types/types';
import createElement from '../../../../utilits/createElement';
import Socket from '../../../socket/socket';
import Dialogue from '../user-dialogue/dialogue';
import styles from './users.module.scss';

export default class Users {
  private static userList: UserPayload[] = [];

  private static input = new TextInput(
    'Введите имя пользователя',
    'text',
    styles.input,
    'userSearch'
  );

  private static privateNode: HTMLUListElement = createElement(
    'ul',
    [styles.list],
    {},
    Users.input
  ) as HTMLUListElement;

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
        contact.addEventListener('click', () => Dialogue.open(user));
        contact.textContent = user.login;
        contact.dataset.login = user.login;
        this.privateNode.append(
          createElement('div', [styles.contactWrap], {}, contact)
        );
      }
    });
  }

  public static addUser(...users: UserPayload[]) {
    this.userList.push(...users);
    users.forEach((user) => {
      const request: RequestToServer = {
        id: user.login,
        type: RequestTypes.MSG_FROM_USER,
        payload: {
          user: {
            login: user.login,
          },
        },
      };
      if (user.login !== sessionStorage.getItem('login'))
        Socket.chat.send(JSON.stringify(request));
    });
    this.view();
  }

  public static get node() {
    return this.privateNode;
  }

  public static updateCounter(login: string, counter: number | undefined) {
    const contact = document.querySelector(`[data-login="${login}"]`);
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
}
