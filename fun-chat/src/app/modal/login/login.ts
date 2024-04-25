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

  private nameInput = new TextInput('Имя', 'text');

  private passwordInput = new TextInput('Пароль', 'password');

  private submitBtn = new Button('Войти', 'submit');

  private infobtn = new Button('Инфо');

  constructor() {
    super();
    if (ModalLogin.node) return;
    ModalLogin.node = this;
    this.nameInput.required = true;
    this.nameInput.autofocus = true;
    this.nameInput.name = 'login';
    this.nameInput.addEventListener('input', showValidityMessage);
    this.nameInput.minLength = 3;
    this.nameInput.maxLength = 20;

    this.passwordInput.required = true;
    this.passwordInput.name = 'password';
    this.passwordInput.pattern = '(?=.*[a-zа-я])(?=.*[A-ZА-Я])(?=.*[0-9]).*';
    this.passwordInput.addEventListener('input', showValidityMessage);
    this.passwordInput.minLength = 6;

    this.submitBtn.disabled = true;

    const legend = createElement('legend', [styles.legend]);
    legend.textContent = 'Авторизация пользователя';
    this.formLogin.append(
      legend,
      this.nameInput,
      this.passwordInput,
      this.submitBtn,
      this.infobtn
    );
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
