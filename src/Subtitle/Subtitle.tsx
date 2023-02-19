import React from 'react';
import './Subtitle.css';

type Props = {
  name?: string
}

export default function Subtitle(props: Props) {
  return (
    <div className='Subtitle'>
      <div className="line"></div>
      <div className="name">
        <h1><span>★</span>{props.name}</h1>
      </div>
    </div>
  )
}
