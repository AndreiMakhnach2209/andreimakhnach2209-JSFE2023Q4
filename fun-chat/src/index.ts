import { modalLogin } from './app/modal/login/login';
import './index.scss';
import './styles/normalize.css';
import Main from './app/main-page/main/main';
import Users from './app/main-page/main/user-list/users';
import './app/socket/socket-hundler';
import Dialogue from './app/main-page/main/user-dialogue/dialogue';

document.body.append(modalLogin);
new Main().insert();
Users.init();
Dialogue.init();
