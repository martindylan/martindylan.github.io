import React from 'react';
import styles from './Gente.module.css';
import Title from '../../Title/Title';
import Linklist from '../../Linklist/Linklist';
import Link from '../../Linklist/Link/Link';
import SmallTitle from '../../SmallTitle/SmallTitle';

const list = [
  {
    title: `adel faure`,
    description: `artista ascii y desarrollador de videojuegos`,
    href: `https://www.adelfaure.net/`
  },
  {
    title: `ana rubinstein`,
    description: `artista 3d`,
    href: `https://www.behance.net/anarubinstein`
  },
  {
    title: `antonio roberts`,
    description: `artista multimedia`,
    href: `https://www.hellocatfood.com/`
  },
  {
    title: `basilio del boca`,
    description: `músico, programador y docente`,
    href: `http://www.basilio-delboca.ar/`
  },
  {
    title: `carolina villanueva lucero`,
    description: `artista plástica y web`,
    href: `https://carolinavillanuevalucero.net/`
  },
  {
    title: `cassie mcquater`,
    description: `artista multimedia y web`,
    href: `http://cassiemcquater.com/`
  },
  {
    title: `chia amisola`,
    description: `artista web`,
    href: `https://chia.design/`
  },
  {
    title: `daniel iglesia`,
    description: `músico y programador`,
    href: `https://danieliglesia.com/`
  },
  {
    title: `dillon bastan`,
    description: `músico y programador`,
    href: `https://dillonbastan.com/`
  },
  {
    title: `durante`,
    description: `músico`,
    href: `https://durante.neocities.org/`
  },
  {
    title: `emilie weibel`,
    description: `música`,
    href: `https://www.emilieweibel.com/`
  },
  {
    title: `eye measure`,
    description: `músicx y programadorx`,
    href: `https://eye-measure.neocities.org/`
  },
  {
    title: `fede cámara halac`,
    description: `músico y programador`,
    href: `https://fdch.ar/`
  },
  {
    title: `francisca villela`,
    description: `música y artista visual`,
    href: `http://www.franciscavillela.com/`
  },
  {
    title: `handi`,
    description: `artista visual`,
    href: `https://www.instagram.com/handiiikim/`
  },
  {
    title: `ian mccurdy`,
    description: `músico, luthier y programador`,
    href: `http://iainmccurdy.org/`
  },
  {
    title: `ita`,
    description: `música y fashion icon`,
    href: `https://ita.toys/`
  },
  {
    title: `jeongho park`,
    description: `artista audiovisual y programador`,
    href: `https://jeonghopark.de/`
  },
  {
    title: `jingwei zhao`,
    description: `músico e investigador en ML`,
    href: `https://zhaojw1998.github.io/`
  },
  {
    title: `julia teles`,
    description: `música y artista multimedia`,
    href: `https://juliateles.com/`
  },
  {
    title: `karen palacios`,
    description: `VJ y programadora`,
    href: `https://karen-pal.github.io/about`
  },
  {
    title: `laura castillo`,
    description: `artista multimedia`,
    href: `https://www.lauralunacastillo.net/`
  },
  {
    title: `laura palavecino`,
    description: `artista visual y desarrolladora de videojuegos`,
    href: `https://www.laurapalavecino.com/`
  },
  {
    title: `pansy`,
    description: `música y artista visual`,
    href: `https://www.instagram.com/l3orina/`
  },
  {
    title: `linus åkesson`,
    description: `músico, luthier y programador`,
    href: `https://www.linusakesson.net/index.php`
  },
  {
    title: `marianne teixidó`,
    description: `artista multimedia y programadora`,
    href: `https://marianneteixido.github.io/`
  },
  {
    title: `merche blasco`,
    description: `música y artista multimedia`,
    href: `https://half-half.es/`
  },
  {
    title: `mónica jacobo`,
    description: `artista visual y multimedia`,
    href: `https://monicajacobo.myportfolio.com/`
  },
  {
    title: `olivia jack`,
    description: `artista multimedia y programadora`,
    href: `https://ojack.xyz/`
  },
  {
    title: `patricia garcía`,
    description: `música y docente`,
    href: `http://www.patriciagarcia.com.ar/`
  },
  {
    title: `pawel janicki`,
    description: `músico`,
    href: `https://www.paweljanicki.jp/`
  },
  {
    title: `pombogay`,
    description: `artista visual`,
    href: `https://pombogay.tumblr.com/`
  },
  {
    title: `simina oprescu`,
    description: `artista sonora e investigadora`,
    href: `https://siminaoprescu.net/`
  },
  {
    title: `sol rezza`,
    description: `música e ingeniera en audio espacial`,
    href: `https://solrezza.net/es`
  },
  {
    title: `sukinapan`,
    description: `artista visual y desarrolladora de videojuegos`,
    href: `https://beacons.ai/sukinapan`
  },
  {
    title: `tamara moura costa`,
    description: `artista multimedia, docente e investigadora`,
    href: `https://sites.google.com/view/tamamoyre`
  },
  {
    title: `viznut`,
    description: `artista demoscene`,
    href: `http://viznut.fi/en`
  },
  {
    title: `yesica duarte`,
    description: `artista e investigadora en VR`,
    href: `https://yesicaduarte.wixsite.com/website`
  },
]

export default function Gente() {
  const orderedList = list.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className={styles.this}>
      <Title>gente increíble</Title>
      <SmallTitle>que me crucé en la vida y en internet</SmallTitle>
      <Linklist>
        <button
          className='smallButton'
          onClick={(e) => {
            e.stopPropagation();
            const index = Math.floor(Math.random() * list.length);
            window.open(list[index].href, '_blank');
          }}
        >
          VISITA RANDOM!
        </button>
        {orderedList.map((item, i) => (
          <Link key={i} href={item.href} description={item.description} target='_blank'>{item.title}</Link>
        ))}
      </Linklist>
    </div>
  )
}