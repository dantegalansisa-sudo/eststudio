import { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import { EDUCATION, EXPERIENCE, TOOLS } from '../data';
import { FadeUp, MaskLine } from './RevealText';
import { Arrow, Download } from './Icons';
import { ease } from '../utils/easings';

/** Professional journey — timeline that fills as you scroll. */
export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.7', 'end 0.6'] });
  const fill = useSpring(scrollYProgress, { stiffness: 90, damping: 22 });

  return (
    <section id="trayectoria" className="method">
      <div className="container method__grid">
        <div className="method__side">
          <p className="eyebrow"><span className="eyebrow__line" /> Trayectoria</p>
          <h2 className="h2">
            <MaskLine>Más de 8 años</MaskLine>
            <MaskLine delay={0.1}><em>creando y comunicando.</em></MaskLine>
          </h2>
          <FadeUp>
            <p className="body">
              Marketing, diseño, educación y servicio: una trayectoria que combina estrategia con experiencia real
              frente a clientes, estudiantes y comunidades.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="tools">
              <small>Herramientas</small>
              {TOOLS.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
            <a className="btn btn--ink method__cv" href="/resume">
              Ver CV completo <span className="btn__ic"><Arrow size={16} /></span>
            </a>
          </FadeUp>
        </div>

        <div className="method__steps" ref={ref}>
          <div className="method__track">
            <motion.span style={{ scaleY: fill }} />
          </div>
          {EXPERIENCE.map((s, i) => (
            <motion.div
              key={s.n}
              className="step"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: ease('out') }}
            >
              <span className="step__dot" />
              <span className="step__n">{s.n}</span>
              <div>
                <span className="step__date">{s.date}</span>
                <h3>
                  {s.title} <em>{s.em}</em>
                </h3>
                <small className="step__org">{s.org}</small>
                <p>{s.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Education & certifications, each linking to its PDF. */
export function Education() {
  return (
    <section className="audience">
      <div className="container">
        <div className="audience__head">
          <p className="eyebrow"><span className="eyebrow__line" /> Formación</p>
          <h2 className="h2">
            <MaskLine>Preparación que</MaskLine>
            <MaskLine delay={0.1}>respalda <em>cada proyecto.</em></MaskLine>
          </h2>
        </div>
        <motion.ul
          className="audience__list audience__list--edu"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          variants={{ visible: { transition: { staggerChildren: 0.09, delayChildren: 0.1 } } }}
        >
          {EDUCATION.map((a, i) => (
            <motion.li
              key={a.t}
              variants={{
                hidden: { opacity: 0, y: 48, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: ease('premium') } },
              }}
            >
              <a href={a.url} target="_blank" rel="noopener noreferrer" className="edu" data-cursor="PDF">
                <span className="audience__n">
                  0{i + 1} · {a.kind}
                </span>
                <h3>{a.t}</h3>
                <p>{a.d}</p>
                <span className="audience__arrow"><Download size={18} /></span>
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
