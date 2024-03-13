import Page from '../../components/page/page';
import { header } from './components/header/header';
import styles from '../../components/page/page.module.scss';

const gamePage = new Page([styles.page], header.node);

export { gamePage };
