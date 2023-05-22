import React, { useEffect, useState } from 'react';
import styles from './Head.module.css';
import Nav from './Nav/Nav';
import Dropdown from './Dropdown/Dropdown';
import Foot from '../Foot/Foot';
import { useDropdownContext } from '../DropdownProvider';

export default function Head() {
  const [dropDisplay, setDropDisplay] = useState("d-none");
  const { isDropped } = useDropdownContext();

  useEffect(() => {
    if (isDropped) {
      setDropDisplay("d-flex");
    } else {
      setDropDisplay("d-none");
    }
  }, [isDropped]);

  return (
    <div className={styles.this}>
      <div className={styles.bar}>
        <div className={styles.title}><h2>dylan martin</h2></div>
        {/* Desktop nav */}
        <Nav display='d-none d-md-flex' />
        {/* Mobile dropdown button */}
        <Dropdown />
      </div>
      {/* Mobile nav and foot */}
      <Nav display={`${dropDisplay} d-md-none`} />
      <Foot display={`${dropDisplay} d-md-none`} />
      <hr />
    </div>
  )
}
