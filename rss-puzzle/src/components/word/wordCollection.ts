import Word from './word';

export default class WordCollection extends Array<Word | null> {
  public remove(word: Word) {
    const index = this.indexOf(word);
    if (index !== -1) this[index] = null;
  }
}
