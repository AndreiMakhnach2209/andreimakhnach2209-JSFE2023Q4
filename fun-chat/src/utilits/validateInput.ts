export default function showValidityMessage(event: Event) {
  const { target } = event;
  if (target instanceof HTMLInputElement) {
    switch (true) {
      case target.validity.tooShort:
        if (target.type === 'password')
          target.setCustomValidity(
            'Пароль не должен быть короче 6 символов. Исползуйте цифры, строчные и заглавные буквы'
          );
        else target.setCustomValidity('Имя слишком короткое!');
        break;
      case target.validity.tooLong:
        target.setCustomValidity('Имя не должно быть больше 20 символов');
        break;
      case target.validity.patternMismatch:
        target.setCustomValidity(
          'Пароль должен содержать как минимум одну цифру, одну строчную букву и одну заглавную букву'
        );

        break;
      default:
        target.setCustomValidity('');
        break;
    }
    target.reportValidity();
  }
}
