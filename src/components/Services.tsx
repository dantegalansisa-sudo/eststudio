import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { MAILTO, SERVICES, type Service } from '../data';
import { FadeUp, MaskLine } from './RevealText';
import MagneticButton from './MagneticButton';
import ServiceVisual from './visuals/ServiceVisuals';
import { Arrow, Check, Spark } from './Icons';
import { scrollToId } from '../utils/scroll';
import { ease } from '../utils/easings';

function ServiceCard({
  s,
  i,
  progress,
  range,
  targetScale,
}: {
  s: Service;
  i: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const last = i === SERVICES.length - 1;
  const scale = useTransform(progress, range, [1, last ? 1 : targetScale]);
  const dim = useTransform(progress, range, [0, last ? 0 : 0.35]);

  return (
    <div className="stack__item" id={`srv-${s.key}`}>
      <motion.article className={`scard scard--${s.theme}`} style={{ scale, top: `calc(${i} * var(--stack-step))` }}>
        <motion.div className="scard__dim" style={{ opacity: dim }} />
        <div className="scard__content">
          <div className="scard__top">
            <span className="scard__n">{s.n}</span>
            <span className="scard__en">
              <Spark size={10} /> {s.en}
            </span>
          </div>
          <h3 className="scard__title">
            {s.title} <em>{s.accent}</em>
          </h3>
          <p className="scard__lead">{s.lead}</p>
          <ul className="scard__list">
            {s.includes.map((t) => (
              <li key={t}>
                <span className="scard__check"><Check size={11} /></span>
                {t}
              </li>
            ))}
          </ul>
          <div className="scard__ideal">
            <small>Ideal para</small>
            {s.idealFor.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="scard__ctas">
            <MagneticButton
              href={MAILTO(`Servicio: ${s.title} ${s.accent}`, `Hola Stephanie, me interesa tu servicio de ${s.title} ${s.accent}. Te cuento sobre mi proyecto:`)}
              className="btn btn--card"
              cursor="Escribir"
            >
              Quiero este servicio <span className="btn__ic"><Arrow size={15} /></span>
            </MagneticButton>
          </div>
        </div>
        <div className="scard__visual">
          <ServiceVisual k={s.key} />
          <span className="scard__ghost">{s.n}</span>
        </div>
      </motion.article>
    </div>
  );
}

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });
  const n = SERVICES.length;

  return (
    <section id="servicios" className="services">
      <div className="container services__head">
        <div>
          <p className="eyebrow"><span className="eyebrow__line" /> Servicios</p>
          <h2 className="h2 h2--xl">
            <MaskLine>Cómo puedo</MaskLine>
            <MaskLine delay={0.1}><em>ayudarte.</em></MaskLine>
          </h2>
        </div>
        <FadeUp className="services__intro">
          <p>
            Trabajo con personas y organizaciones que tienen una idea inicial y necesitan claridad para convertirla
            en un proyecto real. Elige un servicio y conversemos.
          </p>
          <motion.div
            className="services__index"
            initial="h"
            whileInView="v"
            viewport={{ once: true }}
            variants={{ v: { transition: { staggerChildren: 0.07 } } }}
          >
            {SERVICES.map((s) => (
              <motion.button
                key={s.key}
                onClick={() => scrollToId(`srv-${s.key}`)}
                variants={{ h: { opacity: 0, y: 14 }, v: { opacity: 1, y: 0, transition: { ease: ease('out'), duration: 0.6 } } }}
              >
                <span>{s.n}</span> {s.en}
              </motion.button>
            ))}
          </motion.div>
        </FadeUp>
      </div>

      <div className="stack container" ref={ref}>
        {SERVICES.map((s, i) => (
          <ServiceCard
            key={s.key}
            s={s}
            i={i}
            progress={scrollYProgress}
            range={[i / n, 1]}
            targetScale={1 - (n - i) * 0.035}
          />
        ))}
      </div>
    </section>
  );
}
