import React from 'react';
import styles from './Foot.module.css';
// import logoBandcamp from './img/logo-bandcamp.png';
import logoGithub from './img/logo-github.png';
import logoInstagram from './img/logo-instagram.png';

type Props = {
  display?: string
}

export default function Foot(props: Props) {
  return (
    <div className={styles.this}>
      <div className={`${props.display}`}>
        <div className={styles.links}>
          <a href='https://github.com/martindylan/' target='_blank' rel='noreferrer' ><img src={logoGithub} alt='github'></img></a>
          <a href='https://instagram.com/0.36787944117/' target='_blank' rel='noreferrer'><img src={logoInstagram} alt='instagram'></img></a>
          {/* <a href='https://dylan-martin.bandcamp.com/' target='_blank' rel='noreferrer' ><img src={logoBandcamp} alt='bandcamp'></img></a> */}
        </div>
      </div>
    </div>
  )
}