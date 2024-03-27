import React from 'react';
import styles from './Gente.module.css';
import Title from '../../Title/Title';
import Linklist from '../../Linklist/Linklist';
import Link from '../../Linklist/Link/Link';
import SmallTitle from '../../SmallTitle/SmallTitle';

export default function Gente() {
  return (
    <div className={styles.this}>
      <Title>gente increíble</Title>
      <SmallTitle>que me crucé en la vida y en internet</SmallTitle>
      <Linklist>
        <Link href='https://www.adelfaure.net/' target='_blank' description='artista ascii y desarrollador de videojuegos'>adel faure</Link>
        <Link href='https://www.behance.net/anarubinstein' target='_blank' description='artista 3d'>ana rubinstein</Link>
        <Link href='https://www.hellocatfood.com/' target='_blank' description='artista multimedia'>antonio roberts</Link>
        <Link href='http://www.basilio-delboca.ar/' target='_blank' description='músico, programador y docente'>basilio del boca</Link>
        <Link href='https://carolinavillanuevalucero.net/' target='_blank' description='artista plástica y web'>carolina villanueva lucero</Link>
        <Link href='http://cassiemcquater.com/' target='_blank' description='artista multimedia y web'>cassie mcquater</Link>
        {/* <Link href='http://cyranetic.github.io/cyranetic-portfolio-site/index.html' target='_blank' description='artista visual'>cyranetic</Link> */}
        <Link href='https://danieliglesia.com/' target='_blank' description='músico y programador'>daniel iglesia</Link>
        <Link href='https://dillonbastan.com/' target='_blank' description='músico y programador'>dillon bastan</Link>
        <Link href='https://durante.neocities.org/' target='_blank' description='músico'>durante</Link>
        <Link href='https://eitomurakami.github.io/' target='_blank' description='músico y programador'>eito murakami</Link>
        <Link href='https://www.emilieweibel.com/' target='_blank' description='música'>emilie weibel</Link>
        <Link href='https://eye-measure.neocities.org/' target='_blank' description='músicx y programadorx'>eye measure</Link>
        <Link href='https://fdch.ar/' target='_blank' description='músico, programador e investigador'>fede cámara halac</Link>
        <Link href='https://www.instagram.com/handiiikim' target='_blank' description='artista visual'>handi</Link>
        <Link href='http://iainmccurdy.org/' target='_blank' description='músico, luthier y programador'>ian mccurdy</Link>
        <Link href='https://ita.toys/' target='_blank' description='música y fashion icon'>ita</Link>
        <Link href='https://jeonghopark.de/' target='_blank' description='artista audiovisual y programador'>jeongho park</Link>
        <Link href='https://zhaojw1998.github.io/' target='_blank' description='músico e investigador en ML'>jingwei zhao</Link>
        <Link href='https://juliateles.com/' target='_blank' description='música y artista multimedia'>julia teles</Link>
        <Link href='https://karen-pal.github.io/' target='_blank' description='VJ y programadora'>karen palacios</Link>
        <Link href='https://www.lauralunacastillo.net/' target='_blank' description='artista multimedia'>laura castillo</Link>
        <Link href='https://leorina.bandcamp.com/' target='_blank' description='música'>leorina</Link>
        <Link href='https://www.linusakesson.net/index.php' target='_blank' description='músico, luthier y programador'>linus åkesson</Link>
        <Link href='https://marianneteixido.github.io/' target='_blank' description='artista multimedia y programadora'>marianne teixidó</Link>
        <Link href='https://half-half.es/' target='_blank' description='música y artista multimedia'>merche blasco</Link>
        <Link href='https://monicajacobo.myportfolio.com/' target='_blank' description='artista visual y multimedia'>mónica jacobo</Link>
        <Link href='https://ojack.xyz/' target='_blank' description='artista multimedia y programadora'>olivia jack</Link>
        <Link href='http://www.patriciagarcia.com.ar/' target='_blank' description='música y docente'>patricia garcía</Link>
        <Link href='https://www.paweljanicki.jp/' target='_blank' description='músico'>pawel janicki</Link>
        <Link href='https://pombogay.tumblr.com/' target='_blank' description='artista visual'>pombogay</Link>
        <Link href='https://siminaoprescu.net/' target='_blank' description='artista sonora e investigadora'>simina oprescu</Link>
        <Link href='https://solrezza.net/es/' target='_blank' description='música e ingeniera en audio espacial'>sol rezza</Link>
        <Link href='https://beacons.ai/sukinapan' target='_blank' description='artista visual y desarrolladora de videojuegos'>sukinapan</Link>
        <Link href='https://sites.google.com/view/tamamoyre/' target='_blank' description='artista multimedia, docente e investigadora'>tamara moura costa</Link>
        <Link href='http://viznut.fi/en/' target='_blank' description='artista demoscene'>viznut</Link>
        <Link href='https://yesicaduarte.wixsite.com/website' target='_blank' description='artista e investigadora en VR'>yesica duarte</Link>
      </Linklist>
    </div>
  )
}