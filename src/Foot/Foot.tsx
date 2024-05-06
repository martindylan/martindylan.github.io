import React from 'react';
import styles from './Foot.module.css';
import logoGithub from './img/logo-github.png';
import logoInstagram from './img/logo-instagram.png';
import { useTranslation } from 'react-i18next';

type Props = {
  display?: string
}

export default function Foot(props: Props) {
  const [t, i18n] = useTranslation("global");

  return (
    <div className={styles.this}>
      <div
        className={`${props.display}`}
        style={{
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0.5rem 0.5rem 0.25rem'
        }}
      >
        <div className={styles.lang}>
          <span
            className={i18n.language == "es" ? styles.selected : ''}
            onClick={() => {
              i18n.changeLanguage("es");
              localStorage.setItem("i18n_language", "es");
            }}
          >
            ES
          </span>
          /
          <span
            className={i18n.language == "en" ? styles.selected : ''}
            onClick={() => {
              i18n.changeLanguage("en");
              localStorage.setItem("i18n_language", "en");
            }}
          >
            EN
          </span>
        </div>
        <div className={styles.links}>
          <div>dylanmartin1922@gmail.com</div>
          <a href='https://github.com/martindylan/' target='_blank' rel='noreferrer' ><img src={logoGithub} alt='github'></img></a>
          <a href='https://instagram.com/0.36787944117/' target='_blank' rel='noreferrer'><img src={logoInstagram} alt='instagram'></img></a>
        </div>
      </div>
    </div>
  )
}