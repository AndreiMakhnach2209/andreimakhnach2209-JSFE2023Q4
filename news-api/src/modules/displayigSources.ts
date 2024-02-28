export function collapseSources(): void {
    document.querySelector('.more-sources')?.classList.remove('no-display');
    document.querySelector('.sources')?.classList.remove('sources__opened');
    document.querySelector('.close-btn')?.classList.add('no-display');
}

export function expandSources(): void {
    document.querySelector('.sources')?.classList.add('sources__opened');
    document.querySelector('.more-sources')?.classList.add('no-display');
    document.querySelector('.close-btn')?.classList.remove('no-display');
}
