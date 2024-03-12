import { ClassList } from '../types/index';
import BaseElement from './baseElement';

export default class Container extends BaseElement<'div'> {
  constructor(classList: ClassList, ...children: HTMLElement[]) {
    super('div', classList, ...children);
  }
}
