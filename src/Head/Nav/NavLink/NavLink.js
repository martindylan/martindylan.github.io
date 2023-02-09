import React from 'react';
import styles from './NavLink.module.css';
import { Link, useLocation } from 'react-router-dom';

export default function NavLink({ name, path }) {
  const loc = useLocation();
  return (
    <li className={styles.this}>
      {loc.pathname !== path &&
        <Link className='link-regular' to={path}>
          <span>{name}</span>
        </Link>
      }
      {loc.pathname === path &&
        <span className={styles.current}>{name}</span>
      }
    </li>
  )
}