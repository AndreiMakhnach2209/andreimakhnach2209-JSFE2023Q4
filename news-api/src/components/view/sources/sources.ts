import './sources.css';
import { Source } from '../../../types/index';

class Sources {
    draw(data: Source[]) {
        const fragment: DocumentFragment = document.createDocumentFragment();
        const sourceItemTemp: HTMLTemplateElement | null = document.querySelector('#sourceItemTemp');

        if (sourceItemTemp)
            data.forEach((item: Source) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true);
                if (sourceClone instanceof DocumentFragment) {
                    const itemName: HTMLElement | null = sourceClone.querySelector('.source__item-name');
                    if (itemName) itemName.textContent = item.name;
                    if (item.id) sourceClone.querySelector('.source__item')?.setAttribute('data-source-id', item.id);
                }
                fragment.append(sourceClone);
            });

        document.querySelector('.sources')?.append(fragment);
    }
}

export default Sources;
