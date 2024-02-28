import './search.css';
import createElem from '../../../modules/createElement';

export const form = createElem('form', ['search__form']);
const input = createElem('input', ['search__input'], { type: 'text', placeholder: 'Search ...', name: 'text_input' });
const submit = createElem('input', ['search__btn-submit'], { type: 'submit', value: 'Search' });
form.append(input, submit);
