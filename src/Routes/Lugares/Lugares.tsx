import React from 'react';
import Title from '../../Title/Title';
import Linklist from '../../Linklist/Linklist';
import Link from '../../Linklist/Link/Link';
import styles from './Lugares.module.css';
import SmallTitle from '../../SmallTitle/SmallTitle';
import { useTranslation } from 'react-i18next';

export default function Lugares() {
  const [t, i18n] = useTranslation("global");

  const list = [
    {
      title: `agents of alienation`,
      description: t("places.agents_of_alienation.description"),
      href: `http://www.jaronlanier.com/agentalien.html`
    },
    {
      title: `battle of the bits`,
      description: t("places.battle_of_the_bits.description"),
      href: `https://battleofthebits.com/`
    },
    {
      title: `bsblork`,
      description: t("places.bsblork.description"),
      href: `https://bsblork.gitlab.io/`
    },
    {
      title: `cameron's world`,
      description: t("places.cameron_s_world.description"),
      href: `https://www.cameronsworld.net/`
    },
    {
      title: `caso`,
      description: t("places.caso.description"),
      href: `https://centrodeartesonoro.cultura.gob.ar/info/centro-de-arte-sonoro-caso/`
    },
    {
      title: `cmmas`,
      description: t("places.cmmas.description"),
      href: `https://en.cmmas.com/`
    },
    {
      title: `comedy on the wall`,
      description: t("places.comedy_on_the_wall.description"),
      href: `https://comedyonthewall-n4.tripod.com/`
    },
    {
      title: `elevator.js`,
      description: t("places.elevator_js.description"),
      href: `https://tholman.com/elevator.js/`
    },
    {
      title: `fakedac~`,
      description: t("places.fakedac_.description"),
      href: `https://fakedac.net/`
    },
    {
      title: `fauux`,
      description: t("places.fauux.description"),
      href: `https://fauux.neocities.org/`
    },
    {
      title: `flo`,
      description: t("places.flo.description"),
      href: `https://femalelaptoporchestra.wordpress.com/`
    },
    {
      title: `gifcities`,
      description: t("places.gifcities.description"),
      href: `https://gifcities.org/`
    },
    {
      title: `hacker news`,
      description: t("places.hacker_news.description"),
      href: `https://news.ycombinator.com/`
    },
    {
      title: `hadas antifa`,
      description: t("places.hadas_antifa.description"),
      href: `https://linktr.ee/hadas_antifa`
    },
    {
      title: `hermanas del perro magnetico`,
      description: t("places.hermanas_del_perro_magnetico.description"),
      href: `https://16colo.rs/group/hermanas%20del%20perro%20magnetico`
    },
    {
      title: `huemint`,
      description: t("places.huemint.description"),
      href: `https://huemint.com/`
    },
    {
      title: `linux sound`,
      description: t("places.linux_sound.description"),
      href: `http://linux-sound.org/`
    },
    {
      title: `marginalia search`,
      description: t("places.marginalia_search.description"),
      href: `https://search.marginalia.nu/`
    },
    {
      title: `neocities`,
      description: t("places.neocities.description"),
      href: `https://neocities.org/`
    },
    {
      title: `¿netart or notart?`,
      description: t("places._netart_or_notart_.description"),
      href: `http://meiac.es/latino/`
    },
    {
      title: `ooh! directory`,
      description: t("places.ooh__directory.description"),
      href: `https://ooh.directory/`
    },
    {
      title: `psx-place`,
      description: t("places.psx-place.description"),
      href: `https://www.psx-place.com/forum/app.php/portal`
    },
    {
      title: `random`,
      description: t("places.random.description"),
      href: `https://random.residual.fun/`
    },
    {
      title: `sinsy`,
      description: t("places.sinsy.description"),
      href: `https://sinsy.jp/`
    },
    {
      title: `sound on sound`,
      description: t("places.sound_on_sound.description"),
      href: `https://www.soundonsound.com/`
    },
    {
      title: `t3knolibr3`,
      description: t("places.t3knolibr3.description"),
      href: `https://t3knologialibr3.tumblr.com/`
    },
    {
      title: `vimm's lair`,
      description: t("places.vimm_s_lair.description"),
      href: `https://vimm.net/`
    },
    {
      title: `wendy carlos`,
      description: t("places.wendy_carlos.description"),
      href: `https://www.wendycarlos.com/`
    },
    {
      title: `cybercirujas`,
      description: t("places.cybercirujas.description"),
      href: `https://cybercirujas.rebelion.digital/`
    },
  ]

  const orderedList = list.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <div className={styles.this}>
      <Title>{t("places.title")}</Title>
      <SmallTitle>{t("places.subtitle")}</SmallTitle>
      <Linklist>
        <button
          className='smallButton'
          onClick={(e) => {
            e.stopPropagation();
            const index = Math.floor(Math.random() * list.length);
            window.open(list[index].href, '_blank');
          }}
        >
          {t("places.random_button")}
        </button>

        {orderedList.map((item, i) => (
          <Link key={i} href={item.href} description={item.description} target='_blank'>{item.title}</Link>
        ))}
      </Linklist>
    </div>
  )
}
