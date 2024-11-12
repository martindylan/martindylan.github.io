import React from 'react';
import styles from './Card.module.css';
import ImgLoader from '../ImgLoader/ImgLoader';

type Props = {
  name?: string,
  link?: string,
  img?: string,
  size?: string,
  description?: string | Array<string>,
  bottom?: boolean
}

export default function Card(props: Props) {
  return (
    <div className={styles.this}>
      <a href={props.link} target='_blank' rel='noreferrer' style={{ width: props.size || 'unset' }}>
        {!props.bottom && <div className={styles.name}>
          <h2>{props.name}</h2>
        </div>}
        {props.img && <ImgLoader img={props.img} width={props.size} height={props.size} style={{ marginBottom: '4px' }} />}
        {props.bottom && <div className={styles.name}>
          <h2>{props.name}</h2>
        </div>}
        {props.description?.constructor === Array ?
          <>
            {props.description.map((desc) => (
              <div className={styles.description}>
                <span>{desc}</span>
              </div>
            ))}
          </>
          :
          <div className={styles.description}>
            <span>{props.description}</span>
          </div>
        }
      </a>
    </div>
  )
}