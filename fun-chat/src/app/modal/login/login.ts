import ModalContainer from '../../../components/modal';
import Button from '../../../components/button';
import TextInput from '../../../components/input';
import createElement from '../../../utilits/createElement';
import styles from './login.module.scss';
import showValidityMessage from '../../../utilits/validateInput';
import validate from '../../../utilits/validateForm';
import dataRecesive from '../../../utilits/formHandler';
import Socket from '../../socket/socket';
import {
  RequestToServer,
  RequestTypes,
  UserPayload,
} from '../../../types/types';

const [nameInput, passwordInput, submitBtn, infobtn] = [
  new TextInput('Имя', 'text'),
  new TextInput('Пароль', 'password'),
  new Button('Войти', 'submit'),
  new Button('Инфо'),
];

nameInput.required = true;
nameInput.name = 'login';
nameInput.addEventListener('input', showValidityMessage);
nameInput.minLength = 3;
nameInput.maxLength = 20;

passwordInput.required = true;
passwordInput.name = 'password';
passwordInput.pattern = '(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*[0-9]).*';
passwordInput.addEventListener('input', showValidityMessage);
passwordInput.minLength = 6;

submitBtn.disabled = true;

const formLogin = createElement(
  'form',
  [styles.form],
  { name: 'login' },
  nameInput,
  passwordInput,
  submitBtn,
  infobtn
) as HTMLFormElement;

const modalLogin = new ModalContainer(formLogin);

formLogin.addEventListener('submit', (event) => {
  event.preventDefault();
  const userData = dataRecesive(formLogin) as unknown as UserPayload;
  Object.entries(userData).forEach(([key, value]) => {
    sessionStorage.setItem(key, value);
  });
  modalLogin.hide();
  const request: RequestToServer = {
    id: 'authUser',
    type: RequestTypes.USER_LOGIN,
    payload: { user: userData },
  };
  const requestUserActive: RequestToServer = {
    id: 'activeUser',
    type: RequestTypes.USER_ACTIVE,
    payload: null,
  };
  const requestUserInactive = {
    id: 'inactiveUser',
    type: RequestTypes.USER_INACTIVE,
    payload: null,
  };
  Socket.chat.send(JSON.stringify(request));
  Socket.chat.send(JSON.stringify(requestUserActive));
  Socket.chat.send(JSON.stringify(requestUserInactive));
});

formLogin.addEventListener('input', validate);

export { modalLogin };
