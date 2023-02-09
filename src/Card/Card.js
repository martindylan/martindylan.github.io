import React from 'react';
import styles from './Card.module.css';

export default function Card(props) {
  return (
    <div className={styles.this}>
      <a href={props.link} target='_blank' rel='noreferrer'>
        <div className={styles.card}>
          <div className={styles.name}>
            <h2>{props.name}</h2>
          </div>
          {props.img && <img src={props.img} alt=''/>}
          <div className={styles.description}>
            <span>{props.description}</span>
          </div>
        </div>
      </a>
    </div>
  )
}