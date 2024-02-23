'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
require('./news.css');
var News = /** @class */ (function () {
    function News() {}
    News.prototype.draw = function (data) {
        var news =
            data.length >= 10
                ? data.filter(function (_item, idx) {
                      return idx < 10;
                  })
                : data;
        var fragment = document.createDocumentFragment();
        var newsItemTemp = document.querySelector('#newsItemTemp');
        if (newsItemTemp != null)
            news.forEach(function (item, idx) {
                var _a, _b;
                var newsClone = newsItemTemp.content.cloneNode(true);
                if (newsClone instanceof DocumentFragment) {
                    if (idx % 2)
                        (_a = newsClone.querySelector('.news__item')) === null || _a === void 0
                            ? void 0
                            : _a.classList.add('alt');
                    var metaPhoto = newsClone.querySelector('.news__meta-photo');
                    if (metaPhoto != null)
                        metaPhoto.style.backgroundImage = 'url('.concat(
                            item.urlToImage || 'img/news_placeholder.jpg',
                            ')'
                        );
                    var metaAuthor = newsClone.querySelector('.news__meta-author');
                    if (metaAuthor != null) metaAuthor.textContent = item.author || item.source.name;
                    var metaDate = newsClone.querySelector('.news__meta-date');
                    if (metaDate != null)
                        metaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
                    var descTitle = newsClone.querySelector('.news__description-title');
                    if (descTitle != null) descTitle.textContent = item.title;
                    var descSource = newsClone.querySelector('.news__description-source');
                    if (descSource != null) descSource.textContent = item.source.name;
                    var descContent = newsClone.querySelector('.news__description-content');
                    if (descContent != null) descContent.textContent = item.description;
                    (_b = newsClone.querySelector('.news__read-more a')) === null || _b === void 0
                        ? void 0
                        : _b.setAttribute('href', item.url);
                }
                fragment.append(newsClone);
            });
        var newsElem = document.querySelector('.news');
        if (newsElem != null) {
            newsElem.innerHTML = '';
            newsElem.appendChild(fragment);
        }
    };
    return News;
})();
exports.default = News;
