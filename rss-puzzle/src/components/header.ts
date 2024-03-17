import { ClassList } from '../types/index';
import BaseElement from './baseElement';

export default class Header extends BaseElement<'header'> {
  constructor(
    classList: ClassList,
    ...children: BaseElement<keyof HTMLElementTagNameMap>[]
  ) {
    super('header', classList, ...children);
  }
}
