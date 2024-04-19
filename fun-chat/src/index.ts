import { modalLogin } from './app/modal/login/login';
import './index.scss';
import './styles/normalize.css';
import Main from './app/main-page/main/main';

document.body.append(modalLogin);
new Main().insert();
