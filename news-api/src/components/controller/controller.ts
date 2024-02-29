import { ResponseEndpoint, ResponseMinorEndpoint, RequestForEverything, RequestForSources } from '../../types/index';
import AppLoader from './appLoader';
import { assertVariable } from '../../modules/assertions';

class AppController extends AppLoader {
    private optionForNews: RequestForEverything = {};
    private optionForSources: RequestForSources = {};

    public getSources(e: Event | null, callback: (data: ResponseMinorEndpoint) => void): void {
        if (e && e.target instanceof HTMLElement) {
            if (e.target.dataset.value?.toLowerCase() !== 'all')
                this.optionForSources.category = e.target.dataset.value?.toLowerCase();
            else delete this.optionForSources.category;
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
