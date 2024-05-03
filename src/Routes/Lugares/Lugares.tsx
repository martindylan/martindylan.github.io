import React from 'react';
import Title from '../../Title/Title';
import Linklist from '../../Linklist/Linklist';
import Link from '../../Linklist/Link/Link';
import styles from './Lugares.module.css';
import SmallTitle from '../../SmallTitle/SmallTitle';

const list = [
  {
    title: `agents of alienation`,
    description: `texto de jaron lanier`,
    href: `http://www.jaronlanier.com/agentalien.html`
  },
  {
    title: `battle of the bits`,
    description: `foro y competencias de música por computadora retro`,
    href: `https://battleofthebits.com/`
  },
  {
    title: `bsblork`,
    description: `orquesta de laptops de brasilia`,
    href: `https://bsblork.gitlab.io/`
  },
  {
    title: `cameron's world`,
    description: `collage web`,
    href: `https://www.cameronsworld.net/`
  },
  {
    title: `caso`,
    description: `centro de arte sonoro (argentina)`,
    href: `https://centrodeartesonoro.cultura.gob.ar/info/centro-de-arte-sonoro-caso/`
  },
  {
    title: `cmmas`,
    description: `centro mexicano para la música y las artes sonoras`,
    href: `https://en.cmmas.com/`
  },
  {
    title: `comedy on the wall`,
    description: `?`,
    href: `https://comedyonthewall-n4.tripod.com/`
  },
  {
    title: `elevator.js`,
    description: `"jueguito" web`,
    href: `https://tholman.com/elevator.js/`
  },
  {
    title: `fakedac~`,
    description: `evento de live coding y arte algorítmica`,
    href: `https://fakedac.net/`
  },
  {
    title: `fauux`,
    description: `?`,
    href: `https://fauux.neocities.org/`
  },
  {
    title: `flo`,
    description: `female laptop orchestra`,
    href: `https://femalelaptoporchestra.wordpress.com/`
  },
  {
    title: `gifcities`,
    description: `motor de búsqueda de gifs`,
    href: `https://gifcities.org/`
  },
  {
    title: `hacker news`,
    description: `noticias en computación`,
    href: `https://news.ycombinator.com/`
  },
  {
    title: `hadas antifa`,
    description: `movimiento artístico cordobés de resistencia antifascista`,
    href: `https://linktr.ee/hadas_antifa`
  },
  {
    title: `hermanas del perro magnético`,
    description: `crew de arte texto latinoamericana`,
    href: `https://16colo.rs/group/hermanas%20del%20perro%20magnetico`
  },
  {
    title: `huemint`,
    description: `generador de paletas de colores`,
    href: `https://huemint.com/`
  },
  {
    title: `linux sound`,
    description: `compilado de software de audio para linux`,
    href: `http://linux-sound.org/`
  },
  {
    title: `marginalia search`,
    description: `motor de búsqueda independiente`,
    href: `https://search.marginalia.nu/`
  },
  {
    title: `neocities`,
    description: `creación gratuita de sitios web`,
    href: `https://neocities.org/`
  },
  {
    title: `¿netart or notart?`,
    description: `directorio de netartistas de latinoamérica`,
    href: `http://meiac.es/latino/`
  },
  {
    title: `ooh! directory`,
    description: `colección de blogs`,
    href: `https://ooh.directory/`
  },
  {
    title: `psx-place`,
    description: `foros y recursos de playstation`,
    href: `https://www.psx-place.com/forum/app.php/portal`
  },
  {
    title: `random`,
    description: `recopilación de arte por computadora`,
    href: `https://random.residual.fun/`
  },
  {
    title: `sinsy`,
    description: `síntesis de voz cantada online`,
    href: `https://sinsy.jp/`
  },
  {
    title: `sound on sound`,
    description: `revista de audio`,
    href: `https://www.soundonsound.com/`
  },
  {
    title: `t3knolibr3`,
    description: `difusora chilena sobre electrónica casera y música`,
    href: `https://t3knologialibr3.tumblr.com/`
  },
  {
    title: `vimm's lair`,
    description: `roms y emuladores`,
    href: `https://vimm.net/`
  },
  {
    title: `wendy carlos`,
    description: `fuente oficial de información sobre wendy carlos`,
    href: `https://www.wendycarlos.com/`
  },
]

export default function Lugares() {
  const orderedList = list.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className={styles.this}>
      <Title>lugares increíbles</Title>
      <SmallTitle>que encontré hurgando en internet</SmallTitle>
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
