import { RequestToServer, RequestTypes } from '../../types/types';

export default class Socket {
  public static chat = new WebSocket('ws://127.0.0.1:4000');

  public static updateUsers() {
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
  }

  public static messagesFrom(login: string) {
    const request: RequestToServer = {
      id: login,
      type: RequestTypes.MSG_FROM_USER,
      payload: {
        user: {
          login,
        },
      },
    };
    if (login !== sessionStorage.getItem('login'))
      Socket.chat.send(JSON.stringify(request));
  }

  public static fixReadingState(messageId: string | undefined) {
    const request = {
      id: `READ_STATE_FROM_${messageId}`,
      type: RequestTypes.MSG_READED,
      payload: {
        message: {
          id: messageId,
        },
      },
    };
    Socket.chat.send(JSON.stringify(request));
  }
}
