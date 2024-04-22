import Button from '../../../components/button';
import {
  RequestToServer,
  RequestTypes,
  ResponseFromServer,
} from '../../../types/types';
import clearBody from '../../../utilits/clear-body';
import createElement from '../../../utilits/createElement';
import ModalLogin from '../../modal/login/login';
import Socket from '../../socket/socket';
import Users from '../main/user-list/users';
import styles from './header.module.scss';

export default class Header extends HTMLDivElement {
  constructor(response: ResponseFromServer) {
    super();
    const login = response.payload?.user?.login as string;
    const userName = createElement('span', [styles.userName]);
    userName.textContent = login || null;
    const title = createElement('h1', [styles.title]);
    title.textContent = 'RSS-чат';
    const logoutBtn = new Button('Выйти');
    const request: RequestToServer = {
      id: 'log_out',
      type: RequestTypes.USER_LOGOUT,
      payload: {
        user: {
          login: login ?? sessionStorage.getItem('login'),
          password: sessionStorage.getItem('password'),
        },
      },
    };
    logoutBtn.addEventListener('click', () => {
      Socket.chat.send(JSON.stringify(request));
      Users.reset();
      clearBody();
      sessionStorage.clear();
      document.body.append(new ModalLogin());
    });
    this.className = styles.headerInner;
    this.append(userName, title, logoutBtn);
  }

  public insert() {
    document.body.prepend(createElement('header', [styles.header], {}, this));
  }
}

customElements.define('header-inner', Header, { extends: 'div' });
