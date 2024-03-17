import Button from '../../../../components/buttons/baseButtons';
import styles from './checkBtn.module.scss';

const checkBtn = new Button();
checkBtn.addClass(styles.checkBtn);
checkBtn.text = 'Check';
checkBtn.disabled = true;

export { checkBtn };
