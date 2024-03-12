import Header from '../../../../components/header';
import styles from './header.module.scss';
import { tittle } from './tittle/title';

const header = new Header([styles.header], tittle.node);

export { header };
