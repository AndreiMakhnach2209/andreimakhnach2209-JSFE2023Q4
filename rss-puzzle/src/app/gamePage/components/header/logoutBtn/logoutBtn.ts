import Button from '../../../../../components/buttons/baseButtons';
import styles from '../../../../../components/buttons/button.module.scss';

const logoutBtn = new Button([styles.button], 'button');
logoutBtn.text = 'Log Out';

export { logoutBtn };
