import { ResponseEndpoint, ResponseMinorEndpoint } from '../../types/index';
import News from './news/news';
import Sources from './sources/sources';

export class AppView {
    news = new News();
    sources = new Sources();

    constructor() {}

    public drawNews(data: ResponseEndpoint): void {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    public drawSources(data: ResponseMinorEndpoint): void {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
