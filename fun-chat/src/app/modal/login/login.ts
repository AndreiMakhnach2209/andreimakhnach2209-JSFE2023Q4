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

export default class ModalLogin extends ModalContainer {
  private formLogin = createElement('form', [styles.form], {
    name: 'login',
  }) as HTMLFormElement;

  private static node: ModalLogin | undefined;

  constructor() {
    super();
    if (ModalLogin.node) return;
    ModalLogin.node = this;
    const [nameInput, passwordInput, submitBtn, infobtn] = [
      new TextInput('Имя', 'text'),
      new TextInput('Пароль', 'password'),
      new Button('Войти', 'submit'),
      new Button('Инфо'),
    ];

    nameInput.required = true;
    nameInput.autofocus = true;
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

    const legend = createElement('legend', [styles.legend]);
    legend.textContent = 'Авторизация пользователя';
    this.formLogin.append(legend, nameInput, passwordInput, submitBtn, infobtn);
    this.append(this.formLogin);
    this.formInit();
  }

  public static close() {
    ModalLogin.node?.remove();
    ModalLogin.node = undefined;
  }

  private formInit() {
    this.formLogin.addEventListener('submit', (event) => {
      event.preventDefault();
      const userData = dataRecesive(this.formLogin) as unknown as UserPayload;
      Object.entries(userData).forEach(([key, value]) => {
        sessionStorage.setItem(key, value);
      });
      const request: RequestToServer = {
        id: 'authUser',
        type: RequestTypes.USER_LOGIN,
        payload: { user: userData },
      };
      Socket.chat.send(JSON.stringify(request));
    });

    this.formLogin.addEventListener('input', validate);
  }
}

customElements.define('modal-login', ModalLogin, { extends: 'div' });
