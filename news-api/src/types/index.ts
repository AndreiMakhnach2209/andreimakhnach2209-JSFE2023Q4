type Status = 'ok' | 'error';

export enum Categories {
    business = 'business',
    entertainment = 'entertainment',
    general = 'general',
    health = 'health',
    science = 'science',
    sports = 'sports',
    technology = 'technology',
}

export const enum Languages {
    ar = 'ar',
    de = 'de',
    en = 'en',
    es = 'es',
    fr = 'fr',
    he = 'he',
    it = 'it',
    nl = 'nl',
    no = 'no',
    pt = 'pt',
    ru = 'ru',
    sv = 'sv',
    ud = 'ud',
    zh = 'zh',
}

export const enum Countries {
    ae = 'ae',
    ar = 'ar',
    at = 'at',
    au = 'au',
    be = 'be',
    bg = 'bg',
    br = 'br',
    ca = 'ca',
    ch = 'ch',
    cn = 'cn',
    co = 'co',
    cu = 'cu',
    cz = 'cz',
    de = 'de',
    eg = 'eg',
    fr = 'fr',
    gb = 'gb',
    gr = 'gr',
    hk = 'hk',
    hu = 'hu',
    id = 'id',
    ie = 'ie',
    il = 'il',
    in = 'in',
    it = 'it',
    jp = 'jp',
    kr = 'kr',
    lt = 'lt',
    lv = 'lv',
    ma = 'ma',
    mx = 'mx',
    my = 'my',
    ng = 'ng',
    nl = 'nl',
    no = 'no',
    nz = 'nz',
    ph = 'ph',
    pl = 'pl',
    pt = 'pt',
    ro = 'ro',
    rs = 'rs',
    ru = 'ru',
    sa = 'sa',
    se = 'se',
    sg = 'sg',
    si = 'si',
    sk = 'sk',
    th = 'th',
    tr = 'tr',
    tw = 'tw',
    ua = 'ua',
    us = 'us',
    ve = 've',
    za = 'za',
}

interface RewritableSource {
    id: string | null;
    name: string;
    description?: string;
    url?: string;
    category?: Categories;
    language?: Languages;
    country?: Countries;
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
    code?: string;
    message?: string;
    sources?: Source[];
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

export type OptionsForLoader = RequestForEverything | RequestForSources;

export type Endpoint = 'sources' | 'everything';

const enum RequestParamForSources {
    apiKey = 'apiKey',
    category = 'category',
    language = 'language',
    country = 'country',
}

export type RequestForSources = Partial<Record<RequestParamForSources, string>>;

const enum RequestParamForEverything {
    apiKey = 'apiKey',
    q = 'q',
    searchIn = 'searchIn',
    sources = 'sources',
    domains = 'domains',
    excludeDomains = 'excludeDomains',
    from = 'from',
    to = 'to',
    language = 'language',
    sortBy = 'sortBy',
    pageSize = 'pageSize',
    page = 'page',
}
export type RequestForEverything = Partial<Record<RequestParamForEverything, string>>;
