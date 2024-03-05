import { CountriesCode } from './countiesCode';
import { LanguagesCode } from './langugesCode';

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

export enum Languages {
    ar = LanguagesCode['ar'],
    de = LanguagesCode['de'],
    en = LanguagesCode['en'],
    es = LanguagesCode['es'],
    fr = LanguagesCode['fr'],
    he = LanguagesCode['he'],
    it = LanguagesCode['it'],
    nl = LanguagesCode['nl'],
    no = LanguagesCode['no'],
    pt = LanguagesCode['pt'],
    ru = LanguagesCode['ru'],
    sv = LanguagesCode['sv'],
    ud = 'ud',
    zh = LanguagesCode['zh'],
}

export enum Countries {
    ae = CountriesCode['ae'],
    ar = CountriesCode['ar'],
    at = CountriesCode['at'],
    au = CountriesCode['au'],
    be = CountriesCode['be'],
    bg = CountriesCode['bg'],
    br = CountriesCode['br'],
    ca = CountriesCode['ca'],
    ch = CountriesCode['ch'],
    cn = CountriesCode['cn'],
    co = CountriesCode['co'],
    cu = CountriesCode['cu'],
    cz = CountriesCode['cz'],
    de = CountriesCode['de'],
    eg = CountriesCode['eg'],
    fr = CountriesCode['fr'],
    gb = CountriesCode['gb'],
    gr = CountriesCode['gr'],
    hk = CountriesCode['hk'],
    hu = CountriesCode['hu'],
    id = CountriesCode['id'],
    ie = CountriesCode['ie'],
    il = CountriesCode['il'],
    in = CountriesCode['in'],
    it = CountriesCode['it'],
    jp = CountriesCode['jp'],
    kr = CountriesCode['kr'],
    lt = CountriesCode['lt'],
    lv = CountriesCode['lv'],
    ma = CountriesCode['ma'],
    mx = CountriesCode['mx'],
    my = CountriesCode['my'],
    ng = CountriesCode['ng'],
    nl = CountriesCode['nl'],
    no = CountriesCode['no'],
    nz = CountriesCode['nz'],
    ph = CountriesCode['ph'],
    pl = CountriesCode['pl'],
    pt = CountriesCode['pt'],
    ro = CountriesCode['ro'],
    rs = CountriesCode['rs'],
    ru = CountriesCode['ru'],
    sa = CountriesCode['sa'],
    se = CountriesCode['se'],
    sg = CountriesCode['sg'],
    si = CountriesCode['si'],
    sk = CountriesCode['sk'],
    th = CountriesCode['th'],
    tr = CountriesCode['tr'],
    tw = CountriesCode['tw'],
    ua = CountriesCode['ua'],
    us = CountriesCode['us'],
    ve = CountriesCode['ve'],
    za = CountriesCode['za'],
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

export enum ErrorCodes {
    unauthorized = 401,
    notFound = 404,
}
