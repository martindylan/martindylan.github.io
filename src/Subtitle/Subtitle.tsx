import React, { ReactNode } from 'react';
import styles from './Subtitle.module.css';

type Props = {
  children?: ReactNode
}

export default function Subtitle(props: Props) {
  return (
    <div className={styles.this}>
      <div className={styles.line}></div>
      <div className={styles.name}>
        {props.children &&
          <h1><span style={{ marginRight: '4px' }}>•</span>{props.children}</h1>
        }
      </div>
    </div>
  )
}
