export const enum RequestTypes {
  USER_LOGIN = 'USER_LOGIN',
  USER_LOGOUT = 'USER_LOGOUT',
  USER_ACTIVE = 'USER_ACTIVE',
  USER_INACTIVE = 'USER_INACTIVE',
  MSG_FROM_USER = 'MSG_FROM_USER',
  MSG_SEND = 'MSG_SEND',
  MSG_READED = 'MSG_READ',
  MSG_DELETE = 'MSG_DELETE',
  MSG_EDIT = 'MSG_EDIT',
}

export const enum ResponseTypes {
  USER_EXTERNAL_LOGIN = 'USER_EXTERNAL_LOGIN',
  USER_EXTERNAL_LOGOUT = 'USER_EXTERNAL_LOGOUT',
  MSG_READED_FROM_SERVER = 'MSG_READED_FROM_SERVER',
  MSG_DELETED_FROM_SERVER = 'MSG_DELETED_FROM_SERVER',
  MSG_EDITED_FROM_SERVER = 'MSG_EDITED_FROM_SERVER',
  MSG_SENDED_FROM_SERVER = 'MSG_SENDED_FROM_SERVER',
  MSG_DELIVERED = 'MSG_DELIVER',
  ERROR = 'ERROR',
}

export interface UserPayload {
  login: string;
  password?: string | null;
  isLogined?: boolean;
}

export interface MessagePayload {
  id?: string;
  from?: string;
  to: string;
  text: string;
  datetime?: number;
  status?: {
    isDelivered: boolean;
    isReaded: boolean;
    isDeleted: boolean;
    isEdited: boolean;
  };
}

interface BaseRequest {
  id: string | null;
  payload: { user?: UserPayload; message?: MessagePayload } | null;
}
export interface RequestToServer extends BaseRequest {
  type: RequestTypes;
}

export interface ResponseFromServer extends BaseRequest {
  type: RequestTypes | ResponseTypes;
}
