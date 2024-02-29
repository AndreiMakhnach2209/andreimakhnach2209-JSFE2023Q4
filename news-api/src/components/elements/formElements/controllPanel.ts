import createElement from '../../../modules/createElement';
import './controllPanel.css';
import { Categories, Countries } from '../../../types/index';
import createSelectElement from './select';

export const container = createElement('form', ['controlls'], { name: 'controlls' });

const categoriesWrap = createElement('fieldset', ['controlls__categories', 'controlls__fieldset']);
const categoriesLegend = createElement('legend', ['categories__title'], {}, 'Select a sources category:');
categoriesWrap.append(categoriesLegend);
['all', ...Object.keys(Categories).reverse()].forEach((categoryName) => {
    const label = createElement('label', ['categories__name', 'controlls__label'], {}, categoryName);
    const radio = createElement('input', ['categories__radio'], {
        type: 'radio',
        name: 'category',
        checked: 'true',
        'data-value': categoryName,
    });
    label.append(radio);
    categoriesWrap.prepend(label);
});

const selectWrap = createElement('fieldset', ['select_wrap', 'controlls__fieldset']);
const labelCoutries = createElement('label', ['controlls__label'], {}, 'Select the source country:');
const selectCounries = createSelectElement(Countries, 'country');
labelCoutries.append(selectCounries);

selectWrap.append(labelCoutries);

container.append(categoriesWrap, selectWrap);
