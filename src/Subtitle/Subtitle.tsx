import React from 'react';
import styles from './Subtitle.module.css';

type Props = {
  name?: string
}

export default function Subtitle(props: Props) {
  return (
    <div className={styles.this}>
      <div className={styles.line}></div>
      <div className={styles.name}>
        {props.name &&
          <h1><span>★</span>{props.name}</h1>
        }
      </div>
    </div>
  )
}
