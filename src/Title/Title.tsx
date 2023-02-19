import React from 'react';
import styles from './Title.module.css';

type Props = {
  children?: React.ReactNode
}

export default function Title(props: Props) {
  return (
    <div className={styles.this}>
      <h1>{props.children}<span className='col1'>♡</span></h1>
    </div>
  )
}
