import Container from '../../components/container';
import { formLogin } from './components/forms/formLogin';
import styles from './startPage.module.scss';
import { header } from './components/header/header';

export default class StartPage extends Container {
  constructor() {
    super([styles.container], header.node, formLogin.node);
  }

  public start() {
    document.querySelector('body')?.append(this.element);
  }
}
