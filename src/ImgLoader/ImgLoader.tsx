import React, { useState } from 'react'
import styles from './ImgLoader.module.css'

type Props = {
  img: string,
  width?: string,
  height?: string,
  radius?: string,
  style?: Object
}

export default function ImgLoader(props: Props) {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className={styles.img_container}
      style={{
        width: props.width || (loading ? '12rem' : 'unset'),
        height: props.height || (loading ? '10rem' : 'unset'),
        borderRadius: props.radius || 'unset',
        ...props.style
      }}
    >
      <img
        src={props.img}
        alt=''
        onLoad={() => setLoading(false)}
        style={{
          opacity: loading ? '0.5' : '1',
          filter: loading ? 'blur(6px)' : 'unset'
        }}
      />
      <div className={styles.skeleton} style={{ display: loading ? 'unset' : 'none' }}></div>
    </div>
  )
}
