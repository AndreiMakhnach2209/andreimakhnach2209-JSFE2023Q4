import Button from '../../../components/button';
import { ResponseFromServer } from '../../../types/types';
import createElement from '../../../utilits/createElement';
import styles from './header.module.scss';

export default class Header extends HTMLDivElement {
  constructor(response: ResponseFromServer) {
    super();
    const login = response.payload?.user?.login;
    const userName = createElement('span', [styles.userName]);
    userName.textContent = login || null;
    const title = createElement('h1', [styles.title]);
    title.textContent = 'RSS-чат';
    const logoutBtn = new Button('Выйти');
    this.className = styles.headerInner;
    this.append(userName, title, logoutBtn);
  }

  public insert() {
    document.body.prepend(createElement('header', [styles.header], {}, this));
  }
}

customElements.define('header-inner', Header, { extends: 'div' });
