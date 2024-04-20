import createElement from '../../../utilits/createElement';
import linkImage from '../../../assets/img/githublink.png';
import styles from './footer.module.scss';

export default class Footer extends HTMLDivElement {
  constructor() {
    super();
    const authorGithubLink = createElement(
      'a',
      [styles.githubLink],
      { href: 'https://github.com/AndreiMakhnach2209' },
      createElement('img', [styles.linkImage], {
        src: linkImage,
        alt: 'Andrei Makhnach',
      })
    );
    const logoRSS = createElement(
      'a',
      [styles.linkSchool],
      { href: 'https://rs.school/' },
      createElement('img', [styles.logoSchool], {
        src: 'https://rollingscopes.com/assets/rs-logo-2XN05XgC.webp',
        alt: 'RSSchool',
      })
    );
    this.className = styles.footerInner;
    this.append(authorGithubLink, '2024', logoRSS);
  }

  public insert() {
    document.body.append(createElement('footer', [styles.footer], {}, this));
  }
}

customElements.define('footer-inner', Footer, { extends: 'div' });
