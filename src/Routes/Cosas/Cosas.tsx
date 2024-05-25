import React from 'react';
import Title from '../../Title/Title';
import Subtitle from '../../Subtitle/Subtitle';
import Card from '../../Card/Card';
import img_pmatrix from './img/pmatrix.png';
import img_granola from './img/granola.png';
import img_mystortion from './img/mystortion.png';
import img_roads from './img/roads.png';
import img_polywave from './img/polywave.png';
import img_dm7617 from './img/dm7617.png';
import img_pullme from './img/pullme.png';
import img_dmtools from './img/dmtools.png';
import { useTranslation } from 'react-i18next';

export default function Cosas() {
  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <Title>{t("stuff.title")}</Title>
      <section>
        <Subtitle>web</Subtitle>
        <div className='Card-container'>
          <Card
            name={t("stuff.web.bubblewrap.name")}
            link='https://dylanmartin.neocities.org/cosas/bubblewrap/'
            description={t("stuff.web.bubblewrap.description")}
          />
          <Card
            name={t("stuff.web.polygon.name")}
            link='https://dylanmartin.neocities.org/cosas/polygon/'
            description={t("stuff.web.polygon.description")}
          />
          <Card
            name={t("stuff.web.noted.name")}
            link='https://martindylan.github.io/noted'
            description={t("stuff.web.noted.description")}
          />
          <Card
            name={t("stuff.web.ants.name")}
            link='https://dylanmartin.neocities.org/cosas/ants/'
            description={t("stuff.web.ants.description")}
          />
          <Card
            name={t("stuff.web.flute.name")}
            link='https://dylanmartin.neocities.org/cosas/flauta/'
            description={t("stuff.web.flute.description")}
          />
          <Card
            name={t("stuff.web.brush.name")}
            link='https://dylanmartin.neocities.org/cosas/pincel/'
            description={t("stuff.web.brush.description")}
          />
          <Card
            name={t("stuff.web.lll.name")}
            link='https://dylanmartin.neocities.org/cosas/lll/'
            description={t("stuff.web.lll.description")}
          />
        </div>
      </section>
      <section>
        <Subtitle>pure data/VST3</Subtitle>
        <div className="Card-container">
          <Card
            name="pmatrix~"
            link="https://github.com/martindylan/pmatrix"
            description={t("stuff.puredata.pmatrix.description")}
            img={img_pmatrix}
          />
          <Card
            name="granola~"
            link="https://github.com/martindylan/granola"
            description={t("stuff.puredata.granola.description")}
            img={img_granola}
          />
          <Card
            name="mystortion~"
            link="https://github.com/martindylan/mystortion"
            description={t("stuff.puredata.mystortion.description")}
            img={img_mystortion}
          />
          <Card
            name="roads~"
            link="https://github.com/martindylan/roads"
            description={t("stuff.puredata.roads.description")}
            img={img_roads}
          />
          <Card
            name="polywave~"
            link="https://github.com/martindylan/pd-polywave"
            description={t("stuff.puredata.polywave.description")}
            img={img_polywave}
          />
          <Card
            name="pullme~"
            link="https://github.com/martindylan/pd-pullme"
            description={t("stuff.puredata.pullme.description")}
            img={img_pullme}
          />
          <Card
            name="dm7617~"
            link="https://github.com/martindylan/pd-dm7617"
            description={t("stuff.puredata.dm7617.description")}
            img={img_dm7617}
          />
          <Card
            name="dmtools"
            link="https://github.com/martindylan/pd-dmtools"
            description={t("stuff.puredata.dmtools.description")}
            img={img_dmtools}
          />
        </div>
      </section>
    </div>
  )
}