import React from 'react';
import Title from '../../Title/Title';
import styles from './Inicio.module.css';
import { useTranslation } from 'react-i18next';

export default function Inicio() {
  const [t, i18n] = useTranslation("global");
  const blocks = t("home.blocks", { returnObjects: true }) as Array<any>;
  return (
    <div className={styles.this}>
      <Title>
        {t("home.title")}<span className='col1'>*･°</span>
      </Title>
      {blocks.map((block, i) => (
        <div key={i} className={styles.block}>
          {block.lines.map((line: string, i: number) => (
            <div key={i} className={styles.line}>
              <div>{line}</div>
              { }
            </div>
          ))}
          {block.items && (
            <ul>
              {block.items.map((item: string, i: number) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
      <div className={styles.block}>
        <div className={styles.line}>
          <div> _/</div>
          <div>(_)</div>
        </div>
      </div>
    </div>
  )
}