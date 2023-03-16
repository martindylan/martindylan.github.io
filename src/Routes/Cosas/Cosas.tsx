import React from 'react';
import Title from '../../Title/Title';
import Subtitle from '../../Subtitle/Subtitle';
import Card from '../../Card/Card';
import img_heal from './img/heal.jpeg';
import img_dreamyplaces from './img/dreamyplaces.jpeg';
import img_zzii from './img/zzii.jpeg';
import img_jitazos from './img/jitazos.jpeg';

export default function Cosas() {
  return (
    <div className='Cosas'>
      <Title>cosas</Title>
      <section>
        <Subtitle name='js/p5.js/etc' />
        <div className='Card-container'>
          <Card name='bubblewrap' link='https://dylanmartin.neocities.org/cosas/bubblewrap/' description='lugar para descansar' />
          <Card name='ants' link='https://dylanmartin.neocities.org/cosas/ants/' description='implementación de la hormiga de langton' />
          <Card name='digitaciones para flauta contrabajo' link='https://dylanmartin.neocities.org/cosas/flauta/' description='herramienta para graficar digitaciones y exportarlas en .png' />
          <Card name='noted!' link='https://martindylan.github.io/noted' description='web app para tomar notas' />
          <Card name='pincel' link='https://dylanmartin.neocities.org/cosas/pincel/' />
          <Card name='lll' link='https://dylanmartin.neocities.org/cosas/lll/' description='' />
        </div>
      </section>
      <section>
        <Subtitle name='playlists' />
        <div className='Card-container'>
          <Card name='heal' link='https://open.spotify.com/playlist/1aoeCU3eqg0O057qiSzQrk?si=e31a90005c6d47f6' img={img_heal} />
          <Card name='dreamy places' link='https://open.spotify.com/playlist/206aa1Jk4b11i5QtLPTBTQ?si=f3913626bab44967' img={img_dreamyplaces} />
          <Card name='zzii' link='https://open.spotify.com/playlist/1NuSwUId0ymhnd4GWESM6L?si=53vv8esYSoKTA4plIR_rOA' img={img_zzii} />
          <Card name='jitazos' link='https://open.spotify.com/playlist/1aGnheS435JhsqndzSRdxW?si=d0eb5cb9e58b4cdc' img={img_jitazos} />
        </div>
      </section>
    </div>
  )
}