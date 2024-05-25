import React from 'react';
import { useDropdownContext } from '../../DropdownProvider';
import './Dropdown.css';

export default function Dropdown() {
  const { isDropped, drop } = useDropdownContext();

  const click = () => {
    drop((prev: Boolean) => !prev);
  }

  return (
    <div className={`Dropdown d-flex d-md-none ${isDropped && 'dropped'}`}>
      <button onClick={click}>
        <div className='buttonContent'>
          <div className="menu" />
        </div>
      </button>
    </div>
  )
}