import React from 'react';
import styles from './NavLink.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../../../AppProvider';

export default function NavLink({ name, path }) {
  const loc = useLocation();

  const {dispatch} = useAppContext();

  const click = () => {
    dispatch({
      type: 'isDropped',
      value: false
    });
  }

  return (
    <li className={styles.this}>
      {loc.pathname !== path &&
        <Link onClick={click} className='link-regular' to={path}>
          <span>{name}</span>
        </Link>
      }
      {loc.pathname === path &&
        <span className={styles.current}>{name}</span>
      }
    </li>
  )
}