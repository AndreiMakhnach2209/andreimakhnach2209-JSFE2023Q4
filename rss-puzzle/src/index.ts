import { startPage } from './app/startPage/startPage';
import './styles/normalize.css';
import './styles/global.scss';
import './styles/fonts.css';
import { formLogin } from './app/startPage/components/forms/formLogin';
import { gamePage } from './app/gamePage/gamePage';
import { logoutBtn } from './app/gamePage/components/header/logoutBtn/logoutBtn';

if (localStorage.getItem('firstName') && localStorage.getItem('surname'))
  gamePage.start();
else startPage.start();

formLogin.addEventListener('submit', () => {
  if (formLogin.node instanceof HTMLFormElement) formLogin.node.reset();
  startPage.stop();
  gamePage.start();
});

logoutBtn.addEventListener('click', () => {
  gamePage.stop();
  localStorage.clear();
  startPage.start();
});
