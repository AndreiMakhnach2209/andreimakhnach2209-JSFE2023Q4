export default function clearBody() {
  while (document.body.firstChild) document.body.firstChild.remove();
}
