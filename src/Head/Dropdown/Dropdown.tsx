import React from 'react';
import { useDropdownContext } from '../../DropdownProvider';
import './Dropdown.css';

export default function Dropdown() {
  const { isDropped, drop } = useDropdownContext();

  const click = () => {
    drop(!isDropped);
  }

  return (
    <div className="Dropdown d-flex d-md-none">
      <button onClick={click}>
        <div className="menu">
        </div>
      </button>
    </div>
  )
}