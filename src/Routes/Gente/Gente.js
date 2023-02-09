import React from 'react';
import styles from './Gente.module.css';
import Title from '../../Title/Title';
import Linklist from '../../Linklist/Linklist';
import Link from '../../Linklist/Link/Link';

export default function Gente() {
  return (
    <div className={styles.this}>
      <Title>
        gente increíble<span className='col1'>♡</span>
      </Title>
      <Linklist>
        <Link href='https://www.8v01d.com/' target='_blank' description='música y programadora'>8v01d</ Link>
        <Link href='https://www.adelfaure.net/' target='_blank' description='artista ascii y desarrollador de videojuegos'>adel faure</ Link>
        <Link href='https://www.behance.net/anarubinstein' target='_blank' description='arte 3d'>ana rubinstein</ Link>
        <Link href='https://www.hellocatfood.com/' target='_blank' description='artista multimedia'>antonio roberts</ Link>
        <Link href='http://www.basilio-delboca.ar/' target='_blank' description='músico, programador y docente'>basilio del boca</ Link>
        <Link href='http://berenicellorens.com/' target='_blank' description='música y dj'>berenice llorens</ Link>
        <Link href='https://carolinavillanuevalucero.net/' target='_blank' description='artista plástica y web'>carolina villanueva lucero</ Link>
        <Link href='http://cassiemcquater.com/' target='_blank' description='artista multimedia y web'>cassie mcquater</ Link>
        <Link href='https://durante.neocities.org/' target='_blank' description='músico'>durante</ Link>
        <Link href=' https://www.emilieweibel.com/' target='_blank' description='música'>emilie weibel</ Link>
        <Link href='https://eye-measure.neocities.org/' target='_blank' description='música'>eye measure</ Link>
        <Link href='https://fdch.ar/' target='_blank' description='músico y programador'>fede cámara halac</ Link>
        <Link href='https://www.instagram.com/handiiikim' target='_blank' description='artista visual'>handi</ Link>
        <Link href='http://iainmccurdy.org/' target='_blank' description='músico'>ian mccurdy</ Link>
        <Link href='https://ita.toys/' target='_blank' description='música y moda'>ita</ Link>
        <Link href='https://jeonghopark.de/' target='_blank' description='artista audiovisual y programador'>jeongho park</ Link>
        <Link href='https://juliateles.com/' target='_blank' description='música'>julia teles</ Link>
        <Link href='https://lailamajid.net/' target='_blank' description='artista plástica y fotógrafa'>laila majid</ Link>
        <Link href='https://www.linusakesson.net/index.php' target='_blank' description='músico, luthier y programador'>linus åkesson</ Link>
        <Link href='https://marianneteixido.github.io/' target='_blank' description='artista multimedia y programadora'>marianne teixidó</ Link>
        <Link href='https://half-half.es/' target='_blank' description='música y artista multimedia'>merche blasco</ Link>
        <Link href='https://ojack.xyz/' target='_blank' description='artista multimedia y programadora'>olivia jack</ Link>
        <Link href='https://www.youtube.com/c/PatriciaGarc%C3%ADaflauta' target='_blank' description='música y docente'>patricia garcía</ Link>
        <Link href='https://www.paweljanicki.jp/' target='_blank' description='músico'>pawel janicki</ Link>
        <Link href='https://pombogay.tumblr.com/' target='_blank' description='artista visual'>pombogay</ Link>
        <Link href='https://siminaoprescu.net/' target='_blank' description='música'>simina oprescu</ Link>
        <Link href='https://beacons.ai/sukinapan' target='_blank' description='artista visual y desarrolladora de videojuegos'>sukinapan</ Link>
        <Link href='http://viznut.fi/en/' target='_blank' description='artista demoscene'>viznut</ Link>
        <Link href='https://yesicaduarte.wixsite.com/website' target='_blank' description='artista vr e investigadora'>yesica duarte</ Link>
      </Linklist>
    </div>
  )
}