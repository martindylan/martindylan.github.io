import React from 'react';
import styles from './Card.module.css';

type Props = {
  name?: string,
  link?: string,
  img?: string,
  size?: string,
  description?: string,
  bottom?: boolean
}

export default function Card(props: Props) {
  return (
    <div className={styles.this}>
      <a href={props.link} target='_blank' rel='noreferrer'>
        {!props.bottom && <div className={styles.name}>
          <h2>{props.name}</h2>
        </div>}
        {props.img && <img src={props.img} alt='' style={{ width: props.size }} />}
        {props.bottom && <div className={styles.name}>
          <h2>{props.name}</h2>
        </div>}
        <div className={styles.description}>
          <span>{props.description}</span>
        </div>
      </a>
    </div>
  )
}