import { RequestTypes, ResponseFromServer } from '../../types/types';
import Header from '../main/header/header';

export default class Socket {
  public static chat = new WebSocket('ws://127.0.0.1:4000');
}

Socket.chat.addEventListener('message', async ({ data }) => {
  const msg = (await JSON.parse(data)) as ResponseFromServer;
  switch (msg.type) {
    case RequestTypes.USER_LOGIN:
      new Header(msg).insert();
      break;
    default:
      break;
  }
});
