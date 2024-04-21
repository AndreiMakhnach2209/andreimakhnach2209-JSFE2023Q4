import TextInput from '../../../../components/input';
import { UserPayload } from '../../../../types/types';
import createElement from '../../../../utilits/createElement';
import Dialogue from '../user-dialogue/dialogue';
import styles from './users.module.scss';

export default class Users {
  private static privateList: UserPayload[] = [];

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
        Users.privateList.filter((user) =>
          user.login.toLowerCase().includes(search.value.toLowerCase())
        )
      );
    });
  }

  private static clear() {
    Object.values(this.node.getElementsByTagName('li')).forEach((item) => {
      item.remove();
    });
  }

  private static view(userList = this.privateList) {
    this.clear();
    userList.forEach((user) => {
      if (sessionStorage.getItem('login') !== user.login) {
        const style = user.isLogined ? styles.active : styles.offline;
        const contact = createElement('li', [style, styles.contact]);
        contact.addEventListener('click', () => Dialogue.open(user));
        contact.textContent = user.login;
        this.privateNode.append(contact);
      }
    });
  }

  public static addUser(...users: UserPayload[]) {
    this.privateList.push(...users);
    this.view();
  }

  public static get list() {
    return this.privateList;
  }

  public static get node() {
    return this.privateNode;
  }
}
