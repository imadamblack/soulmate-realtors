import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

const atributos01 = '/landing/atributos_01.jpg';
const atributos02 = '/landing/atributos_02.jpg';
const atributos03 = '/landing/atributos_03.jpg';
const atributos04 = '/landing/atributos_04.jpg';

const testimonios01 = '/landing/testimonios_01.jpg';
const testimonios02 = '/landing/testimonios_02.jpg';
const testimonios03 = '/landing/testimonios_03.jpg';

const catalogo01 = '/landing/catalogo_01.jpg';
const catalogo02 = '/landing/catalogo_02.jpg';
const catalogo03 = '/landing/catalogo_03.jpg';
const catalogo04 = '/landing/catalogo_04.jpg';
const catalogo05 = '/landing/catalogo_05.jpg';

const faqs01 = '/landing/faqs_01.jpg';
const faqs02 = '/landing/faqs_02.jpg';
const faqs03 = '/landing/faqs_03.jpg';
const faqs04 = '/landing/faqs_04.jpg';
const faqs05 = '/landing/faqs_05.jpg';

import OptInForm from '../components/form/opt-in-form';
import Link from 'next/link';
import Blockbuster from '../components/blockbuster';
import Faqs from '../components/faqs';
import scrollDepth from '../utils/scrollDepth';

export default function Index() {
  const [lastClick, setLastClick] = useState('');

  useEffect(() => {
    scrollDepth({
      values: [25, 50, 75, 100],
      callback: (value) => fbq('trackCustom', `Scroll Depth: ${value}`),
    });
  });

  const goToContact = (origin) => {
    setLastClick(origin);
    const el = document.getElementById('am-contact');
    if (el) el.scrollIntoView({behavior: 'smooth', block: 'start'});
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('trackCustom', 'CTA_Click', {origin});
    }
  };

  const content = {
    hero: {
      banner: {
        title: 'Depas en preventa desde $1.8 MDP <br/> Riviera Maya 2025',
        description: 'Airbnb-ready <br/> ROI proyectado 9–12% <br/> Entrega desde Dic 2025',
      },
      content: {
        paragraph: '<h2>¿Qué recibes en esta sesión?</h2>' +
          '<h3>Catálogo curado</h3> <p>Con 3–5 opciones que encajan con tu presupuesto y objetivo (inversión/segunda casa).</p>' +
          '<h3>Datos técnicos</h3> <p>Por proyecto: precios <b>desde</b>, entrega, tipologías, amenidades esenciales.\n</p>' +
          '<h3>Comparativo por zona</h3> <p> Playa del Carmen, Tulum, Cancún (ROI esperado, plusvalía, riesgos).\n</p>',
      },
      cta: {
        main: 'Agenda tu sesión de inversión',
        second: 'Conoce los proyectos que encajan con tu objetivo',
      },
    },
    catalogo: {
      banner: {
        title: 'Nuestros desarrollos en preventa',
      },
      content: {
        items: [
          {
            title: 'AKBAL',
            location: 'Playa del Carmen',
            type: 'Preventa',
            due: 'Dic 2025',
            units: '22',
            price: '$2.4 MDP',
            img: catalogo01,
          },
          {
            title: 'Amanecer',
            location: 'Playa del Carmen',
            type: 'Preventa',
            due: 'Dic 2025',
            units: '9',
            price: '$3.3 MDP',
            img: catalogo02,
          },
          {
            title: 'Cocay',
            location: 'Tulum',
            type: 'Preventa',
            due: 'Dic 2025',
            units: '9',
            price: '$3 MDP',
            img: catalogo03,
          },
          {
            title: 'Constituyentes 80',
            location: 'Playa del Carmen',
            type: 'Preventa',
            due: 'Mayo 2026',
            units: '24',
            price: '$1.8 MDP',
            img: catalogo04,
          },
          {
            title: 'Wolf Towers',
            location: 'Cancún',
            type: 'Preventa',
            due: 'Enero 2026',
            units: '121',
            price: '$4.2 MDP',
            img: catalogo05,
          },
        ],
      },
    },
    // beneficios: {
    //   banner: {
    //     title: 'Invertir o tener una segunda casa es más fácil y seguro de lo que crees',
    //   },
    //   content: {
    //     paragraph: 'Sabemos que hay mil opciones y muchas dudas. <br/><br/>Por eso te ayudamos a ver todo con calma, sin presiones, con claridad. <br/><br/>Tú decides si quieres mudarte o solo ir en vacaciones.',
    //     items: [
    //       {
    //         title: 'Nuestras ubicaciones son TOP',
    //         description: 'Los proyectos y propiedades que ofrecemos están en lugares con calidad de vida, plusvalía y tranquilidad.',
    //         img: beneficios01,
    //       },
    //       {
    //         title: 'Te acompañamos desde el principio',
    //         description: 'Nosotros te acompañamos desde la búsqueda de tu propiedad y todo el proceso hasta que recibas tus llaves.',
    //         img: beneficios02,
    //       },
    //       {
    //         title: 'Propiedades con todo en regla',
    //         description: 'No nos gusta meterte en problemas, por eso solo te vamos a mostrar propiedades revisadas por expertos legales.',
    //         img: beneficios03,
    //       },
    //     ],
    //   },
    //   cta: {
    //     main: 'Agenda tu asesoría estratégica gratuita',
    //   },
    // },
    atributos: {
      banner: {
        title: 'No somos una comercializadora, somos un concierge inmobiliario',
      },
      content: {
        paragraph: 'Hacemos esto para que estés seguro de que tomaste una buena decisión: vemos qué te conviene, te conectamos con aliados y resolvemos todas tus dudas.',
        items: [
          {
            title: 'Concierge inmobiliario, no comercializadora',
            description: 'Seleccionamos a la medida de tus objetivos de inversión o vivienda y nos encargamos de representarte ante el desarrollador o vendedor.',
            img: atributos01,
          },
          {
            title: 'Seguridad jurídica',
            description: 'No nos gusta meterte en problemas, por eso solo te vamos a mostrar propiedades revisadas por expertos legales.',
            img: atributos02,
          },
          {
            title: 'Acompañamiento completo',
            description: 'Buscamos, negociamos y te mandamos todo lo necesario para que tomes una buena decisión desde donde estés.',
            img: atributos03,
          },
          {
            title: 'Operación incluida',
            description: 'Ya en este último paso te conectamos con administración para Airbnb o renta tradicional.',
            img: atributos04,
          },
        ],
      },
      cta: {
        main: 'Clic aquí para conocer las opciones que tenemos para ti',
      },
    },
    testimonios: {
      banner: {
        title: 'Lo que dicen quienes ya confiaron en nosotros',
      },
      content: {
        items: [
          {
            title: 'Marcela L., Monterrey',
            description: '“Cerré todo desde Canadá sin estrés. Sentí que tenía un equipo local cuidando mis intereses.”',
            img: testimonios01,
          },
          {
            title: 'Gabriel y Anya, Canadá',
            description: '“Queríamos un lugar para pasar inviernos fuera del ruido. Soulmate Realtors lo hizo realidad y nos ayudó con todo.”',
            img: testimonios02,
          },
          {
            title: 'Roberto y Sofía, CDMX',
            description: '“Ahora tenemos un departamento donde escaparnos un mes al año, y lo rentamos cuando no lo usamos. Sin complicaciones.”',
            img: testimonios03,
          },
        ],
      },
      cta: {
        main: 'Agenda tu asesoría estratégica gratuita',
      },
    },
    faqs: {
      banner: {
        title: '¿Dudas sobre tu nueva propiedad?',
      },
      content: {
        items: [
          {
            q: '¿Puedo comprar desde el extranjero?',
            a: 'Sí. La mayoría de nuestros clientes no viven en Riviera Maya. Así que no te preocupes, te ayudamos en todo momento.',
            img: faqs01,
          },
          {
            q: '¿Cómo sé que una propiedad es segura?',
            a: 'Solo trabajamos con opciones que han sido revisadas legalmente por notarios y especialistas.',
            img: faqs02,
          },
          {
            q: '¿Y si la quiero rentar cuando no la use?',
            a: 'Podemos conectarte con aliados que te ayudan a rentarla por estancias cortas, temporadas o a largo plazo.',
            img: faqs03,
          },
          {
            q: '¿Qué sigue después de elegir la propiedad?',
            a: 'Te guiamos en tu compra con el contrato, firma y entrega.',
            img: faqs04,
          },
          {
            q: '¿Qué zonas recomiendan para segunda residencia?',
            a: 'Te mostramos zonas seguras, tranquilas y con buena proyección, según tu estilo de vida.',
            img: faqs05,
          },
        ],
      },
      cta: {
        main: 'Agenda tu asesoría estratégica gratuita',
      },
    },
    cta: {
      banner: {
        title: 'Agenda tu sesión de inversión inmobiliaria personalizada.',
      },
      content: {
        paragraph: 'Ayúdanos con tus datos y a responder 5 preguntas para compartirte las 3 opciones de propiedades que se ajusten mejor a tus objetivos.',
      },
      cta: {
        main: 'Clic aquí si estás listo para dar el siguiente paso',
      },
    },
  };

  const {hero, beneficios, atributos, catalogo, garantias, testimonios, faqs, cta} = content;

  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[72rem] w-full flex flex-col md:justify-end items-center bg-brand-1">
        <div className="relative min-h-[32rem] flex-grow w-full md:absolute top-0 inset-x-0 bottom-1/2 md:bottom-0">
          <div
            className="w-full h-[4rem] md:h-[32rem] bottom-0 absolute bg-gradient-to-t from-brand-1 md:from-black md:via-black to-transparent md:opacity-60 z-10"/>
          <Image src="/landing/hero_2.png" layout="fill" className="object-cover object-right"/>
        </div>

        <div className="container min-h-[40rem] w-full text-left md:text-center text-white z-10 p-8">
          <h1
            className="md:w-2/3 md:mx-auto relative font-bold ft-11 text-white [text-shadow:_2px_2px_0_rgb(0_0_0_/_20%)]"
            dangerouslySetInnerHTML={{__html: hero.banner.title}}
          />
          <p className="ft-3 mt-16" dangerouslySetInnerHTML={{__html: hero.banner.description}}/>

          <div className="flex flex-col justify-start md:justify-center items-start md:items-center mt-20">
            <Link href="#contact">
              <a onClick={() => setLastClick('hero')}
                 className="button ft-2 border border-green-500 mb-4 shadow-lg">{hero.cta.main ?? 'Contáctanos'}</a>
            </Link>
            <p className="ft-0">{hero.cta.second}</p>
            {/*<p className="material-icons animate-bounce"><span className="ft-9">expand_more</span></p>*/}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[url('/landing/bg.jpg')] bg-center bg-cover">
        <div className="reading-container" dangerouslySetInnerHTML={{__html: hero.content.paragraph}}/>

        <div className="reading-container mt-12">
          <Link href="#contact">
            <a onClick={() => setLastClick('promesa')}
               className="button ft-2 border border-green-500 mb-4 shadow-lg">{hero.cta.main ?? 'Contáctanos'}</a>
          </Link>
          <p className="ft-0">{hero.cta.second}</p>
        </div>

      </section>


      {catalogo != null &&
        <section id="catalogo" className="border-t">
          <div className="my-20 px-16">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 items-stretch">
              <div className="xl:hidden relative w-full rounded-3xl overflow-hidden shadow-lg p-12">
                <div className="absolute inset-0 bg-brand-1 z-10"/>
                {/*<Image src={catalogo01} layout="fill" objectFit="cover" />*/}
                <h3 className="relative ft-6 text-white z-50">{catalogo.banner.title}</h3>
              </div>
              {catalogo.content.items.map((i, idx) =>
                <div className="relative flex flex-col w-full gap-4">
                  <div>
                    <div className="relative rounded-3xl shadow-md w-full aspect-square overflow-hidden">
                      <Image src={i.img} layout="fill" objectFit="cover"/>
                    </div>
                  </div>
                  <div className="flex flex-col shadow-lg border rounded-3xl p-8 flex-grow gap-4">
                    <h3 className="ft-2">{i.title}</h3>
                    <p>{i.location}</p>
                    <p
                      className="absolute top-8 shadow-lg bg-brand-1 uppercase font-semibold text-white tracking-wider -ft-1 w-max px-4 py-1 rounded-md">{i.type}</p>
                    <hr/>
                    <p className="flex justify-between">Entrega: <span>{i.due}</span></p>
                    <p className="flex justify-between">Unidades: <span>{i.units}</span></p>
                    <p className="flex justify-between">Desde: <span>{i.price}</span></p>
                    <hr/>
                    <Link href="#contact">
                      <a onClick={() => setLastClick('catalogo')}
                         className="button !w-full mb-4">{hero.cta.main ?? 'Contáctanos'}</a>
                    </Link>
                  </div>
                </div>,
              )}
            </div>
          </div>
        </section>}

      {/* BENEFICIOS */}
      {beneficios != null &&
        <section id="beneficios">
          <Blockbuster
            background={`bg-[url('/landing/beneficios.jpg')]`}
            title={beneficios.banner.title}
            description={beneficios.banner.description}
          />
          <div className="container mb-20">
            <p className="reading-container ft-2 m-20"
               dangerouslySetInnerHTML={{__html: beneficios.content?.paragraph}}/>
            <div className="grid lg:grid-cols-3 gap-8 items-stretch">
              {beneficios.content.items.map((i, idx) =>
                <div
                  id={`beneficio-${idx}`}
                  className="relative flex flex-col gap-8 w-full bg-white rounded-2xl shadow-lg overflow-hidden">

                  <div className="w-full aspect-[16/9]">
                    <div className="relative w-full h-full">
                      <Image src={i.img} layout="fill" objectFit="cover"/>
                    </div>
                  </div>

                  <div className="p-20">
                    <h3 className="ft-3 flex-grow">{i.title}</h3>
                    <p className="ft-1">{i.description}</p>
                  </div>

                </div>,
              )}
            </div>

            <div className="flex flex-col justify-start md:justify-center items-start md:items-center mt-20">
              <Link href="#contact">
                <a onClick={() => setLastClick('beneficios')} className="button block mb-4">{hero.cta.main ?? 'Contáctanos'}</a>
              </Link>
              <p className="-ft-1">{hero.cta.second}</p>
            </div>
          </div>
        </section>
      }

      {/* ATRIBUTOS */}
      <section id="atributos">
        <Blockbuster
          background={`bg-[url('/landing/atributos.jpg')]`}
          title={atributos.banner.title}
          description={atributos.banner.description}
        />
        <div className="px-16 my-20">
          <p className="reading-container ft-2 my-20" dangerouslySetInnerHTML={{__html: atributos.content?.paragraph}}/>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-16 items-stretch">
            {atributos.content.items.map((i, idx) =>
              <div className="flex flex-col w-full pt-12 bg-brand-1/60 rounded-2xl">
                <div className="relative pt-[100%]">
                  <div className="absolute inset-8 aspect-square rounded-full overflow-hidden z-10">
                    <Image src={i.img} layout="fill"/>
                  </div>
                  <div className="absolute top-[45%] w-full pt-12 bg-white"/>
                </div>

                <div className="flex flex-col py-12 px-8 flex-grow">
                  <h3 className="ft-5 text-center text-white">{i.title}</h3>
                  <p className="text-center">{i.description}</p>
                </div>
              </div>,
            )}
          </div>
          <div className="flex flex-col justify-start md:justify-center items-start md:items-center mt-20">
            <Link href="#contact">
              <a onClick={() => setLastClick('atributos')} className="button mb-4">{hero.cta.main ?? 'Contáctanos'}</a>
            </Link>
            <p className="-ft-1">{hero.cta.second}</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS */}
      <section id="testimonios">
        <Blockbuster
          background={`bg-[url('/landing/testimonios.jpg')]`}
          title={testimonios.banner.title}
          description={testimonios.banner.description}
        />
        <div className="container my-20">
          <div className="grid md:grid-cols-3 gap-16 items-stretch">
            {testimonios.content.items.map((i, idx) =>
              <div className="relative flex flex-col bg-brand-2 p-12 pt-28 border border-yellow-500 rounded-3xl shadow-md">
                <p className="!text-[16rem] text-brand-1 absolute -top-28 -left-2 material-icons">format_quote</p>
                <p className="font-medium text-green-700 flex-grow my-20">{i.description}</p>
                <p className="ft-0 text-green-700 text-right">
                  {i.title}
                </p>
              </div>,
            )}
          </div>
          <div className="flex flex-col justify-start md:justify-center items-start md:items-center mt-20">
            <Link href="#contact">
              <a onClick={() => setLastClick('testimonios')}
                 className="button mb-4">{hero.cta.main ?? 'Contáctanos'}</a>
            </Link>
            <p className="-ft-1">{hero.cta.second}</p>
          </div>
        </div>
      </section>

      {/* GARANTIAS */}
      {garantias != null &&
        <section id="garantias">
          <Blockbuster
            background={`bg-[url('/landing/garantias.jpg')]`}
            title={garantias.banner.title}
            description={garantias.banner.description}
          />
          <div className="container my-20">
            <div className="grid md:grid-cols-3 gap-16 items-stretch">
              {garantias.content.items.map((i, idx) =>
                <div className="flex md:flex-col items-center md:justify-start gap-12">
                  <div
                    className="bg-yellow-400 border-2 border-yellow-500 w-1/4 md:h-[16rem] md:w-[16rem] rounded-full overflow-hidden p-6 md:p-12">
                    <div className="relative w-full pt-[100%]">
                      <Image src={i.img} layout="fill" objectFit="contain"/>
                    </div>
                  </div>
                  <div className="relative w-3/4 md:w-full flex flex-col flex-grow p-12 border-2 rounded-3xl shadow-md">
                    <h3>{i.title}</h3>
                    <p>{i.description}</p>
                  </div>
                </div>,
              )}
            </div>
            <div className="flex flex-col justify-start md:justify-center items-start md:items-center mt-20">
              <Link href="#contact">
                <a onClick={() => setLastClick('garantias')}
                   className="button mb-4">{hero.cta.main ?? 'Contáctanos'}</a>
              </Link>
              <p className="-ft-1">{hero.cta.second}</p>
            </div>
          </div>
        </section>
      }

      {/* FAQS */}
      <section id="faqs">
        <Blockbuster
          background={`bg-[url('/landing/faqs.jpg')]`}
          title={faqs.banner.title}
          description={faqs.banner.description}
        />
        <div className="container my-20">
          <Faqs questions={faqs.content.items}/>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact"
               className="border-t-4 border-brand-1 bg-[url('/landing/bg.jpg')] bg-brand-2 bg-center bg-cover py-20">
        <div className="container">
          <div className="w-full md:w-1/2 mx-auto">
            <h2 className="!font-bold text-neutral-900">
              {cta.banner.title}
            </h2>
            <div className="mt-20 mb-12">
              <p className="ft-1 font-semibold text-neutral-900">{cta.banner.description}</p>
              <p className="ft-1 text-neutral-900" dangerouslySetInnerHTML={{__html: cta.content.paragraph}}/>
            </div>
            <OptInForm
              lastClick={lastClick}
            />
          </div>
        </div>
      </section>


    </>
  );
}
