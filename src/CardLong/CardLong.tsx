import React, { useState } from 'react';
import styles from './CardLong.module.css';
import ImgLoader from '../ImgLoader/ImgLoader';

type Props = {
  name?: string,
  link?: string,
  img?: string,
  description?: any,
  foot?: string,
  right?: boolean
}

export default function Card(props: Props) {
  const [loading, setLoading] = useState(true);
  return (
    <div className={`${styles.this} ${props.right ? styles.right : ''}`}>
      <a
        className={`${props.link ? styles.linked : styles.unlinked}`}
        href={props.link}
        target='_blank'
        rel='noreferrer'
      >
        {props.img && <ImgLoader img={props.img} width='24rem' height='16rem' radius='1rem' />}
        <div className={styles.container}>
          <div className={styles.name}>
            <h2>{props.name}</h2>
          </div>
          <div className={styles.body}>
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