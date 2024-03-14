import BaseTextElement from '../baseTextElement';

export default class Caption<
  T extends 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'caption' | 'legend',
> extends BaseTextElement<T> {}
