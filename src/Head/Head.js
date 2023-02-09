import React, { useState } from 'react';
import styles from './Head.module.css';
import Nav from './Nav/Nav';
import Dropdown from './Dropdown/Dropdown';
import Foot from '../Foot/Foot';

export default function Head() {
  const [dropDisplay, setDropDisplay] = useState("d-none");

  function dropNav() {
    if (dropDisplay === "d-flex") {
      setDropDisplay("d-none");
    } else {
      setDropDisplay("d-flex");
    }
  }

  return (
    <div className={styles.this}>
      <div className={styles.bar}>
        <div className={styles.title}><h2>dylan martin</h2></div>
        <Nav display='d-none d-md-flex' />
        <Dropdown onClick={dropNav} />
      </div>
      <Nav display={`${dropDisplay} d-md-none`} />
      <Foot display={`${dropDisplay} d-md-none`} />
      <hr />
    </div>
  )
}
