import { formLogin } from './components/forms/formLogin';
import styles from './startPage.module.scss';
import { header } from './components/header/header';
import Page from '../../components/page/page';

const startPage = new Page([styles.container], header, formLogin);

export { startPage };
