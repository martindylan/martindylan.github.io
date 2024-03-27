import React from 'react';
import styles from './Nav.module.css';
import NavLink from './NavLink/NavLink';

type Props = {
  display?: string
}

export default function Nav(props: Props) {

  return (
    <div className={styles.this}>
      <ul className={props.display}>
        <NavLink name='inicio' path='/' />
        <NavLink name='portafolio' path='/portafolio' />
        {/* <NavLink name='audio' path='/audio' />
        <NavLink name='cosas' path='/cosas' /> */}
        <NavLink name='gente increíble' path='/gente' />
        <NavLink name='lugares increíbles' path='/lugares' />
      </ul>
    </div >
  )
}
