import { useState } from 'react';
import { EDUCATION, EMAIL, EXPERIENCE, PHONE_LABEL, SOCIAL } from '../data';
import { Monogram } from './Logo';
import { Arrow, Download } from './Icons';

const T = {
  es: {
    role: 'Mercadóloga · Diseñadora Gráfica · Educadora',
    objective: 'Objetivo',
    objectiveText:
      'Impulsar el crecimiento de marcas y proyectos mediante estrategias de marketing, diseño gráfico y comunicación visual orientadas a resultados.',
    experience: 'Experiencia',
    education: 'Educación',
    certs: 'Certificaciones',
    skills: 'Habilidades',
    strategic: 'Estratégicas',
    tools: 'Herramientas',
    back: 'Volver al portafolio',
    print: 'Imprimir / Guardar PDF',
  },
  en: {
    role: 'Marketer · Graphic Designer · Educator',
    objective: 'Objective',
    objectiveText:
      'Drive the growth of brands and projects through results-oriented marketing, graphic design and visual communication strategies.',
    experience: 'Experience',
    education: 'Education',
    certs: 'Certifications',
    skills: 'Skills',
    strategic: 'Strategic',
    tools: 'Tools',
    back: 'Back to portfolio',
    print: 'Print / Save PDF',
  },
};

const EDU_CV = [
  { t: 'M.A. Artes Gráficas, Diseño Gráfico', d: 'Atlantic University College, Guaynabo · Ago 2021' },
  { t: 'B.A. Administración de Empresas, Mercadeo', d: 'Universidad de Puerto Rico en Arecibo · May 2020' },
  { t: 'Diploma ADEM, Mercadeo', d: 'Esc. Abelardo Martínez Otero, Arecibo · May 2015' },
];

const CERTS_CV = [
  { t: 'Servicio al Cliente', d: 'Pathstone – Smile Again Learning Center · Jul 2025' },
  { t: 'E-Commerce y Mercadeo Digital con IA', d: 'Conexión Laboral Área Norte Central · Jun 2025' },
  { t: 'Tecnología Educativa', d: 'Caribbean University, Vega Baja · Feb 2025' },
];

const STRATEGIC = ['Marketing digital', 'Branding', 'Gestión de cuentas', 'Comunicación visual', 'Estrategia de contenido', 'Gestión de proyectos'];
const TOOLS = ['Canva', 'Adobe Creative Suite', 'Google Workspace', 'Meta Business Suite', 'Redes sociales', 'E-commerce'];

export default function Resume() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const t = T[lang];

  return (
    <div className="cv">
      <div className="cv__bar">
        <a href="/" className="cv__back">
          <Arrow size={16} className="cv__back-ic" /> {t.back}
        </a>
        <div className="cv__actions">
          <button className="cv__lang" onClick={() => setLang(lang === 'es' ? 'en' : 'es')}>
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <button className="btn btn--ink btn--sm" onClick={() => window.print()}>
            <Download size={16} /> {t.print}
          </button>
        </div>
      </div>

      <article className="cv__sheet">
        <header className="cv__head">
          <div>
            <h1>
              Stephanie <em>Romacho Ferrer</em>
            </h1>
            <p className="cv__role">{t.role}</p>
          </div>
          <Monogram size={64} className="cv__mark" />
        </header>
        <ul className="cv__contact">
          <li>{PHONE_LABEL}</li>
          <li>{EMAIL}</li>
          <li>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn · stephanie-romacho</a>
          </li>
          <li>Arecibo, Puerto Rico</li>
        </ul>

        <section className="cv__block">
          <h2>{t.objective}</h2>
          <p>{t.objectiveText}</p>
        </section>

        <div className="cv__cols">
          <section className="cv__block">
            <h2>{t.experience}</h2>
            {EXPERIENCE.map((e) => (
              <div className="cv__item" key={e.n}>
                <div className="cv__item-top">
                  <b>
                    {e.title} {e.em}
                  </b>
                  <span>{e.date}</span>
                </div>
                <small>{e.org}</small>
                <p>{e.text}</p>
              </div>
            ))}
          </section>

          <aside>
            <section className="cv__block">
              <h2>{t.education}</h2>
              {EDU_CV.map((e) => (
                <div className="cv__item" key={e.t}>
                  <b>{e.t}</b>
                  <small>{e.d}</small>
                </div>
              ))}
            </section>
            <section className="cv__block">
              <h2>{t.certs}</h2>
              {CERTS_CV.map((e) => (
                <div className="cv__item" key={e.t}>
                  <b>{e.t}</b>
                  <small>{e.d}</small>
                </div>
              ))}
            </section>
            <section className="cv__block">
              <h2>{t.skills}</h2>
              <h3>{t.strategic}</h3>
              <div className="cv__chips">
                {STRATEGIC.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
              <h3>{t.tools}</h3>
              <div className="cv__chips">
                {TOOLS.map((s) => (
                  <span key={s}>{s}</span>
                ))}
              </div>
            </section>
            <section className="cv__block cv__docs">
              {EDUCATION.slice(0, 3).map((e) => (
                <a key={e.url} href={e.url} target="_blank" rel="noopener noreferrer">
                  <Download size={14} /> {e.kind}
                </a>
              ))}
            </section>
          </aside>
        </div>
      </article>
    </div>
  );
}
