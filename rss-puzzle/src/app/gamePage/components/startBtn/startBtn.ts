import Button from '../../../../components/buttons/baseButtons';
import styles from './startBtn.module.scss';

const startBtn = new Button('button');
startBtn.addClass(styles.startBtn);
startBtn.text = 'Start';

export { startBtn };
