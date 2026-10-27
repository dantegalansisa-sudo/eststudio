import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { FadeUp, MaskLine } from './RevealText';
import AnimatedCounter from './AnimatedCounter';
import { useParallax } from '../hooks/useParallax';
import { ease } from '../utils/easings';
import { Spark } from './Icons';
import { SKILLS } from '../data';

const MANIFESTO =
  'Creo en la combinación de estrategia, creatividad y tecnología para desarrollar proyectos que conecten ideas con resultados reales.';

function Word({ children, progress, range }: { children: string; progress: MotionValue<number>; range: [number, number] }) {
  const opacity = useTransform(progress, range, [0.14, 1]);
  const highlight = ['estrategia,', 'creatividad', 'tecnología', 'resultados', 'reales.'].includes(children);
  return (
    <span className={`mword ${highlight ? 'mword--em' : ''}`}>
      <motion.span style={{ opacity }}>{children}</motion.span>{' '}
    </span>
  );
}

export function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.85', 'end 0.45'] });
  const words = MANIFESTO.split(' ');
  return (
    <section className="manifesto" ref={ref}>
      <div className="container">
        <p className="eyebrow eyebrow--center">
          <Spark size={12} /> Mi filosofía
        </p>
        <p className="manifesto__text">
          {words.map((w, i) => (
            <Word key={i} progress={scrollYProgress} range={[i / words.length, (i + 1) / words.length]}>
              {w}
            </Word>
          ))}
        </p>
      </div>
    </section>
  );
}

const PILLARS = [
  { t: 'Estrategia', d: 'Cada idea con objetivos claros y un plan de acción.' },
  { t: 'Creatividad', d: 'Identidades y contenidos que se recuerdan.' },
  { t: 'Tecnología', d: 'Herramientas digitales e IA al servicio del proyecto.' },
];

export default function About() {
  const { ref, y } = useParallax(50);
  return (
    <section id="sobre-mi" className="about">
      <div className="container about__grid">
        <motion.div className="about__visual" ref={ref} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
          <motion.div
            className="about__arch"
            variants={{
              hidden: { clipPath: 'inset(100% 0% 0% 0% round 400px 400px 32px 32px)' },
              show: {
                clipPath: 'inset(0% 0% 0% 0% round 400px 400px 32px 32px)',
                transition: { duration: 1.3, ease: ease('premium') },
              },
            }}
          >
            <span className="about__arch-word">Stephanie</span>
            <motion.img src="/images/stephanie.webp" alt="Stephanie Romacho" style={{ y }} loading="lazy" />
          </motion.div>
          <motion.div
            className="about__quote"
            initial={{ opacity: 0, y: 40, rotate: 4 }}
            whileInView={{ opacity: 1, y: 0, rotate: -3 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4, ease: ease('out') }}
          >
            <span className="about__quote-mark">“</span>
            Toda gran marca empezó como <em>una idea</em> que alguien se atrevió a estructurar.
          </motion.div>
          <motion.span
            className="about__flag"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6, ease: ease('bounce') }}
          >
            <svg width="21" height="14" viewBox="0 0 21 14" aria-hidden style={{ borderRadius: 3 }}>
              <rect width="21" height="14" fill="#fff" />
              {[0, 5.6, 11.2].map((yy) => (
                <rect key={yy} y={yy} width="21" height="2.8" fill="#ED0000" />
              ))}
              <path d="M0 0L10 7L0 14Z" fill="#0050F0" />
              <circle cx="3.6" cy="7" r="1.5" fill="#fff" />
            </svg>
            Arecibo, Puerto Rico
          </motion.span>
        </motion.div>

        <div className="about__content">
          <p className="eyebrow"><span className="eyebrow__line" /> Sobre mí</p>
          <h2 className="h2">
            <MaskLine>Conóceme,</MaskLine>
            <MaskLine delay={0.1}>la <em>mente</em> detrás.</MaskLine>
          </h2>
          <FadeUp>
            <p className="lead">
              Soy una profesional con formación en administración de empresas con concentración en mercadeo, maestría
              en artes gráficas con especialización en diseño gráfico y estudios en tecnología educativa.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="body">
              A lo largo de mi trayectoria he trabajado en proyectos de marketing, branding, diseño gráfico y
              comunicación visual para corporaciones, negocios locales e instituciones educativas.
            </p>
          </FadeUp>

          <motion.ul
            className="tags"
            initial="h"
            whileInView="v"
            viewport={{ once: true, amount: 0.4 }}
            variants={{ v: { transition: { staggerChildren: 0.05 } } }}
          >
            {SKILLS.map((t) => (
              <motion.li key={t} variants={{ h: { opacity: 0, y: 12 }, v: { opacity: 1, y: 0 } }}>
                {t}
              </motion.li>
            ))}
          </motion.ul>

          <div className="pillars">
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.t}
                className="pillar"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: i * 0.12, duration: 0.7, ease: ease('out') }}
              >
                <span className="pillar__n">0{i + 1}</span>
                <h3>{p.t}</h3>
                <p>{p.d}</p>
              </motion.div>
            ))}
          </div>

          <FadeUp className="about__sign">
            <span className="about__sign-line" />
            <span className="script">Stephanie Romacho</span>
          </FadeUp>
        </div>
      </div>

      <div className="container stats">
        {[
          { n: 8, p: '', s: '+', l: 'Años de experiencia' },
          { n: 3, p: '', s: '', l: 'Títulos académicos' },
          { n: 4, p: '', s: '', l: 'Proyectos destacados' },
          { n: 3, p: '', s: '', l: 'Áreas de servicio' },
        ].map((s, i) => (
          <motion.div
            key={s.l}
            className="stat"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
          >
            <strong>
              <AnimatedCounter target={s.n} prefix={s.p} suffix={s.s} />
            </strong>
            <span>{s.l}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
