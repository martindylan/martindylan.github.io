import React from 'react';
import styles from './Nav.module.css';
import NavLink from './NavLink/NavLink';

export default function Nav({ display }) {

  return (
    <div className={styles.this}>
      <ul className={display}>
        <NavLink name='inicio' path='/' />
        <NavLink name='audio' path='/audio' />
        <NavLink name='cosas' path='/cosas' />
        <NavLink name='gente increíble' path='/gente' />
        <NavLink name='lugares increíbles' path='/lugares' />
      </ul>
    </div >
  )
}
