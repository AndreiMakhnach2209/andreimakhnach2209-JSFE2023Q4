export default function showValidityMessage(event: Event) {
  const { target } = event;
  if (target instanceof HTMLInputElement) {
    switch (true) {
      case target.validity.tooShort:
        target.setCustomValidity(
          'The minimum length of the name field should be 3 characters, and the last name should be 4 characters'
        );

        break;
      case target.validity.patternMismatch:
        target.setCustomValidity(
          'First letter of field should be in uppercase. Only letters of the English alphabet and the hyphen symbol are accepted.'
        );

        break;
      default:
        target.setCustomValidity('');
        break;
    }
    target.reportValidity();
  }
}
