import { ResponseFromServer } from '../../types/types';
import responseHandlerForError from './handlers/error-handler';
import responseHandlerForMessage from './handlers/message-response';
import responseHandlerForUser from './handlers/user-response';
import Socket from './socket';

Socket.chat.addEventListener('message', async ({ data }) => {
  const msg = (await JSON.parse(data)) as ResponseFromServer;
  responseHandlerForUser(msg);
  responseHandlerForMessage(msg);
  responseHandlerForError(msg);
});
