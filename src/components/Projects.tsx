import { motion } from 'framer-motion';
import { PROJECTS } from '../data';
import { FadeUp, MaskLine } from './RevealText';
import { Arrow, Spark } from './Icons';
import { ease } from '../utils/easings';

type Cover = (typeof PROJECTS)[number]['cover'];

/** Typographic cover per project — placeholder until real mockups are provided. */
function ProjectCover({ cover, client }: { cover: Cover; client: string }) {
  switch (cover) {
    case 'cafe':
      return (
        <div className="pcover pcover--cafe">
          <span className="pcover__ring" />
          <span className="pcover__big">M</span>
          <span className="pcover__name">{client}</span>
          <span className="pcover__tag">Est. · Café local</span>
        </div>
      );
    case 'social':
      return (
        <div className="pcover pcover--social">
          <div className="pcover__grid">
            {Array.from({ length: 9 }).map((_, i) => (
              <span key={i} className={`pcover__post pcover__post--${i % 3}`} />
            ))}
          </div>
          <span className="pcover__handle">@jerrywhitez</span>
        </div>
      );
    case 'edtech':
      return (
        <div className="pcover pcover--edtech">
          <div className="pcover__screen">
            <i />
            <i />
            <i />
            <span className="pcover__play" />
          </div>
          <span className="pcover__label">Aula virtual</span>
        </div>
      );
    case 'edu':
      return (
        <div className="pcover pcover--edu">
          {['A', 'B', 'C'].map((l, i) => (
            <span key={l} className={`pcover__card pcover__card--${i}`}>
              {l}
            </span>
          ))}
          <span className="pcover__label">Contenido interactivo</span>
        </div>
      );
  }
}

export default function Projects() {
  return (
    <section id="proyectos" className="projects">
      <div className="container">
        <div className="projects__head">
          <div>
            <p className="eyebrow"><span className="eyebrow__line" /> Proyectos</p>
            <h2 className="h2 h2--xl">
              <MaskLine>Ideas que hoy</MaskLine>
              <MaskLine delay={0.1}><em>son realidad.</em></MaskLine>
            </h2>
          </div>
          <FadeUp className="projects__intro">
            <p>
              Una selección de proyectos y experiencias que reflejan mi enfoque creativo y estratégico para resolver
              problemas y desarrollar ideas.
            </p>
          </FadeUp>
        </div>

        <motion.div
          className="projects__grid"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {PROJECTS.map((p) => (
            <motion.a
              key={p.n}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="pcard"
              data-cursor="Ver"
              variants={{
                hidden: { opacity: 0, y: 60, scale: 0.96 },
                visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: ease('premium') } },
              }}
            >
              <div className="pcard__media">
                <ProjectCover cover={p.cover} client={p.client} />
                <span className="pcard__n">{p.n}</span>
              </div>
              <div className="pcard__body">
                <div className="pcard__top">
                  <span className="pcard__client">
                    <Spark size={10} /> {p.client}
                  </span>
                  <span className="pcard__go"><Arrow size={18} /></span>
                </div>
                <h3>{p.sub}</h3>
                <p>{p.d}</p>
                <div className="pcard__tags">
                  {p.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
