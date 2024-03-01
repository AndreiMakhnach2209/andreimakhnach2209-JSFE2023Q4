import createElement from '../../../modules/createElement';
import './select.css';

export default function (list: Record<string, string>, name: string, inner: string = 'source'): HTMLElement {
    const selectElement = createElement('select', ['input_select'], { name: name });
    selectElement.append(createElement('option', ['option'], { label: 'all', value: 'all' }));
    Object.keys(list).forEach((key) => {
        const optionElement = createElement('option', ['option'], { label: list[key], value: key });
        selectElement.append(optionElement);
    });
    const label = createElement('label', ['select__label'], {}, `Select the ${inner} ${name}:`);
    label.append(selectElement);

    return label;
}
