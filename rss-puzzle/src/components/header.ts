import { ClassList } from '../types/index';
import BaseElement from './baseElement';

export default class Header extends BaseElement<'header'> {
  constructor(classList: ClassList, ...children: HTMLElement[]) {
    super('header', classList, ...children);
  }
}
