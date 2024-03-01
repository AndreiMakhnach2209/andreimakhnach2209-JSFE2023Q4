import './burger-btn.css';

export default function <T extends keyof HTMLElementTagNameMap>(tag: T): HTMLElementTagNameMap[T] {
    const container = document.createElement(tag);
    container.id = 'burger_btn';
    container.className = 'burger_btn__container';
    for (let i = 0; i < 3; i++) {
        const line = document.createElement('div');
        line.className = 'burger_btn__line';
        container.append(line);
    }

    container.addEventListener('click', () => {
        container.classList.toggle('burger_btn__active');
    });
    return container;
}
