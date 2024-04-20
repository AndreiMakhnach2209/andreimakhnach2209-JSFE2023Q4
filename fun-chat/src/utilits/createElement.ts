export default function createElement(
  tagName: keyof HTMLElementTagNameMap = 'div',
  classList?: string[],
  attributes?: Record<string, string>,
  ...children: (HTMLElement | string)[]
) {
  const element = document.createElement(tagName);
  element.classList.add(...(classList ?? []));
  if (attributes)
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  element.append(...children);
  return element;
}
