import Header from '../../../../components/header';
import { desc } from './desc/desc';
import styles from './header.module.scss';
import { tittle } from './tittle/title';

const header = new Header([styles.header], tittle, desc);

export { header };
