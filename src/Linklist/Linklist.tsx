import React from 'react';
import styles from './Linklist.module.css';

type Props = {
  children?: React.ReactNode
}

export default function Linklist(props: Props) {
  return (
    <ul className={styles.this}>
      {props.children}
    </ul>
  )
}