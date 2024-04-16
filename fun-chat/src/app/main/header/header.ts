import Button from '../../../components/button';
import { RequestTypes, ResponseFromServer } from '../../../types/types';
import createElement from '../../../utilits/createElement';
import Socket from '../../socket/socket';
import styles from './header.module.scss';

Socket.chat.addEventListener('message', async ({ data }) => {
  const msg = (await JSON.parse(data)) as ResponseFromServer;
  if (msg.type === RequestTypes.USER_LOGIN) {
    const login = msg.payload?.user?.login;
    const userName = createElement('span', [styles.userName]);
    userName.textContent = login || null;
    const title = createElement('h1', [styles.title]);
    title.textContent = 'RSS-чат';
    const logoutBtn = new Button('Выйти');
    document.body.prepend(
      createElement('header', [styles.header], {}, userName, title, logoutBtn)
    );
  }
});
