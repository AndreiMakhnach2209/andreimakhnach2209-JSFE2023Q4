import createElement from '../../../modules/createElement';
import './controllPanel.css';
import { Categories, Countries, Languages } from '../../../types/index';
import createSelectElement from './select';
import createBurgerBtn from '../buttons/burger-btn';

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

const selectCounries = createSelectElement(Countries, 'country');
const selectLanguages = createSelectElement(Languages, 'language');

selectWrap.append(selectCounries, selectLanguages);

container.append(categoriesWrap, selectWrap);

const burgerBtn = createBurgerBtn('div');
burgerBtn.classList.add('burger_btn');
burgerBtn.addEventListener('click', () => {
    container.classList.toggle('controlls_active');
});
document.querySelector('header')?.prepend(burgerBtn);
