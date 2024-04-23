import { ResponseFromServer } from '../../../types/types';
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
}

customElements.define('main-inner', Main, { extends: 'div' });
