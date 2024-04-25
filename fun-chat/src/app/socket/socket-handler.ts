import {
  RequestToServer,
  RequestTypes,
  ResponseFromServer,
} from '../../types/types';
import Main from '../main-page/main/main';
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
    Main.reset();
    document.body.append(Socket.modal);
    Socket.chat = new WebSocket('ws://127.0.0.1:4000');
    socketInit();
  });

  Socket.chat.addEventListener('open', () => {
    Socket.modal.remove();
    if (sessionStorage.getItem('login') && sessionStorage.getItem('password')) {
      const request: RequestToServer = {
        id: 'authUser',
        type: RequestTypes.USER_LOGIN,
        payload: {
          user: {
            login: sessionStorage.getItem('login') as string,
            password: sessionStorage.getItem('password') as string,
          },
        },
      };
      Socket.chat.send(JSON.stringify(request));
    }
  });
}

socketInit();
