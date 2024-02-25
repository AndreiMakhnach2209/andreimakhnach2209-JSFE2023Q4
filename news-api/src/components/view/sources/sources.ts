import './sources.css';
import { Source } from '../../../types/index';
import createElem from '../../../modules/createElement';
import closeButton from '../../../modules/close-button';

class Sources {
    public draw(data: Source[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

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

        const btnMoreWpapper = createElem('div', ['more-sources']);
        const btnMore = createElem('p', ['more-sources-text', 'source__item'], {}, 'View more Sources...');
        btnMoreWpapper.append(btnMore);
        document.querySelector('.sources')?.after(btnMoreWpapper);
        const closeBtn: HTMLElement = closeButton();
        closeBtn.classList.add('close-btn', 'no-display');
        closeBtn.addEventListener('click', collapseSources);
        document.querySelector('.sources')?.before(closeBtn);

        btnMore.addEventListener('click', () => {
            document.querySelector('.sources')?.classList.add('sources__opened');
            btnMoreWpapper.classList.add('no-display');
            closeBtn.classList.remove('no-display');
        });
    }
}

export default Sources;

function collapseSources(): void {
    document.querySelector('.more-sources')?.classList.remove('no-display');
    document.querySelector('.sources')?.classList.remove('sources__opened');
    document.querySelector('.close-btn')?.classList.add('no-display');
}
