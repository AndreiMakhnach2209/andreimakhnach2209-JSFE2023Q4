import { ResponseEndpoint, ResponseMinorEndpoint, RequestForEverything } from '../../types/index';
import AppLoader from './appLoader';
import { assertVariable } from '../../modules/assertions';

class AppController extends AppLoader {
    private optionForSearch: RequestForEverything = {};

    public getSources(callback: (data: ResponseMinorEndpoint) => void): void {
        super.getResp(
            {
                endpoint: 'sources',
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
                    const formdata: FormData = new FormData(target);
                    const data: Partial<Record<string, string>> = {};
                    formdata.forEach((value: FormDataEntryValue, key: string) => {
                        if (typeof value === 'string') data[key] = value;
                    });
                    if (data.text_input) this.optionForSearch.q = data.text_input;
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
                            this.optionForSearch.sources = assertVariable(sourceId);
                        }
                    }
                    if (target instanceof Node) target = target.parentNode;
                }
                break;
        }

        console.log(this.optionForSearch);
        super.getResp(
            {
                endpoint: 'everything',
                options: this.optionForSearch,
            },
            callback
        );
        return;
    }
}

export default AppController;
