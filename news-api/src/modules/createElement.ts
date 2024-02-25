export default function <T extends keyof HTMLElementTagNameMap>(
    tagName: T,
    classList?: string[],
    attributes?: Record<string, string>,
    textCont?: string
): HTMLElement {
    const elem = document.createElement(tagName);
    if (classList) elem.classList.add(...classList);
    if (attributes)
        Object.entries(attributes).forEach((item) => {
            elem.setAttribute(...item);
        });
    if (textCont) elem.textContent = textCont;

    return elem;
}
