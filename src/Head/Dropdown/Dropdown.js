import React from 'react';
import './Dropdown.css';

export default function Dropdown({ onClick }) {
  return (
    <div className="Dropdown d-flex d-md-none">
      <button onClick={onClick}>
        <div className="menu">
        </div>
      </button>
    </div>
  )
}