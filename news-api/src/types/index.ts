type Status = 'ok' | 'error';

interface RewritableSource {
    id: string | null;
    name: string;
    description?: string;
    url?: string;
    category?: 'business' | 'entertainment' | 'general' | 'health' | 'science' | 'sports' | 'technology';
    language?: 'ar' | 'de' | 'en' | 'es' | 'fr' | 'he' | 'it' | 'nl' | 'no' | 'pt' | 'ru' | 'sv' | 'ud' | 'zh';
    country?:
        | 'ae'
        | 'ar'
        | 'at'
        | 'au'
        | 'be'
        | 'bg'
        | 'br'
        | 'ca'
        | 'ch'
        | 'cn'
        | 'co'
        | 'cu'
        | 'cz'
        | 'de'
        | 'eg'
        | 'fr'
        | 'gb'
        | 'gr'
        | 'hk'
        | 'hu'
        | 'id'
        | 'ie'
        | 'il'
        | 'in'
        | 'it'
        | 'jp'
        | 'kr'
        | 'lt'
        | 'lv'
        | 'ma'
        | 'mx'
        | 'my'
        | 'ng'
        | 'nl'
        | 'no'
        | 'nz'
        | 'ph'
        | 'pl'
        | 'pt'
        | 'ro'
        | 'rs'
        | 'ru'
        | 'sa'
        | 'se'
        | 'sg'
        | 'si'
        | 'sk'
        | 'th'
        | 'tr'
        | 'tw'
        | 'ua'
        | 'us'
        | 've'
        | 'za';
}

interface RewritableArticle {
    source: Pick<RewritableSource, 'id' | 'name'>;
    author: string;
    title: string;
    description: string;
    url: string;
    urlToImage: string;
    publishedAt: string;
    content: string;
}

interface RewritableResponseMinorEndpoint {
    status: Status;
    code?: string; // in case of request error
    message?: string; // in case of request error
    sources?: Source[]; // in case of correct request
}

interface RewritableResponseEndpoint extends Pick<RewritableResponseMinorEndpoint, 'status'> {
    totalResults?: number;
    articles?: Article[];
}

export type Source = Readonly<RewritableSource>;

export type Article = Readonly<RewritableArticle>;

export type ResponseEndpoint = Readonly<RewritableResponseEndpoint>;

export type ResponseMinorEndpoint = Readonly<RewritableResponseMinorEndpoint>;

export type ResponseEndpointTypes = ResponseEndpoint | ResponseMinorEndpoint;

export type OptionsForLoader = Record<string, string>;
