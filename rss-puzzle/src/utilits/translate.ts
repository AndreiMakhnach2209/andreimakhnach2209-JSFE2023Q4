import WordCollection from '../components/word/wordCollection';

export function resetTranslate(element: HTMLElement | null) {
  if (element) {
    for (let i = 0; i < element.children.length; i += 1) {
      const child = element.children[i];
      if (child instanceof HTMLElement) {
        child.style.setProperty('transform', `translateX(0)`);
      }
    }
  }
}

export function translate(event: Event | HTMLElement, isRecall = false) {
  let target: HTMLElement | EventTarget | null = null;
  let offsetX = 0;
  if (event instanceof DragEvent) {
    target = event.target;
    if (target instanceof HTMLElement && !target.draggable)
      target = target.parentElement;
    offsetX = event.offsetX;
  }
  if (event instanceof HTMLElement) target = event;

  if (target instanceof HTMLElement) {
    const previous = target.previousElementSibling as HTMLElement | null;
    const next = target.nextElementSibling as HTMLElement | null;
    const animation: Keyframe[] = [
      {
        scale: 0.8,
      },
      {
        scale: 1,
      },
    ];
    if (!isRecall) {
      if (target.dataset.isEmpty) {
        return;
      }
      if (target.draggable) {
        WordCollection.siblingForDroppedNode = target;
        const translateValue =
          offsetX < target.clientWidth / 2 && !previous?.dataset.isEmpty
            ? WordCollection.dropped.node.clientWidth
            : 0;
        WordCollection.insertMethod =
          offsetX < target.clientWidth / 2 ? 'before' : 'after';
        target.style.setProperty('transform', `translateX(${translateValue}px`);
        if (offsetX < target.clientWidth / 2 && previous?.dataset.isEmpty)
          previous.animate(animation, 200);
        if (next) {
          if (translateValue) translate(next, true);
          else if (next.dataset.isEmpty) {
            if (offsetX > target.clientWidth / 2) next.animate(animation, 200);
          } else translate(next, true);
        }
      }
    } else {
      target.style.setProperty(
        'transform',
        `translateX(${WordCollection.dropped.node.clientWidth}px`
      );
      if (next) translate(next, true);
    }
  }
}
