import { countriesCode } from './countiesCode';

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

export enum Countries {
    ae = countriesCode['ae'],
    ar = countriesCode['ar'],
    at = countriesCode['at'],
    au = countriesCode['au'],
    be = countriesCode['be'],
    bg = countriesCode['bg'],
    br = countriesCode['br'],
    ca = countriesCode['ca'],
    ch = countriesCode['ch'],
    cn = countriesCode['cn'],
    co = countriesCode['co'],
    cu = countriesCode['cu'],
    cz = countriesCode['cz'],
    de = countriesCode['de'],
    eg = countriesCode['eg'],
    fr = countriesCode['fr'],
    gb = countriesCode['gb'],
    gr = countriesCode['gr'],
    hk = countriesCode['hk'],
    hu = countriesCode['hu'],
    id = countriesCode['id'],
    ie = countriesCode['ie'],
    il = countriesCode['il'],
    in = countriesCode['in'],
    it = countriesCode['it'],
    jp = countriesCode['jp'],
    kr = countriesCode['kr'],
    lt = countriesCode['lt'],
    lv = countriesCode['lv'],
    ma = countriesCode['ma'],
    mx = countriesCode['mx'],
    my = countriesCode['my'],
    ng = countriesCode['ng'],
    nl = countriesCode['nl'],
    no = countriesCode['no'],
    nz = countriesCode['nz'],
    ph = countriesCode['ph'],
    pl = countriesCode['pl'],
    pt = countriesCode['pt'],
    ro = countriesCode['ro'],
    rs = countriesCode['rs'],
    ru = countriesCode['ru'],
    sa = countriesCode['sa'],
    se = countriesCode['se'],
    sg = countriesCode['sg'],
    si = countriesCode['si'],
    sk = countriesCode['sk'],
    th = countriesCode['th'],
    tr = countriesCode['tr'],
    tw = countriesCode['tw'],
    ua = countriesCode['ua'],
    us = countriesCode['us'],
    ve = countriesCode['ve'],
    za = countriesCode['za'],
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
