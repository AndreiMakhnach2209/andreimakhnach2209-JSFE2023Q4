import Container from '../../../../components/container';
import Paragraph from '../../../../components/text/paragraph';
import styles from './puzzle.module.scss';

const sourceBlock = new Container([styles.sourceBlock]);

const puzzleBlock = new Container([styles.puzzle]);

const hint = new Container([styles.hintWrap], new Paragraph([styles.hint]));

export { sourceBlock, puzzleBlock, hint };
