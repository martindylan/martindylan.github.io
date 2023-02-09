import React from 'react';
import styles from './Link.module.css';

export default function Link(props) {
  return (
    <div className={styles.this}>
      <hr />
      <li className={styles.this}>
        <a href={props.href} target={props.target}>
          <span>{props.children}</span>
        </a>
        {props.description &&
          <div className={styles.description}>
            <div className={styles.line}></div>
            <div className={styles.text}>
              <span>{props.description}</span>
            </div>
          </div>
        }
      </li>
    </div>
  )
}
