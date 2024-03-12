import TextInput from '../../../../../components/textInputs/baseTextInput';
import styles from './input.module.scss';

const firstNameInput = new TextInput('firstName', [styles.input], 'text');
firstNameInput.required = true;
firstNameInput.placeholder = 'First Name';

const surnameInput = new TextInput('surname', [styles.input], 'text');
surnameInput.required = true;
surnameInput.placeholder = 'Surname';

export { firstNameInput, surnameInput };
