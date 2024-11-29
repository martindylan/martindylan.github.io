import React from 'react';
import styles from './Gente.module.css';
import Title from '../../Title/Title';
import Linklist from '../../Linklist/Linklist';
import Link from '../../Linklist/Link/Link';
import SmallTitle from '../../SmallTitle/SmallTitle';
import { useTranslation } from 'react-i18next';

export default function Gente() {
  const [t, i18n] = useTranslation("global");

  const list = [
    {
      title: `adel faure`,
      description: t("people.adel_faure.description"),
      href: `https://www.adelfaure.net/`
    },
    {
      title: `ana rubinstein`,
      description: t("people.ana_rubinstein.description"),
      href: `https://www.behance.net/anarubinstein`
    },
    {
      title: `antonio roberts`,
      description: t("people.antonio_roberts.description"),
      href: `https://www.hellocatfood.com/`
    },
    {
      title: `basilio del boca`,
      description: t("people.basilio_del_boca.description"),
      href: `http://www.basilio-delboca.ar/`
    },
    {
      title: `carolina villanueva lucero`,
      description: t("people.carolina_villanueva_lucero.description"),
      href: `https://carolinavillanuevalucero.net/`
    },
    {
      title: `cassie mcquater`,
      description: t("people.cassie_mcquater.description"),
      href: `http://cassiemcquater.com/`
    },
    {
      title: `chia amisola`,
      description: t("people.chia_amisola.description"),
      href: `https://chia.design/`
    },
    {
      title: `daniel iglesia`,
      description: t("people.daniel_iglesia.description"),
      href: `https://danieliglesia.com/`
    },
    {
      title: `dillon bastan`,
      description: t("people.dillon_bastan.description"),
      href: `https://dillonbastan.com/`
    },
    {
      title: `durante`,
      description: t("people.durante.description"),
      href: `https://durante.neocities.org/`
    },
    {
      title: `emilie weibel`,
      description: t("people.emilie_weibel.description"),
      href: `https://www.emilieweibel.com/`
    },
    {
      title: `eye measure`,
      description: t("people.eye_measure.description"),
      href: `https://eye-measure.neocities.org/`
    },
    {
      title: `fede cámara halac`,
      description: t("people.fede_camara_halac.description"),
      href: `https://fdch.ar/`
    },
    {
      title: `francisca villela`,
      description: t("people.francisca_villela.description"),
      href: `http://www.franciscavillela.com/`
    },
    {
      title: `handi`,
      description: t("people.handi.description"),
      href: `https://www.instagram.com/handiiikim/`
    },
    {
      title: `ian mccurdy`,
      description: t("people.ian_mccurdy.description"),
      href: `http://iainmccurdy.org/`
    },
    {
      title: `ita`,
      description: t("people.ita.description"),
      href: `https://ita.toys/`
    },
    {
      title: `jeongho park`,
      description: t("people.jeongho_park.description"),
      href: `https://jeonghopark.de/`
    },
    {
      title: `jingwei zhao`,
      description: t("people.jingwei_zhao.description"),
      href: `https://zhaojw1998.github.io/`
    },
    {
      title: `julia teles`,
      description: t("people.julia_teles.description"),
      href: `https://juliateles.com/`
    },
    {
      title: `karen palacios`,
      description: t("people.karen_palacios.description"),
      href: `https://karen-pal.github.io/about`
    },
    {
      title: `laura castillo`,
      description: t("people.laura_castillo.description"),
      href: `https://www.lauralunacastillo.net/`
    },
    {
      title: `laura palavecino`,
      description: t("people.laura_palavecino.description"),
      href: `https://www.laurapalavecino.com/`
    },
    {
      title: `pansy`,
      description: t("people.pansy.description"),
      href: `https://www.instagram.com/l3orina/`
    },
    {
      title: `linus åkesson`,
      description: t("people.linus_akesson.description"),
      href: `https://www.linusakesson.net/index.php`
    },
    {
      title: `marianne teixidó`,
      description: t("people.marianne_teixido.description"),
      href: `https://marianneteixido.github.io/`
    },
    {
      title: `merche blasco`,
      description: t("people.merche_blasco.description"),
      href: `https://half-half.es/`
    },
    {
      title: `mónica jacobo`,
      description: t("people.monica_jacobo.description"),
      href: `https://monicajacobo.myportfolio.com/`
    },
    {
      title: `olivia jack`,
      description: t("people.olivia_jack.description"),
      href: `https://ojack.xyz/`
    },
    {
      title: `patricia garcía`,
      description: t("people.patricia_garcia.description"),
      href: `http://www.patriciagarcia.com.ar/`
    },
    {
      title: `pawel janicki`,
      description: t("people.pawel_janicki.description"),
      href: `https://www.paweljanicki.jp/`
    },
    {
      title: `pombogay`,
      description: t("people.pombogay.description"),
      href: `https://pombogay.tumblr.com/`
    },
    {
      title: `simina oprescu`,
      description: t("people.simina_oprescu.description"),
      href: `https://siminaoprescu.net/`
    },
    {
      title: `sol rezza`,
      description: t("people.sol_rezza.description"),
      href: `https://solrezza.net/es`
    },
    {
      title: `sukinapan`,
      description: t("people.sukinapan.description"),
      href: `https://beacons.ai/sukinapan`
    },
    {
      title: `tamara moura costa`,
      description: t("people.tamara_moura_costa.description"),
      href: `https://sites.google.com/view/tamamoyre`
    },
    {
      title: `viznut`,
      description: t("people.viznut.description"),
      href: `http://viznut.fi/en`
    },
    {
      title: `yesica duarte`,
      description: t("people.yesica_duarte.description"),
      href: `https://yesicaduarte.wixsite.com/website`
    },
    {
      title: `cherryla`,
      description: t("people.cherryla.description"),
      href: `https://linktr.ee/cherryla`
    },
    {
      title: `seraphim blush`,
      description: t("people.seraphim_blush.description"),
      href: `https://seraphimblush.neocities.org`
    },
  ]

  const orderedList = list.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className={styles.this}>
      <Title>{t("people.title")}</Title>
      <SmallTitle>{t("people.subtitle")}</SmallTitle>
      <Linklist>
        <button
          className='smallButton'
          onClick={(e) => {
            e.stopPropagation();
            const index = Math.floor(Math.random() * list.length);
            window.open(list[index].href, '_blank');
          }}
        >
          {t("people.random_button")}
        </button>
        {orderedList.map((item, i) => (
          <Link key={i} href={item.href} description={item.description} target='_blank'>{item.title}</Link>
        ))}
      </Linklist>
    </div>
  )
}