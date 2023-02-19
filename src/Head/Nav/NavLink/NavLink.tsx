import React from 'react';
import styles from './NavLink.module.css';
import { Link, useLocation } from 'react-router-dom';
import { useAppContext } from '../../../AppProvider';

type Props = {
  name?: string,
  path?: string
}

export default function NavLink(props: Props) {
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
      {loc.pathname !== props.path &&
        <Link onClick={click} className='link-regular' to={props.path!}>
          <span>{props.name}</span>
        </Link>
      }
      {loc.pathname === props.path &&
        <span className={styles.current}>{props.name}</span>
      }
    </li>
  )
}