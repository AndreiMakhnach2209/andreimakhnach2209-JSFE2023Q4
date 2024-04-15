import ModalContainer from '../../../components/modal';
import Button from '../../../components/button';
import TextInput from '../../../components/input';
import createElement from '../../../utilits/createElement';
import styles from './login.module.scss';
import showValidityMessage from '../../../utilits/validateInput';

const [nameInput, passwordInput, submitBtn, infobtn] = [
  new TextInput('Имя', 'text'),
  new TextInput('Пароль', 'password'),
  new Button('Войти', 'submit'),
  new Button('Инфо'),
];

nameInput.required = true;
nameInput.addEventListener('input', showValidityMessage);
nameInput.minLength = 3;
nameInput.maxLength = 20;

passwordInput.required = true;
passwordInput.pattern = '(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*[0-9]).*';
passwordInput.addEventListener('input', showValidityMessage);
passwordInput.minLength = 6;

const formLogin = createElement(
  'form',
  [styles.form],
  { name: 'login' },
  nameInput,
  passwordInput,
  submitBtn,
  infobtn
);
const modalLogin = new ModalContainer(formLogin);

export { modalLogin };
