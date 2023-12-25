import React from 'react';
import styles from './SmallTitle.module.css';

type Props = {
  children?: React.ReactNode
}

export default function SmallTitle(props: Props) {
  return (
    <div className={styles.this}>
      <div className={styles.text}>
        <span>{props.children}</span>
      </div>
    </div>
  )
}
