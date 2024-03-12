import TextInput from '../../../../../components/textInputs/baseTextInput';
import showValidityMessage from '../../../../../utilits/validateInput';
import styles from './input.module.scss';

const firstNameInput = new TextInput('firstName', [styles.input], 'text');
firstNameInput.required = true;
firstNameInput.placeholder = 'First Name';
firstNameInput.pattern = '[A-Z]([A-Z]|[a-z]|-){2}([A-Z]|[a-z]|-)*';
firstNameInput.addEventListener('input', showValidityMessage);
firstNameInput.minLength = 3;

const surnameInput = new TextInput('surname', [styles.input], 'text');
surnameInput.required = true;
surnameInput.placeholder = 'Surname';
surnameInput.pattern = '[A-Z]([A-Z]|[a-z]|-){3}([A-Z]|[a-z]|-)*';
surnameInput.addEventListener('input', showValidityMessage);
surnameInput.minLength = 4;

export { firstNameInput, surnameInput };
