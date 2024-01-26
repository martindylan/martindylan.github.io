import React from 'react';
import styles from './Foot.module.css';
import logoSpotifySmall from './img/logo-spotify-small.png';
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
          <a href='https://open.spotify.com/artist/28Iq0vqHr3bvU4H1FnVPqk/' target='_blank' rel='noreferrer' ><img src={logoSpotifySmall} alt='github'></img></a>
          <a href='https://instagram.com/0.36787944117/' target='_blank' rel='noreferrer'><img src={logoInstagram} alt='instagram'></img></a>
        </div>
      </div>
    </div>
  )
}