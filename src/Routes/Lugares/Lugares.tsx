import React from 'react';
import Title from '../../Title/Title';
import Linklist from '../../Linklist/Linklist';
import Link from '../../Linklist/Link/Link';
import styles from './Lugares.module.css';
import SmallTitle from '../../SmallTitle/SmallTitle';

export default function Lugares() {
  return (
    <div className={styles.this}>
      <Title>lugares increíbles</Title>
      <SmallTitle>que encontré hurgando en internet</SmallTitle>
      <Linklist>
        <Link href='https://16colo.rs/' target='_blank' description='galería de gráficos por computadora retro'>16colors</Link>
        <Link href='http://www.jaronlanier.com/agentalien.html' target='_blank' description='texto de jaron lanier'>agents of alienation</Link>
        <Link href='https://battleofthebits.org/' target='_blank' description='foro y competencias de música por computadora retro'>battle of the bits</Link>
        <Link href='https://bsblork.gitlab.io/' target='_blank' description='orquesta de laptops de brasilia'>bsblork</Link>
        <Link href='https://www.cameronsworld.net/' target='_blank' description='collage web '>cameron's world</Link>
        <Link href='https://centrodeartesonoro.cultura.gob.ar/info/centro-de-arte-sonoro-caso/' target='_blank' description='centro de arte sonoro (argentina)'>caso</Link>
        <Link href='https://en.cmmas.com/' target='_blank' description='centro mexicano para la música y las artes sonoras'>cmmas</Link>
        <Link href='https://comedyonthewall-n4.tripod.com/' target='_blank' description='?'>comedy on the wall</Link>
        <Link href='https://tholman.com/elevator.js/' target='_blank' description='"jueguito" web'>elevator.js</Link>
        <Link href='https://fakedac.net/' target='_blank' description='evento de live coding y arte algorítmica'>fakedac~</Link>
        <Link href='https://fauux.neocities.org/' target='_blank' description='?'>fauux</Link>
        <Link href='https://femalelaptoporchestra.wordpress.com/' target='_blank' description='female laptop orchestra'>flo</Link>
        <Link href='https://gifcities.org/' target='_blank' description='motor de búsqueda de gifs'>gifcities</Link>
        <Link href='https://news.ycombinator.com/' target='_blank' description='noticias en computación'>hacker news</Link>
        <Link href='https://huemint.com/' target='_blank' description='movimiento artístico cordobés de resistencia antifascista'>hadas antifa</Link>
        <Link href='https://16colo.rs/group/hermanas%20del%20perro%20magnetico' target='_blank' description='crew de arte texto latinoamericana'>hermanas del perro magnético</Link>
        <Link href='https://huemint.com/' target='_blank' description='generador de paletas de colores'>huemint</Link>
        <Link href='http://linux-sound.org/' target='_blank' description='compilado de software de audio para linux'>linux sound</Link>
        <Link href='https://search.marginalia.nu/' target='_blank' description='motor de búsqueda independiente'>marginalia search</Link>
        <Link href='https://neocities.org/' target='_blank' description='creación gratuita de sitios web'>neocities</Link>
        <Link href='http://meiac.es/latino/' target='_blank' description='directorio de netartistas de latinoamérica'>¿netart or notart?</Link>
        <Link href='https://ooh.directory/' target='_blank' description='colección de blogs'>ooh! directory</Link>
        <Link href='https://www.psx-place.com/forum/app.php/portal' target='_blank' description='foros y recursos de playstation'>psx-place</Link>
        <Link href='https://random.residual.fun/' target='_blank' description='recopilación de arte por computadora'>random</Link>
        <Link href='https://sinsy.jp/' target='_blank' description='síntesis de voz cantada online'>sinsy</Link>
        <Link href='https://www.soundonsound.com/' target='_blank' description='revista de audio'>sound on sound</Link>
        <Link href='https://t3knologialibr3.tumblr.com/' target='_blank' description='difusora chilena sobre electrónica casera y música'>t3knolibr3</Link>
        <Link href='https://vimm.net/' target='_blank' description='roms y emuladores'>vimm's lair</Link>
        <Link href='https://www.wendycarlos.com/' target='_blank' description='fuente oficial de información sobre wendy carlos'>wendy carlos</ Link>
      </Linklist>
    </div>
  )
}
