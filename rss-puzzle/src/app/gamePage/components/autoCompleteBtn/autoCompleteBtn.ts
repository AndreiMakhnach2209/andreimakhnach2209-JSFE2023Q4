import Button from '../../../../components/buttons/baseButtons';
import styles from './autoCompleteBtn.module.scss';

const autoCompleteBtn = new Button();
autoCompleteBtn.text = 'Auto-Complete';
autoCompleteBtn.addClass(styles.autoCompleteBtn);

export { autoCompleteBtn };
