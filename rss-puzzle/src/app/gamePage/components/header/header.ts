import Header from '../../../../components/header';
import styles from './header.module.scss';
import { logoutBtn } from './logoutBtn/logoutBtn';
import { tittle } from './tittle/title';

const header = new Header([styles.header], tittle.node, logoutBtn.node);

export { header };
