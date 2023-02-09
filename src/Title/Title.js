import React from 'react';
import styles from './Title.module.css';

export default function Title(props) {
  return (
    <div className={styles.this}>
      <h1>{props.children}</h1>
    </div>
  )
}
