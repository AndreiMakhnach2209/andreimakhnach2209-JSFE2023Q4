import Button from '../../../../../components/buttons/baseButtons';
import styles from '../../../../../components/buttons/button.module.scss';

const loginBtn = new Button([styles.button], 'submit');
loginBtn.text = 'Login';
loginBtn.disabled = true;
export { loginBtn };
