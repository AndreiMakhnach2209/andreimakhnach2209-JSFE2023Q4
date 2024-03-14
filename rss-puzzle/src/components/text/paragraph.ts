import { ClassList } from '../../types/index';
import BaseTextElement from '../baseTextElement';
import styles from './paragraph.module.scss';

export default class Paragraph extends BaseTextElement<'p'> {
  constructor(classList: ClassList) {
    super('p', [styles.paragraph, ...classList]);
  }
}
