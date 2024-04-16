export default function validate(event: Event) {
  let form: HTMLFormElement | null = null;
  if (event.target instanceof HTMLInputElement) form = event.target.form;
  if (form instanceof HTMLFormElement) {
    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn instanceof HTMLInputElement)
      submitBtn.disabled = !form.checkValidity();
  }
}
