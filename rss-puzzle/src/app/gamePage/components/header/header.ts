import Header from '../../../../components/header';
import { greeting } from './greeting/greeting';
import styles from './header.module.scss';
import { logoutBtn } from './logoutBtn/logoutBtn';
import { tittle } from './tittle/title';

const header = new Header(
  [styles.header],
  tittle.node,
  greeting.node,
  logoutBtn.node
);

export { header };
