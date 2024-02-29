import { ResponseEndpoint, ResponseMinorEndpoint, RequestForEverything, RequestForSources } from '../../types/index';
import AppLoader from './appLoader';
import { assertVariable } from '../../modules/assertions';

class AppController extends AppLoader {
    private optionForNews: RequestForEverything = {};
    private optionForSources: RequestForSources = {};

    public getSources(e: Event | null, callback: (data: ResponseMinorEndpoint) => void): void {
        const target = e?.target;
        if (target instanceof HTMLInputElement || target instanceof HTMLSelectElement) {
            switch (target.name) {
                case 'category':
                    {
                        if (target.dataset.value?.toLowerCase() !== 'all')
                            this.optionForSources[target.name] = target.dataset.value?.toLowerCase();
                        else delete this.optionForSources.category;
                    }
                    break;
                case 'country':
                    {
                        if (target.dataset.value?.toLowerCase() !== 'all')
                            this.optionForSources[target.name] = target.value.toLowerCase();
                        else delete this.optionForSources.category;
                    }
                    break;
            }
        }
        super.getResp(
            {
                endpoint: 'sources',
                options: this.optionForSources,
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data: ResponseEndpoint) => void): void {
        let target: EventTarget | null = assertVariable(e.target);
        const newsContainer: EventTarget | null = assertVariable(e.currentTarget);

        switch (e.type) {
            case 'submit':
                if (target instanceof HTMLFormElement) {
                    const data = getDataForm(target);
                    if (data.text_input) this.optionForNews.q = data.text_input;
                }
                break;

            case 'click':
                while (target !== newsContainer) {
                    if (target instanceof HTMLElement && target.classList.contains('source__item')) {
                        const sourceId: string = assertVariable(target.getAttribute('data-source-id'));
                        if (
                            newsContainer instanceof HTMLElement &&
                            newsContainer.getAttribute('data-source') !== sourceId
                        ) {
                            newsContainer.setAttribute('data-source', sourceId);
                            this.optionForNews.sources = assertVariable(sourceId);
                        }
                    }
                    if (target instanceof Node) target = target.parentNode;
                }
                break;
        }

        super.getResp(
            {
                endpoint: 'everything',
                options: this.optionForNews,
            },
            callback
        );
        return;
    }
}

export default AppController;

function getDataForm(form: HTMLFormElement): Partial<Record<string, string>> {
    const formdata: FormData = new FormData(form);
    const data: Partial<Record<string, string>> = {};
    formdata.forEach((value: FormDataEntryValue, key: string) => {
        if (typeof value === 'string') data[key] = value;
    });
    return data;
}
