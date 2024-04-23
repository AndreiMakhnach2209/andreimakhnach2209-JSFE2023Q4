import { ResponseFromServer } from '../../../types/types';
import clearBody from '../../../utilits/clear-body';
import createElement from '../../../utilits/createElement';
import ModalLogin from '../../modal/login/login';
import Socket from '../../socket/socket';
import Footer from '../footer/footer';
import Header from '../header/header';
import styles from './main.module.scss';
import Dialogue from './user-dialogue/dialogue';
import Users from './user-list/users';

export default class Main extends HTMLDivElement {
  constructor() {
    super();
    this.className = styles.mainInner;
    this.append(Users.node, Dialogue.node);
  }

  public init(msg: ResponseFromServer) {
    document.body.append(createElement('main', [styles.main], {}, this));
    Users.init();
    Dialogue.init();
    ModalLogin.close();
    new Header(msg).insert();
    new Footer().insert();
    Socket.updateUsers();
  }

  public static reset() {
    Users.reset();
    clearBody();
    sessionStorage.clear();
    document.body.append(new ModalLogin());
  }
}

customElements.define('main-inner', Main, { extends: 'div' });
