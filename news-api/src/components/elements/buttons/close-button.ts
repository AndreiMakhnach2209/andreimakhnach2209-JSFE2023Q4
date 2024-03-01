import './close-button.css';

export default function (tag: string = 'div'): HTMLElement {
    const container = document.createElement(tag);
    container.className = 'close-btn__container';

    for (let i = 0; i < 2; i++) {
        const line = document.createElement('div');
        line.className = 'close-btn__line';
        container.append(line);
    }

    return container;
}
