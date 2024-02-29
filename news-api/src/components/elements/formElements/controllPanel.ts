import createElement from '../../../modules/createElement';
import './controllPanel.css';
import { Categories } from '../../../types/index';

export const container = createElement('form', ['controlls'], { name: 'controlls' });

const categoriesWrap = createElement('fieldset', ['controlls__categories']);
const categoriesLegend = createElement('legend', ['categories__title'], {}, 'Select a sources category:');
categoriesWrap.append(categoriesLegend);
['all', ...Object.keys(Categories).reverse()].forEach((categoryName) => {
    const label = createElement('label', ['categories__name'], {}, categoryName);
    const radio = createElement('input', ['categories__radio'], {
        type: 'radio',
        name: 'categories',
        checked: 'true',
        'data-value': categoryName,
    });
    label.append(radio);
    categoriesWrap.prepend(label);
});
container.append(categoriesWrap);
