import {
  RequestTypes,
  ResponseFromServer,
  ResponseTypes,
} from '../../../types/types';
import Dialogue from '../../main-page/main/user-dialogue/dialogue';
import Users from '../../main-page/main/user-list/users';
import Socket from '../socket';

export default function responseHandlerForMessage(msg: ResponseFromServer) {
  switch (msg.type) {
    case RequestTypes.MSG_FROM_USER:
      Dialogue.showMessage(msg);
      Users.updateCounter(msg);
      break;
    case RequestTypes.MSG_SEND:
      Dialogue.addMessage(msg.payload?.message);
      if (msg.payload?.message?.from)
        Socket.messagesFrom(msg.payload?.message?.from);
      break;
    case RequestTypes.MSG_READED:
      if (Dialogue.getMessageById(msg.payload?.message?.id ?? ''))
        Users.resetCounter();
      Dialogue.getMessageById(msg.payload?.message?.id ?? '')?.setAttribute(
        'data-is-readed',
        'true'
      );
      break;
    case ResponseTypes.MSG_DELIVERED:
      if (Dialogue.currentUser) Socket.messagesFrom(Dialogue.currentUser);
      break;
    default:
      break;
  }
}
