import { ClassList } from '../../types/index';
import loadDataFromLocalStorage from '../../utilits/loadUserData';
import Caption from './caption';

export default class Greeting extends Caption<'h3'> {
  constructor(classList: ClassList) {
    super('h3', classList);
  }

  public greet() {
    const user = loadDataFromLocalStorage();
    this.text = `Hello, ${user.firstName} ${user.surname}!`;
    return this.element;
  }
}
