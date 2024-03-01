import './search.css';
import createElem from '../../../modules/createElement';
import createSelect from './select';
import { Languages } from '../../../types/index';

export const form = createElem('form', ['search__form'], { name: 'search' });
const input = createElem('input', ['search__input'], { type: 'search', placeholder: 'Search ...', name: 'text_input' });
const submit = createElem('input', ['search__btn-submit'], { type: 'submit', value: 'Search' });
const select = createSelect(Languages, 'language');
const fieldset = createElem('fieldset', ['search__fieldset']);
fieldset.append(select);
form.append(input, submit, fieldset);
