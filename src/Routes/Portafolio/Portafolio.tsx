import React from 'react';
import Title from '../../Title/Title';
import CardLong from '../../CardLong/CardLong';
import img_gest from './img/gest.jpeg';
import img_raytone from './img/raytone.jpeg';
import img_anhelo from './img/anhelo.jpeg';
import img_puredata from './img/puredata.jpeg';
import img_presupuesto from './img/presupuesto.jpeg'
import img_agua from './img/agua.jpeg';

const list = [
  {
    name: `GEST: Instrumento Musical Virtual Gestual`,
    link: `https://uncinnova.unc.edu.ar/2023/05/09/gest-instrumento-musical-virtual-gestual/`,
    img: img_gest,
    description: [
      `Proyecto ganador del premio "UNC Innova".`,
      `Desarrollado en equipo utilizando Unreal Engine, intercomunicado con diversos softwares de audio y utilizando tecnología de Realidad Virtual.`,
      `Actualmente sigue en desarrollo.`
    ],
    foot: `LEIM – Universidad Nacional de Córdoba – Argentina, 31 de mayo 2023`
  },
  {
    name: `Ensayo abierto: Agua y distorsión`,
    img: img_agua,
    description: [
      `Proyecto transdisciplinario (danza, música, gráficos y programación) coproducido con Francisco Gonella Fava. Reconocimiento de gestos con Kinect V2 y síntesis de imagen en TouchDesigner + dispositivos de audio para la generación de música en tiempo real en Pure Data.`
    ],
    foot: `LEIM – Universidad Nacional de Córdoba – Argentina, 16 de noviembre 2023`
  },
  {
    name: `Anhelo del desconocido conocido`,
    link: `https://youtu.be/Ew8ynAkciSo`,
    img: img_anhelo,
    description: [
      `Pieza mixta para flauta contrabajo y electrónica en vivo, creada junto a Dante Demarchi Oliveira, Patricia García y Fernando Zappino.`,
      `Fue presentada en concierto, posteriormente editada y lanzada en el disco Flauta Lab (℗©Compo Lab).`,
      `El proyecto de obra fue seleccionado para su realización por convocatoria del evento de residencias compositivas "FLAUTA LAB".`
    ],
    foot: `CePIA – Universidad Nacional de Córdoba – Argentina, 7 de noviembre 2022`
  },
  {
    name: `Composición Audiovisual en Tiempo Real con RayTone`,
    link: `https://youtu.be/4WC5qjHF27w`,
    img: img_raytone,
    description: [
      `Becado por la Universidad de Stanford.`,
      `Formación y prueba del entorno de programación RayTone, aún en desarrollo, para la composición de piezas audiovisuales utilizando ChucK y shaders HLSL.`,
      `Se desarrolló una composición durante el período del workshop.`
    ],
    foot: `CCRMA – Universidad de Stanford – EE.UU., 21 de julio 2023`
  },
  {
    name: `Publicación de software de audio`,
    link: `https://github.com/martindylan`,
    img: img_puredata,
    description: [
      `Diseño e implementación de dispositivos de audio (sintetizadores, efectos, herramientas varias) desarrollados principalmente en Pure Data y publicados bajo licencias FOSS, como parte de mi investigación y educación continua en DSP.`
    ],
    foot: `2021 – Presente`
  },
  {
    name: `Paisaje sonoro de las festividades por la coronación de Carlos IV`,
    link: `https://soundcloud.com/cibertopo/paisaje_sonoro_museo_documento_ascenso_carlos_ivwav/s-VHeI6xv4I6h?si=d1552917e01f4a27b9f7b50a850de0d2&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing`,
    img: img_presupuesto,
    description: [
      `Pieza creada junto a Basilio del Boca a partir de una reconstrucción histórica en torno a la celebración de la coronación de Carlos IV en Buenos Aires, a exponerse junto a un documento de la época donde se designa el presupuesto para dichas festividades.`,
      `Coordinación y asesoramiento general: Clarisa Pedrotti.`
    ],
    foot: `Museo Histórico Nacional del Cabildo – Buenos Aires – Argentina, 4 de agosto 2023`
  },
]

export default function Cosas() {
  return (
    <div className='Cosas'>
      <Title>portafolio</Title>
      <section>

        {list.map((item, i) => (
          <React.Fragment key={i}>
            <hr />
            <div className='CardLong-container'>
              <CardLong
                right={i % 2 !== 0}
                name={item.name}
                link={item.link}
                img={item.img}
                description={item.description}
                foot={item.foot}
              />
            </div>
          </React.Fragment>
        ))}
      </section>
    </div>
  )
}