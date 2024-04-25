import {
  RequestTypes,
  ResponseFromServer,
  ResponseTypes,
} from '../../../types/types';
import Main from '../../main-page/main/main';
import Dialogue from '../../main-page/main/user-dialogue/dialogue';
import Users from '../../main-page/main/user-list/users';
import Socket from '../socket';

export default function responseHandlerForUser(msg: ResponseFromServer) {
  switch (msg.type) {
    case RequestTypes.USER_LOGIN:
      new Main().init(msg);
      break;
    case RequestTypes.USER_LOGOUT:
      Main.reset();
      break;
    case RequestTypes.USER_ACTIVE:
    case RequestTypes.USER_INACTIVE:
      Dialogue.updateCurrentDialogue(msg.payload?.users);
      Users.addUsers(...(msg.payload?.users || []));
      break;
    case ResponseTypes.USER_EXTERNAL_LOGIN:
    case ResponseTypes.USER_EXTERNAL_LOGOUT:
      Users.reset();
      Socket.updateUsers();
      break;
    default:
      break;
  }
}
