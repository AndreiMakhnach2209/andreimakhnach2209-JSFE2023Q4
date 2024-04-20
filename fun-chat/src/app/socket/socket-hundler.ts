import {
  RequestTypes,
  ResponseFromServer,
  ResponseTypes,
} from '../../types/types';
import Footer from '../main-page/footer/footer';
import Header from '../main-page/header/header';
import Users from '../main-page/main/user-list/users';
import ModalMessage from '../modal/error/error';
import { modalLogin } from '../modal/login/login';
import Socket from './socket';

Socket.chat.addEventListener('message', async ({ data }) => {
  const msg = (await JSON.parse(data)) as ResponseFromServer;
  switch (msg.type) {
    case RequestTypes.USER_LOGIN:
      modalLogin.hide();
      new Header(msg).insert();
      new Footer().insert();
      Socket.chat.send(
        JSON.stringify({
          id: 'activeUser',
          type: RequestTypes.USER_ACTIVE,
          payload: null,
        })
      );
      Socket.chat.send(
        JSON.stringify({
          id: 'inactiveUser',
          type: RequestTypes.USER_INACTIVE,
          payload: null,
        })
      );
      break;
    case RequestTypes.USER_ACTIVE:
    case RequestTypes.USER_INACTIVE:
      Users.addUser(...(msg.payload?.users || []));
      break;
    case ResponseTypes.ERROR:
      document.body.append(new ModalMessage(msg.payload?.error));
      break;
    default:
      break;
  }
});
