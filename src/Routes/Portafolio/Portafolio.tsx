import React from 'react';
import Title from '../../Title/Title';
import CardLong from '../../CardLong/CardLong';
import img_gest from './img/gest.jpeg';
import img_raytone from './img/raytone.jpeg';
import img_anhelo from './img/anhelo.jpeg';
import img_puredata from './img/puredata.jpeg';
import img_presupuesto from './img/presupuesto.jpeg'
import img_agua from './img/agua.jpeg';
import { useTranslation } from 'react-i18next';

export default function Cosas() {
  const [t, i18n] = useTranslation("global");
  const list = [
    {
      name: t("portfolio.gest.name"),
      link: `https://uncinnova.unc.edu.ar/2023/05/09/gest-instrumento-musical-virtual-gestual/`,
      img: img_gest,
      description: t("portfolio.gest.description", { returnObjects: true }),
      foot: t("portfolio.gest.foot")
    },
    {
      name: t("portfolio.agua.name"),
      img: img_agua,
      description: t("portfolio.agua.description", { returnObjects: true }),
      foot: t("portfolio.agua.foot")
    },
    {
      name: t("portfolio.anhelo.name"),
      link: `https://youtu.be/Ew8ynAkciSo`,
      img: img_anhelo,
      description: t("portfolio.anhelo.description", { returnObjects: true }),
      foot: t("portfolio.anhelo.foot")
    },
    {
      name: t("portfolio.raytone.name"),
      link: `https://youtu.be/4WC5qjHF27w`,
      img: img_raytone,
      description: t("portfolio.raytone.description", { returnObjects: true }),
      foot: t("portfolio.raytone.foot")
    },
    {
      name: t("portfolio.puredata.name"),
      link: `https://github.com/martindylan`,
      img: img_puredata,
      description: t("portfolio.puredata.description", { returnObjects: true }),
      foot: t("portfolio.puredata.foot")
    },
    {
      name: t("portfolio.presupuesto.name"),
      link: `https://soundcloud.com/cibertopo/paisaje_sonoro_museo_documento_ascenso_carlos_ivwav/s-VHeI6xv4I6h?si=d1552917e01f4a27b9f7b50a850de0d2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing`,
      img: img_presupuesto,
      description: t("portfolio.presupuesto.description", { returnObjects: true }),
      foot: t("portfolio.presupuesto.foot")
    },
  ];

  return (
    <div className='Cosas'>
      <Title>{t("portfolio.title")}</Title>
      <section>

        {list.map((item, i) => (
          <React.Fragment key={i}>
            <hr />
            <div className='CardLong-container'>
              <CardLong
                right={i % 2 !== 0}
                name={item.name}
                link={item.link}
                img={item.img}
                description={item.description}
                foot={item.foot}
              />
            </div>
          </React.Fragment>
        ))}
      </section>
    </div>
  )
}