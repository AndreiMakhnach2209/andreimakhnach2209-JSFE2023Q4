import { UserPayload } from '../../../../types/types';
import createElement from '../../../../utilits/createElement';
import styles from './users.module.scss';

export default class Users {
  private static privateList: UserPayload[] = [];

  private static privateNode: HTMLUListElement = createElement('ul', [
    styles.list,
  ]) as HTMLUListElement;

  private static clear() {
    this.privateNode.innerHTML = '';
  }

  private static view() {
    this.clear();
    this.privateList.forEach((user) => {
      if (sessionStorage.getItem('login') !== user.login) {
        const style = user.isLogined ? styles.active : styles.offline;
        const contact = createElement('li', [style]);
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
