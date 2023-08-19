import React from 'react';
import img_pmatrix from './img/pmatrix.png';
import img_granola from './img/granola.png';
import img_mystortion from './img/mystortion.png';
import img_roads from './img/roads.png';
import img_polywave from './img/polywave.png';
import img_dm7617 from './img/dm7617.png';
import img_pullme from './img/pullme.png';
import img_dmtools from './img/dmtools.png';
import Title from '../../Title/Title';
import Subtitle from '../../Subtitle/Subtitle';
import Card from '../../Card/Card';

export default function Audio() {
  return (
    <div className="Audio">
      <Title>audio</Title>
      <section>
        <Subtitle name='web' />
        <div className='Card-container'>
          <Card name='polygonal waveform demo' link='https://dylanmartin.neocities.org/cosas/polygon/' description='implementación en web audio API del método de síntesis de forma de onda poligonal' />
        </div>
      </section>
      <section>
        <Subtitle name="plugins vst3" />
        <div className="Card-container">
          <Card name="pmatrix~" link="https://github.com/martindylan/pmatrix" description="sintetizador monofónico PM/sustractivo semi-modular" img={img_pmatrix} />
          <Card name="granola~" link="https://github.com/martindylan/granola" description="sintetizador granular estocástico" img={img_granola} />
          <Card name="mystortion~" link="https://github.com/martindylan/mystortion" description="distorsión basada en AM" img={img_mystortion} />
          <Card name="roads~" link="https://github.com/martindylan/roads" description="efecto de audio granular" img={img_roads} />
        </div>
      </section>
      <section>
        <Subtitle name="parches de pure data" />
        <div className="Card-container">
          <Card name="polywave~" link="https://github.com/martindylan/pd-polywave" description="sintetizador poligonal" img={img_polywave} />
          <Card name="pullme~" link="https://github.com/martindylan/pd-pullme" description="resíntesis espectral basada en [sigmund~]" img={img_pullme} />
          <Card name="dm7617~" link="https://github.com/martindylan/pd-dm7617" description="sintetizador fm" img={img_dm7617} />
          <Card name="dmtools" link="https://github.com/martindylan/pd-dmtools" description="surtido de herramientas básicas de audio y de control" img={img_dmtools} />
        </div>
      </section>
    </div>
  )
}
