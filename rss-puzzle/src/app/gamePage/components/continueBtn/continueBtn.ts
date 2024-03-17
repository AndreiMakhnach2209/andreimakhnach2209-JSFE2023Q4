import Button from '../../../../components/buttons/baseButtons';
import styles from './continueBtn.module.scss';

const continueBtn = new Button();
continueBtn.addClass(styles.continueBtn);
continueBtn.text = 'Continue';
continueBtn.disabled = true;

export { continueBtn };
