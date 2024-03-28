import React from 'react';
import styles from './CardLong.module.css';

type Props = {
  name?: string,
  link?: string,
  img?: string,
  description?: any,
  foot?: string,
  right?: boolean
}

export default function Card(props: Props) {
  return (
    <div className={`${styles.this} ${props.right ? styles.right : ''}`}>
      <a
        className={`${props.link ? styles.linked : ''} ${props.right ? styles.right : ''}`}
        href={props.link}
        target='_blank'
        rel='noreferrer'
      >
        {props.img && <img src={props.img} alt='' />}
        <div className={`${styles.container} ${props.right ? styles.right : ''}`}>
          <div className={styles.name}>
            <h2>{props.name}</h2>
          </div>
          <div className={`${styles.body} ${props.right ? styles.right : ''}`}>
            <div className={styles.description}>
              {props.description.map((item: string, i: number) => {
                return (
                  <>
                    <span key={i}>{item}</span>
                    <br />
                    <br />
                  </>
                );
              })}
            </div>
            {props.foot &&
              <div className={styles.foot}>
                <span>• {props.foot}</span>
              </div>
            }
          </div>
        </div>
      </a>
    </div>
  )
}