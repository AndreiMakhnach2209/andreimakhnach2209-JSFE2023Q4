import Word from './word';
import styles from './word.module.scss';

export default class WordCollection extends Array<Word | null> {
  public static dropped: Word;

  public static siblingForDroppedNode: HTMLElement | null;

  public static insertMethod: 'before' | 'after' | null;

  public dragNDropInit() {
    this.forEach((child) => {
      child?.addEventListener('dragstart', () => {
        WordCollection.dropped = child;
        WordCollection.dropped.addClass(styles.hidden);
      });
      child?.addEventListener('dragend', () => {
        WordCollection.dropped.removeClass(styles.hidden);
      });
    });
    return this;
  }

  public remove(removedWord: Word | null) {
    const index = this.indexOf(removedWord);
    if (index !== -1) this[index] = null;
  }

  private get siblingForDropped() {
    return (
      this.find(
        (word) => word?.node === WordCollection.siblingForDroppedNode
      ) || null
    );
  }

  public drop() {
    const targetIndex = this.indexOf(this.siblingForDropped);
    switch (true) {
      case this.siblingForDropped && WordCollection.insertMethod === 'before':
        if (targetIndex !== -1) {
          this.splice(targetIndex, 0, WordCollection.dropped);
          if (targetIndex > 0 && !this[targetIndex - 1])
            this.splice(targetIndex - 1, 1, WordCollection.dropped);
        }
        break;
      case this.siblingForDropped && WordCollection.insertMethod === 'after':
        if (!this[targetIndex + 1]) this.splice(targetIndex + 1, 1);
        this.splice(targetIndex + 1, 0, WordCollection.dropped);
        break;
      case WordCollection.insertMethod === 'after' && !this.siblingForDropped:
        if (!this.at(-1)) this.pop();
        this.push(WordCollection.dropped);
        break;
      default:
        break;
    }

    WordCollection.siblingForDroppedNode = null;
    WordCollection.insertMethod = null;
  }
}
