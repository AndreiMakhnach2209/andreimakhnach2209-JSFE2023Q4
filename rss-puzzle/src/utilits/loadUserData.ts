import { UserDataKeys } from '../types/index';

export default async function loadDataFromLocalStorage() {
  return Object.fromEntries(
    Object.keys(UserDataKeys).map((key) => [key, localStorage.getItem(key)])
  );
}
