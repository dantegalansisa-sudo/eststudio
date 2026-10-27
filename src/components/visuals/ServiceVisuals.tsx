import { motion } from 'framer-motion';
import type { ServiceKey } from '../../data';
import { ease } from '../../utils/easings';
import { Spark } from '../Icons';

const view = { once: false, amount: 0.4 } as const;

/* Visual identity — loose notes become a brand board */
function DesignVisual() {
  return (
    <div className="v v-design">
      <motion.div className="v-doc v-doc--old" initial={{ rotate: -8, x: -10 }} whileInView={{ rotate: -10, x: -24 }} viewport={view} transition={{ duration: 1.2, ease: ease('out') }}>
        {Array.from({ length: 11 }).map((_, i) => (
          <span key={i} style={{ width: `${70 + ((i * 37) % 30)}%` }} />
        ))}
      </motion.div>
      <motion.div className="v-doc v-doc--new" initial={{ y: 30, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={view} transition={{ duration: 0.9, ease: ease('out') }}>
        <div className="v-doc__head">
          <span className="v-dot" />
          <b>Brand board</b>
          <Spark size={12} />
        </div>
        {[
          ['Logotipo', 82],
          ['Paleta de color', 58],
          ['Tipografía', 70],
        ].map(([t, w], i) => (
          <motion.div
            key={t as string}
            className="v-row"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={view}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
          >
            <span className={`v-ico v-ico--${i}`} />
            <div>
              <small>{t}</small>
              <motion.i initial={{ width: 0 }} whileInView={{ width: `${w}%` }} viewport={view} transition={{ delay: 0.5 + i * 0.15, duration: 0.8 }} />
            </div>
          </motion.div>
        ))}
        <div className="v-timeline">
          {[0, 1, 2, 3].map((i) => (
            <motion.span key={i} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={view} transition={{ delay: 0.9 + i * 0.12, ease: ease('bounce'), duration: 0.5 }} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

/* Brand & marketing — brand → strategy → channels */
function GovernanceVisual() {
  const nodes = [
    { x: 50, y: 18, l: 'Tu marca' },
    { x: 50, y: 46, l: 'Estrategia' },
    { x: 18, y: 78, l: 'Contenido' },
    { x: 50, y: 78, l: 'Redes' },
    { x: 82, y: 78, l: 'Audiencia' },
  ];
  const lines = ['M50 24 L50 40', 'M50 52 L50 62 L18 62 L18 72', 'M50 62 L50 72', 'M50 62 L82 62 L82 72'];
  return (
    <div className="v v-gov">
      <motion.svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="v-gov__lines"
        initial={{ clipPath: 'inset(0% 0% 100% 0%)' }}
        whileInView={{ clipPath: 'inset(0% 0% 0% 0%)' }}
        viewport={view}
        transition={{ delay: 0.2, duration: 1.2, ease: ease('smooth') }}
      >
        {lines.map((d) => (
          <path key={d} d={d} />
        ))}
      </motion.svg>
      {nodes.map((n, i) => (
        <motion.div
          key={n.l}
          className={`v-node ${i === 0 ? 'v-node--main' : ''}`}
          style={{ left: `${n.x}%`, top: `${n.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={view}
          transition={{ delay: i * 0.15, duration: 0.6, ease: ease('bounce') }}
        >
          <span className="v-node__av" />
          {n.l}
        </motion.div>
      ))}
    </div>
  );
}


/* Ideas & projects — roadmap from idea to project */
function PlanningVisual() {
  const pts = [
    { x: 10, y: 78, l: 'Idea' },
    { x: 36, y: 56, l: 'Objetivos' },
    { x: 62, y: 62, l: 'Plan' },
    { x: 88, y: 24, l: 'Proyecto' },
  ];
  return (
    <div className="v v-plan">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none">
        <motion.path
          d="M10 78 C 22 78, 26 56, 36 56 S 52 64, 62 62 S 80 30, 88 24"
          initial={{ pathLength: 0 }}
          whileInView={{ pathLength: 1 }}
          viewport={view}
          transition={{ duration: 1.8, ease: ease('smooth') }}
        />
      </svg>
      {pts.map((p, i) => (
        <motion.div
          key={p.l}
          className={`v-mile ${i === pts.length - 1 ? 'v-mile--goal' : ''}`}
          style={{ left: `${p.x}%`, top: `${p.y}%` }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={view}
          transition={{ delay: 0.3 + i * 0.4, duration: 0.5, ease: ease('bounce') }}
        >
          <span />
          <small>{p.l}</small>
        </motion.div>
      ))}
      <div className="v-plan__q">
        {['Explorar', 'Definir', 'Planificar', 'Lanzar'].map((q) => (
          <span key={q}>{q}</span>
        ))}
      </div>
    </div>
  );
}


export default function ServiceVisual({ k }: { k: ServiceKey }) {
  switch (k) {
    case 'ideas':
      return <PlanningVisual />;
    case 'brand':
      return <GovernanceVisual />;
    case 'identity':
      return <DesignVisual />;
  }
}
