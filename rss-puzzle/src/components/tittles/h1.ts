import { ClassList } from '../../types/index';
import BaseTextElement from '../baseTextElement';
import styles from './h1.module.scss';

export default class MainTittle extends BaseTextElement<'h1'> {
  constructor(classList: ClassList) {
    super('h1', [styles.title, ...classList]);
  }
}
