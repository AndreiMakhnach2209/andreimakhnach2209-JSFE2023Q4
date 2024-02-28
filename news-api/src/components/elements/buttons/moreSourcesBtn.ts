import createElem from '../../../modules/createElement';
import { expandSources } from '../../../modules/displayigSources';
import './moreSources.css';

export const btnMoreWpapper = createElem('div', ['more-sources']);
const btnMore = createElem('p', ['more-sources-text', 'source__item'], {}, 'View more Sources...');
btnMoreWpapper.append(btnMore);

btnMore.addEventListener('click', expandSources);
