import Caption from '../../../../../components/tittles/caption';
import loadDataFromLocalStorage from '../../../../../utilits/loadUserData';
import styles from './greeting.module.scss';

const greeting = new Caption('h3', [styles.greeting]);
loadDataFromLocalStorage()
  .then((user) => {
    greeting.text = `Hello, ${user.firstName} ${user.surname}!`;
  })
  .catch(() => {
    throw new Error('Error loading user data');
  });

export { greeting };
