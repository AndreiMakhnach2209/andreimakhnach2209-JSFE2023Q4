import Button from '../../../../components/buttons';
import createElement from '../../../../utilits/creatingElement';
import FormCar from './components/formCar';
import styles from './controlPanel.module.scss';

export default class ControlPanel extends HTMLElement {
  public createForm = new FormCar('create');

  public updateForm = new FormCar('update');

  public raceBtn = new Button('RACE', 'button');

  public generateBtn = new Button('GENERATE', 'button');

  constructor() {
    super();
    this.className = styles.controlPanel;
    this.append(
      this.createForm,
      this.updateForm,
      createElement('div', [styles.btnsRow], {}, this.generateBtn, this.raceBtn)
    );
  }
}

customElements.define('control-panel', ControlPanel);
