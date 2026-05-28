import React from 'react';
import Title from '../../Title/Title';
import Subtitle from '../../Subtitle/Subtitle';
import Card from '../../Card/Card';
import { useTranslation } from 'react-i18next';
import img_cibertopo from './img/cibertopo.jpeg';
import img_moonlight from './img/moonlight.jpeg';
import img_samba from './img/samba.jpeg';
import img_jardines from './img/jardines.jpeg';
import img_mapamundi from './img/mapamundi.jpeg';
import img_afuera from './img/afuera.jpeg';
import img_amores from './img/amores.jpeg';
import img_caminante from './img/caminante.jpeg';

export default function Musica() {
  const [t, ] = useTranslation("global");

  return (
    <div>
      <Title>{t("music.title")}</Title>
      <section>
        <Subtitle>{t("music.discography")}</Subtitle>
        <div className='Card-container top left'>
        <Card
            name='Jardines'
            link='https://sonidoatmosfericoediciones.bandcamp.com/album/jardines'
            description='2024'
            img={img_jardines}
            size='9rem'
            bottom
          />
          <Card
            name='cibertopo'
            link='https://dylan-martin.bandcamp.com/album/cibertopo'
            description='2022'
            img={img_cibertopo}
            size='9rem'
            bottom
          />
          <Card
            name='the moonlight shines on the irises'
            link='https://dylan-martin.bandcamp.com/album/the-moonlight-shines-on-the-irises'
            description='2022'
            img={img_moonlight}
            size='9rem'
            bottom
          />
        </div>
      </section>
      <section>
        <Subtitle>prod/mix/master</Subtitle>
        <div className='Card-container top left'>
          <Card
            name='Caminante'
            link='https://open.spotify.com/album/42uXzPXcWNm9hIbcsMyes7?si=aARm4I9ETymS713c5JKmYA'
            description={['Flaneur', '2026 (mix + master)']}
            img={img_caminante}
            size='9rem'
            bottom
          />
          <Card
            name='Amores No'
            link='https://open.spotify.com/album/2HAg7BCYTH5g4l4IKYw7po?si=-cf2z4--Rdien1zMi1_a-A'
            description={['lucia boreal & Liria Liria', '2025 (master)']}
            img={img_amores}
            size='9rem'
            bottom
          />
          <Card
            name='Afuera'
            link='https://open.spotify.com/album/71BNx3BmlGl1KEikjCx3ay?si=jE4scSInSpikaTyBQKrEjw'
            description={['las cosas que no fueron & Liria Liria', '2025 (mix assist + master)']}
            img={img_afuera}
            size='9rem'
            bottom
          />
          <Card
            name='Mapamundi'
            link='https://open.spotify.com/album/71BNx3BmlGl1KEikjCx3ay?si=jE4scSInSpikaTyBQKrEjw'
            description={['Jazmín y el pelícano', '2024 (prod + mix)']}
            img={img_mapamundi}
            size='9rem'
            bottom
          />
          <Card
            name='SAMBA DE VERÃO (durante remix)'
            link='https://amigosdelalima.bandcamp.com/track/samba-de-verao-durante-remix'
            description={['durante', '2024 (mix + master)']}
            img={img_samba}
            size='9rem'
            bottom
          />
        </div>
      </section>
    </div>
  )
}