import FormCar from './components/formCar';
import styles from './controlPanel.module.scss';

export default class ControlPanel extends HTMLElement {
  public createForm = new FormCar('create');

  public updateForm = new FormCar('update');

  constructor() {
    super();
    this.className = styles.controlPanel;
    this.append(this.createForm, this.updateForm);
  }
}

customElements.define('control-panel', ControlPanel);
