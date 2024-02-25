import AppLoader from './appLoader';

class AppController extends AppLoader {
    public getSources(callback: <T>(data?: T) => void): void {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    public getNews(e: MouseEvent, callback: <T>(data?: T) => void): void {
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
                                            sources: sourceId,
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
