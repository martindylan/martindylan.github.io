import React from 'react';
import styles from './Linklist.module.css';

export default function Linklist(props) {
  return (
    <ul className={styles.this}>
      {props.children}
    </ul>
  )
}