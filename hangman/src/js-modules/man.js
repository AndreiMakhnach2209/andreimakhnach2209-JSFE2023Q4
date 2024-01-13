import styles from '../css-modules/man.css';
const container = document.createElement('div');
container.className = styles.container;

const head = document.createElement('div');
head.className = styles.head;
container.append(head);

const body = document.createElement('div');
body.className = styles.body;
container.append(body);

const leftArm = document.createElement('div'), 
      rightArm = document.createElement('div'),
      leftLeg = document.createElement('div'),
      rightLeg = document.createElement('div');
[leftArm, rightArm, leftLeg, rightLeg].forEach((item) => {
  item.className = styles.limb;
  container.append(item);
});
leftArm.classList.add(styles.arm, styles.left);
leftLeg.classList.add(styles.leg, styles.left);
rightArm.classList.add(styles.arm, styles.right);
rightLeg.classList.add(styles.leg, styles.right);
export default () => container;

