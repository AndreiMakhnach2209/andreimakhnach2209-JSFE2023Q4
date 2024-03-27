import Button from '../../../../../components/buttons';
import { CarInfo } from '../../../../../types/index';
import createElement from '../../../../../utilits/creatingElement';
import styles from './formCar.module.scss';

export default class FormCar extends HTMLFormElement {
  public textInput = createElement('input', [styles.textInput], {
    type: 'text',
    name: 'name',
  }) as HTMLInputElement;

  public colorInput = createElement('input', [styles.colorInput], {
    type: 'color',
    name: 'color',
    value: '#aaaaaa',
  }) as HTMLInputElement;

  public idPseudoInput = createElement('input', [], {
    type: 'hidden',
    name: 'id',
  }) as HTMLInputElement;

  public btnSubmit = new Button('', 'submit');

  constructor(private character: 'create' | 'update') {
    super();
    this.className = styles.formCar;
    this.method = 'POST';
    this.btnSubmit.value = character.toUpperCase();
    this.btnSubmit.disabled = true;
    this.textInput.required = true;
    if (character === 'update') {
      [this.textInput, this.colorInput].forEach((item) => {
        item.setAttribute('disabled', 'true');
      });
    }
    this.append(
      this.textInput,
      this.colorInput,
      this.idPseudoInput,
      this.btnSubmit
    );
    this.textInput.addEventListener('input', () => {
      this.btnSubmit.disabled = !this.checkValidity();
    });
  }

  public fill(carInfo: CarInfo) {
    this.textInput.value = carInfo.name;
    this.colorInput.value = carInfo.color;
    [this.textInput, this.colorInput, this.btnSubmit].forEach((item) => {
      item.removeAttribute('disabled');
    });
  }

  public reset(): void {
    super.reset();
    if (this.character === 'update')
      [this.textInput, this.colorInput, this.btnSubmit].forEach((item) => {
        item.setAttribute('disabled', 'true');
      });
  }
}

customElements.define('custom-form', FormCar, { extends: 'form' });
