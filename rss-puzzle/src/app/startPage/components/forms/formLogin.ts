import BaseForm from '../../../../components/forms/baseForms';
import validate from '../../../../utilits/validateForm';
import { loginBtn } from './buttons/login';
import styles from './formLogin.module.scss';
import { firstNameInput, surnameInput } from './inputs/textInputs';

const formLogin = new BaseForm(
  'login',
  [styles.form],
  firstNameInput.node,
  surnameInput.node,
  loginBtn.node
);

formLogin.addEventListener('input', validate);

export { formLogin };