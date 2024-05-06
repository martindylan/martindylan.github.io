import React from 'react';
import styles from './Nav.module.css';
import NavLink from './NavLink/NavLink';
import { useTranslation } from 'react-i18next';

type Props = {
  display?: string
}

export default function Nav(props: Props) {
  const [t, i18n] = useTranslation("global");

  return (
    <div className={styles.this}>
      <ul className={props.display}>
        <NavLink name={t("nav.home")} path='/' />
        <NavLink name={t("nav.portfolio")} path='/portafolio' />
        <NavLink name={t("nav.music")} path='/musica' />
        <NavLink name={t("nav.stuff")} path='/cosas' />
        <NavLink name={t("nav.people")} path='/gente' />
        <NavLink name={t("nav.places")} path='/lugares' />
      </ul>
    </div >
  )
}
