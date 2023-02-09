import React from 'react';
import './Subtitle.css';

export default function Subtitle(props) {
  return (
    <div className='Subtitle'>
      <div className="line"></div>
      <div className="name">
        <h1><span>★</span>{props.name}</h1>
      </div>
    </div>
  )
}
