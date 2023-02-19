import React from 'react';
import styles from './Link.module.css';

type Props = {
  href?: string,
  target?: string,
  children?: React.ReactNode,
  description?: string
}

export default function Link(props: Props) {
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
