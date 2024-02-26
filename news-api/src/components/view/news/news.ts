import { Article } from '../../../types/index';
import './news.css';
import image_placeholder from '../../../img/news_placeholder.jpg';

class News {
    public draw(data: Article[]): void {
        const news: Article[] = data.length >= 10 ? data.filter((_item: Article, idx: number) => idx < 10) : data;

        const fragment: DocumentFragment = document.createDocumentFragment();
        const newsItemTemp: HTMLTemplateElement | null = document.querySelector('#newsItemTemp');

        if (newsItemTemp != null)
            news.forEach((item: Article, idx: number) => {
                const newsClone = newsItemTemp.content.cloneNode(true);
                if (newsClone instanceof DocumentFragment) {
                    if (idx % 2) newsClone.querySelector('.news__item')?.classList.add('alt');
                    const metaPhoto: HTMLElement | null = newsClone.querySelector('.news__meta-photo');
                    if (metaPhoto != null)
                        metaPhoto.style.backgroundImage = `url(${item.urlToImage || image_placeholder})`;
                    const metaAuthor: HTMLElement | null = newsClone.querySelector('.news__meta-author');
                    if (metaAuthor != null) metaAuthor.textContent = item.author || item.source.name;
                    const metaDate: HTMLElement | null = newsClone.querySelector('.news__meta-date');
                    if (metaDate != null)
                        metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');

                    const descTitle: HTMLElement | null = newsClone.querySelector('.news__description-title');
                    if (descTitle != null) descTitle.textContent = item.title;
                    const descSource: HTMLElement | null = newsClone.querySelector('.news__description-source');
                    if (descSource != null) descSource.textContent = item.source.name;
                    const descContent: HTMLElement | null = newsClone.querySelector('.news__description-content');
                    if (descContent != null) descContent.textContent = item.description;
                    newsClone.querySelector('.news__read-more a')?.setAttribute('href', item.url);
                }
                fragment.append(newsClone);
            });

        const newsElem: HTMLElement | null = document.querySelector('.news');
        if (newsElem != null) {
            newsElem.innerHTML = '';
            newsElem.appendChild(fragment);
        }
    }
}

export default News;
