import createElement from '../../../utilits/createElement';
import styles from './main.module.scss';
import Dialogue from './user-dialogue/dialogue';
import Users from './user-list/users';

export default class Main extends HTMLDivElement {
  constructor() {
    super();
    this.className = styles.mainInner;
    this.append(Users.node, Dialogue.node);
  }

  public init() {
    document.body.append(createElement('main', [styles.main], {}, this));
    Users.init();
    Dialogue.init();
  }
}

customElements.define('main-inner', Main, { extends: 'div' });
