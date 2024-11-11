import React from 'react';
import Title from '../../Title/Title';
import Subtitle from '../../Subtitle/Subtitle';
import Card from '../../Card/Card';
import { useTranslation } from 'react-i18next';
import img_cibertopo from './img/cibertopo.jpeg';
import img_moonlight from './img/moonlight.jpeg';
import img_samba from './img/samba.jpeg';
import img_jardines from './img/jardines.jpeg';
import img_sorocabana from './img/sorocabana.jpeg';

export default function Musica() {
  const [t, i18n] = useTranslation("global");

  return (
    <div>
      <Title>{t("music.title")}</Title>
      <section>
        <Subtitle>{t("music.discography")}</Subtitle>
        <div className='Card-container top'>
        <Card
            name='Jardines'
            link='https://sonidoatmosfericoediciones.bandcamp.com/album/jardines'
            description='2024'
            img={img_jardines}
            size='10rem'
            bottom
          />
          <Card
            name='cibertopo'
            link='https://dylan-martin.bandcamp.com/album/cibertopo'
            description='2022'
            img={img_cibertopo}
            size='10rem'
            bottom
          />
          <Card
            name='the moonlight shines on the irises'
            link='https://dylan-martin.bandcamp.com/album/the-moonlight-shines-on-the-irises'
            description='2022'
            img={img_moonlight}
            size='10rem'
            bottom
          />
        </div>
      </section>
      <section>
        <Subtitle>prod/mix/master</Subtitle>
        <div className='Card-container top'>
          <Card
            name='Jazmín y el pelícano - Sorocabana'
            link='https://open.spotify.com/album/7wBbmf0riiPD4o1IliU8h9?si=ykMmzpPjTqueluL-wTYtEA'
            description='2024 (prod + mix)'
            img={img_sorocabana}
            size='10rem'
            bottom
          />
          <Card
            name='durante - SAMBA DE VERÃO (durante remix)'
            link='https://amigosdelalima.bandcamp.com/track/samba-de-verao-durante-remix'
            description='2024 (mix + master)'
            img={img_samba}
            size='10rem'
            bottom
          />
        </div>
      </section>
    </div>
  )
}