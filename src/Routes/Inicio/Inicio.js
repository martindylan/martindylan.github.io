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
          <p>hago música</p>
        </div>
        <div className={styles.line}>
          <p>programo audio y boludeces</p>
        </div>
        <div className={styles.line}>
          <p>juego jueguitos</p>
        </div>
        <div className={styles.line}>
          <p>me gustaría hacer jueguitos</p>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.line}>
          <p>esta página es para compartir las cosas que hago y también las cosas que me gustan</p>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.line}>
          <p>fan de:</p>
          <ul>
            <li>café</li>
            <li>computadoras</li>
            <li>listas desordenadas</li>
            <li>piratería</li>
            <li>ps2</li>
            <li>pure data</li>
            <li>slashers ochentosos</li>
          </ul>
        </div>
      </div>
    </div>
  )
}