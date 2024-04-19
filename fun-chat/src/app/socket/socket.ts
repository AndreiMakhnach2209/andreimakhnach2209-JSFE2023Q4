import { RequestTypes, ResponseFromServer } from '../../types/types';
import Footer from '../main-page/footer/footer';
import Header from '../main-page/header/header';
import Users from '../main-page/main/user-list/users';

export default class Socket {
  public static chat = new WebSocket('ws://127.0.0.1:4000');
}

Socket.chat.addEventListener('message', async ({ data }) => {
  const msg = (await JSON.parse(data)) as ResponseFromServer;
  switch (msg.type) {
    case RequestTypes.USER_LOGIN:
      new Header(msg).insert();
      new Footer().insert();
      break;
    case RequestTypes.USER_ACTIVE:
    case RequestTypes.USER_INACTIVE:
      Users.addUser(...(msg.payload?.users || []));
      break;
    default:
      break;
  }
});
