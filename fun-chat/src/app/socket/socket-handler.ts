import {
  RequestTypes,
  ResponseFromServer,
  ResponseTypes,
} from '../../types/types';
import Main from '../main-page/main/main';
import Dialogue from '../main-page/main/user-dialogue/dialogue';
import Users from '../main-page/main/user-list/users';
import ModalMessage from '../modal/error/error';
import Socket from './socket';

Socket.chat.addEventListener('message', async ({ data }) => {
  const msg = (await JSON.parse(data)) as ResponseFromServer;
  switch (msg.type) {
    case RequestTypes.USER_LOGIN:
      new Main().init(msg);
      break;
    case RequestTypes.USER_ACTIVE:
    case RequestTypes.USER_INACTIVE:
      Dialogue.updateCurrentDialogue(msg.payload?.users);
      Users.addUser(...(msg.payload?.users || []));
      break;
    case RequestTypes.MSG_FROM_USER:
      if (msg.id === Dialogue.login)
        Dialogue.showMessage(msg.payload?.messages);
      if (msg.id)
        Users.updateCounter(
          msg.id,
          msg.payload?.messages?.filter(
            (message) =>
              !message.status?.isReaded &&
              message.from !== sessionStorage.getItem('login')
          ).length
        );
      break;
    case RequestTypes.MSG_SEND:
      Dialogue.addMessage(msg.payload?.message);
      break;
    case ResponseTypes.USER_EXTERNAL_LOGIN:
    case ResponseTypes.USER_EXTERNAL_LOGOUT:
      Users.reset();
      Socket.updateUsers();
      break;
    case ResponseTypes.ERROR:
      document.body.append(new ModalMessage(msg.payload?.error));
      break;
    default:
      break;
  }
});
