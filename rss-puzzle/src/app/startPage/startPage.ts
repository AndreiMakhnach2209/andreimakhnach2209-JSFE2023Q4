import { formLogin } from './components/forms/formLogin';
import styles from './startPage.module.scss';
import baseStyles from '../../components/page/page.module.scss';
import { header } from './components/header/header';
import Page from '../../components/page/page';

const startPage = new Page(
  [styles.container, baseStyles.page],
  header.node,
  formLogin.node
);

export { startPage };
