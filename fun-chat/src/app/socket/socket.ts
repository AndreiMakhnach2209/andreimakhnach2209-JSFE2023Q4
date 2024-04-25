import ModalContainer from '../../components/modal';
import { RequestToServer, RequestTypes } from '../../types/types';
import createElement from '../../utilits/createElement';
import loader from '../../assets/img/qippda_bc.gif';

export default class Socket {
  public static chat = new WebSocket('ws://127.0.0.1:4000');

  public static modal = new ModalContainer(
    createElement(
      'div',
      [],
      {},

      createElement(
        'p',
        [],
        { style: 'text-align: center' },
        'Соединение прервано.\n Выполняется повторное подключение.'
      ),
      createElement('img', [], {
        src: loader,
        alt: 'loader',
      })
    )
  );

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

  public static editMessage(text: string, id: string) {
    const request = {
      id,
      type: RequestTypes.MSG_EDIT,
      payload: {
        message: {
          id,
          text,
        },
      },
    };
    Socket.chat.send(JSON.stringify(request));
  }

  public static deleteMessage(id: string) {
    const request = {
      id,
      type: RequestTypes.MSG_DELETE,
      payload: {
        message: {
          id,
        },
      },
    };
    Socket.chat.send(JSON.stringify(request));
  }
}
