import React from 'react';
import Title from '../../Title/Title';
import Subtitle from '../../Subtitle/Subtitle';
import Card from '../../Card/Card';
import img_cibertopo from './img/cibertopo.jpeg';
import img_moonlight from './img/moonlight.jpeg';
// import img_samba from './img/samba.jpeg';

export default function Musica() {
  return (
    <div>
      <Title>música</Title>
      <section>
        <Subtitle>discografía</Subtitle>
        <div className='Card-container top'>
          <Card
            name='cibertopo'
            link='https://dylan-martin.bandcamp.com/album/cibertopo'
            description='2022 - EP'
            img={img_cibertopo}
            size='10rem'
            bottom
          />
          <Card
            name='the moonlight shines on the irises'
            link='https://dylan-martin.bandcamp.com/album/the-moonlight-shines-on-the-irises'
            description='2022 - EP'
            img={img_moonlight}
            size='10rem'
            bottom
          />
        </div>
      </section>
      {/* <section>
        <Subtitle>prod/mix/master</Subtitle>
        <div className='Card-container top'>
          <Card
            name='SAMBA DE VERÃO (durante remix)'
            link='https://amigosdelalima.bandcamp.com/track/samba-de-verao-durante-remix'
            description='2024 - sencillo (mezcla y masterización)'
            img={img_samba}
            size='10rem'
            bottom
          />
        </div>
      </section> */}
    </div>
  )
}