import React from 'react';
import Title from '../../Title/Title';
import styles from './Inicio.module.css';

export default function Inicio() {
  return (
    <div className={styles.this}>
      <Title>
        hola<span className='col1'>*･°</span>
      </Title>
      <div className={styles.block}>
        <div className={styles.line}>
          soy dylan
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.line}>
          <div>compongo, produzco</div>
        </div>
        <div className={styles.line}>
          <div>programo, diseño sonidos</div>
        </div>
        <div className={styles.line}>
          <div>me gustaría hacer jueguitos</div>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.line}>
          <div>esta página es para compartir las cosas que hago y también las cosas que me gustan</div>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.line}>
          <div>fan de:</div>
          <ul>
            <li>c o m p u t a d o r a s</li>
            <li>l i s t a s d e s o r d e n a d a s</li>
            <li>m a t e</li>
            <li>p i r a t e r í a</li>
            <li>p s 2</li>
            <li>p u r e    d a t a</li>
            <li>s l a s h e r s o c h e n t o s o s</li>
            <li>u n i v e r s i d a d p ú b l i c a</li>
          </ul>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.line}>
          <div> _/</div>
          <div>(_)</div>
        </div>
      </div>
    </div>
  )
}