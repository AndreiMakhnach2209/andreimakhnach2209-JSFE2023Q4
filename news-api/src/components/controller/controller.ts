import { ResponseEndpoint, ResponseMinorEndpoint } from '../../types/index';
import AppLoader from './appLoader';
import { assertVariable } from '../../modules/assertions';

class AppController extends AppLoader {
    public getSources(callback: (data: ResponseMinorEndpoint) => void): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: Event, callback: (data: ResponseEndpoint) => void): void {
        let target: EventTarget | null = e.target;
        const newsContainer: EventTarget | null = e.currentTarget;

        if (target && newsContainer)
            while (target !== newsContainer) {
                if (target instanceof HTMLElement)
                    if (target?.classList.contains('source__item')) {
                        const sourceId = target.getAttribute('data-source-id');
                        if (newsContainer instanceof HTMLElement)
                            if (newsContainer.getAttribute('data-source') !== sourceId) {
                                if (sourceId) newsContainer.setAttribute('data-source', sourceId);
                                super.getResp(
                                    {
                                        endpoint: 'everything',
                                        options: {
                                            sources: assertVariable(sourceId),
                                        },
                                    },
                                    callback
                                );
                            }
                        return;
                    }
                if (target instanceof Node) target = target?.parentNode;
            }
    }
}

export default AppController;
