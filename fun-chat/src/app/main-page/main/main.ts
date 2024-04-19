import createElement from '../../../utilits/createElement';
import styles from './main.module.scss';
import Users from './user-list/users';

export default class Main extends HTMLDivElement {
  constructor() {
    super();
    this.className = styles.mainInner;
    this.append(Users.node);
  }

  public insert() {
    document.body.append(createElement('main', [styles.main], {}, this));
  }
}

customElements.define('main-inner', Main, { extends: 'div' });
