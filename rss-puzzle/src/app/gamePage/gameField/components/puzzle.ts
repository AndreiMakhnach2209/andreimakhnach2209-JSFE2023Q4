import Container from '../../../../components/container';
import Paragraph from '../../../../components/text/paragraph';
import Word from '../../../../components/word/word';
import WordCollection from '../../../../components/word/wordCollection';
import styles from './puzzle.module.scss';

class SourceBlock extends Container {
  public wordCollection: WordCollection;

  constructor(...children: Word[]) {
    super([styles.sourceBlock], ...children);
    this.wordCollection = this.children as WordCollection;
  }

  public append(...children: Word[]): void {
    super.append(...children);
    this.wordCollection = this.children as WordCollection;
  }
}

const sourceBlock = new SourceBlock();
sourceBlock.addEventListener('dragover', (event) => {
  event.preventDefault();
});
sourceBlock.addEventListener('drop', () => {
  sourceBlock.append(WordCollection.dropped);
});

const puzzleBlock = new Container([styles.puzzle]);

const hint = new Container([styles.hintWrap], new Paragraph([styles.hint]));

export { sourceBlock, puzzleBlock, hint };
