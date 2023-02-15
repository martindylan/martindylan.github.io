import React from 'react';
import { useAppContext } from '../../AppProvider';
import './Dropdown.css';

export default function Dropdown() {
  const { isDropped, dispatch } = useAppContext();

  const click = () => {
    dispatch({
      type: 'isDropped',
      value: !isDropped
    });
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