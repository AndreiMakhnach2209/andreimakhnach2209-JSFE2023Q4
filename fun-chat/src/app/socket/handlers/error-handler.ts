import { ResponseFromServer, ResponseTypes } from '../../../types/types';
import ModalMessage from '../../modal/error/error';

export default function responseHandlerForError(msg: ResponseFromServer) {
  if (msg.type === ResponseTypes.ERROR) {
    document.body.append(new ModalMessage(msg.payload?.error));
  }
}
