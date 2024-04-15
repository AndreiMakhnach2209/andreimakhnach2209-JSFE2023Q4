import ModalContainer from '../../../components/modal';
import Button from '../../../components/button';
import TextInput from '../../../components/input';
import createElement from '../../../utilits/createElement';
import styles from './login.module.scss';

const [nameInput, passwordInput, submitBtn, infobtn] = [
  new TextInput('Имя', 'text'),
  new TextInput('Пароль', 'password'),
  new Button('Войти', 'submit'),
  new Button('Инфо'),
];
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
