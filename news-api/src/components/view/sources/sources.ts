import './sources.css';
import { Source } from '../../../types/index';
import closeButton from '../../elements/buttons/close-button';
import { form } from '../../elements/formElements/search';
import { btnMoreWpapper } from '../../elements/buttons/moreSourcesBtn';
import { collapseSources } from '../../../modules/displayigSources';
import { container as controlls } from '../../elements/formElements/controllPanel';

class Sources {
    public draw(data: Source[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');
        document.querySelectorAll('.sources *')?.forEach((item) => item.remove());
        if (sourceItemTemp)
            data.forEach((item: Source) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true);
                if (sourceClone instanceof DocumentFragment) {
                    const itemName: HTMLElement | null = sourceClone.querySelector('.source__item-name');
                    if (itemName) itemName.textContent = item.name;
                    if (item.id) sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);
                    sourceClone.querySelector('.source__item')?.addEventListener('click', collapseSources);
                }
                fragment.append(sourceClone);
            });
        document.querySelector('.sources')?.append(fragment);

        document.querySelector('.sources')?.after(btnMoreWpapper);
        const closeBtn: HTMLElement = closeButton();
        closeBtn.classList.add('close-btn', 'no-display');
        closeBtn.addEventListener('click', collapseSources);
        document.querySelector('.sources')?.before(closeBtn);

        document.querySelector('.header__inner')?.append(form);
        document.querySelector('.header')?.append(controlls);
    }
}

export default Sources;
