import WordCollection from '../components/word/wordCollection';

export function dropHandler(event: Event) {
  const { target } = event;
  const { currentTarget } = event;

  if (
    event instanceof DragEvent &&
    target instanceof HTMLElement &&
    currentTarget instanceof HTMLElement
  ) {
    if (target.dataset.isEmpty) {
      if (target.nextElementSibling) {
        WordCollection.siblingForDroppedNode =
          target.nextElementSibling as HTMLElement;
        WordCollection.insertMethod = 'before';
      } else {
        WordCollection.siblingForDroppedNode =
          target.previousElementSibling as HTMLElement;
        WordCollection.insertMethod = 'after';
      }
      return;
    }

    if (currentTarget.lastChild instanceof HTMLElement) {
      if (
        event.offsetX >
        currentTarget.lastChild.offsetLeft + currentTarget.lastChild.clientWidth
      ) {
        WordCollection.insertMethod = 'after';
      }
    } else {
      WordCollection.insertMethod = 'after';
    }
  }
}
