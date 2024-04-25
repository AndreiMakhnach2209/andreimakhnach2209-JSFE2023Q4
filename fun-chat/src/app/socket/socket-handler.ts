import { ResponseFromServer } from '../../types/types';
import responseHandlerForError from './handlers/error-handler';
import responseHandlerForMessage from './handlers/message-response';
import responseHandlerForUser from './handlers/user-response';
import Socket from './socket';

function socketInit() {
  Socket.chat.addEventListener('message', async ({ data }) => {
    const msg = (await JSON.parse(data)) as ResponseFromServer;
    responseHandlerForUser(msg);
    responseHandlerForMessage(msg);
    responseHandlerForError(msg);
  });

  Socket.chat.addEventListener('close', () => {
    document.body.append(Socket.modal);
    Socket.chat = new WebSocket('ws://127.0.0.1:4000');
    socketInit();
  });

  Socket.chat.addEventListener('open', () => Socket.modal.remove());
}

socketInit();
