import React from 'react';
import Title from '../../Title/Title';
import styles from './Inicio.module.css';
import { useTranslation } from 'react-i18next';

export default function Inicio() {
  const [t, i18n] = useTranslation("global");

  return (
    <div className={styles.this}>
      <Title>
        {t("home.title")}<span className='col1'>*･°</span>
      </Title>
      <div className={styles.block}>
        <div className={styles.line}>
          {t("home.blocks.0.lines.0")}
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.line}>
          <div>{t("home.blocks.1.lines.0")}</div>
        </div>
        <div className={styles.line}>
          <div>{t("home.blocks.1.lines.1")}</div>
        </div>
        <div className={styles.line}>
          <div>{t("home.blocks.1.lines.2")}</div>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.line}>
          <div>{t("home.blocks.2.lines.0")}</div>
        </div>
      </div>
      <div className={styles.block}>
        <div className={styles.line}>
          <div>{t("home.blocks.3.lines.0")}:</div>
          <ul>
            <li>{t("home.blocks.3.items.0")}</li>
            <li>{t("home.blocks.3.items.1")}</li>
            <li>{t("home.blocks.3.items.2")}</li>
            <li>{t("home.blocks.3.items.3")}</li>
            <li>{t("home.blocks.3.items.4")}</li>
            <li>{t("home.blocks.3.items.5")}</li>
            <li>{t("home.blocks.3.items.6")}</li>
            <li>{t("home.blocks.3.items.7")}</li>
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