import { useCallback, useEffect, useRef, useState } from 'react';
import { animate, motion, useInView, useMotionValue, useMotionValueEvent } from 'framer-motion';
import { FadeUp, MaskLine } from './RevealText';
import { Calendar, Check, Clock, Spark } from './Icons';

const NOTES = [
  'idea: café pero diferente?? algo local',
  '¿nombre? ¿logo? colores... ¿dorado?',
  'vender también online (instagram?)',
  'público: ¿jóvenes? ¿familias? ¿todos?',
  'hacer flyers… y un post… y ¿un evento?',
  '¿precio? ¿por dónde empiezo???',
];

export default function StrategyShowcase() {
  const wrap = useRef<HTMLDivElement>(null);
  const pos = useMotionValue(50);
  const [p, setP] = useState(50);
  const dragging = useRef(false);
  const inView = useInView(wrap, { once: true, amount: 0.5 });

  useMotionValueEvent(pos, 'change', (v) => setP(v));

  // Hint animation the first time it's visible
  useEffect(() => {
    if (!inView) return;
    const c = animate(pos, [50, 78, 24, 50], { duration: 2.6, ease: 'easeInOut', delay: 0.3 });
    return () => c.stop();
  }, [inView, pos]);

  const setFromEvent = useCallback(
    (clientX: number) => {
      const r = wrap.current!.getBoundingClientRect();
      pos.set(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
    },
    [pos]
  );

  return (
    <section className="showcase">
      <div className="container">
        <div className="showcase__head">
          <p className="eyebrow eyebrow--center"><Spark size={12} /> De la idea al proyecto</p>
          <h2 className="h2 h2--center">
            <MaskLine>Misma idea,</MaskLine>
            <MaskLine delay={0.1}><em>otro nivel.</em></MaskLine>
          </h2>
          <FadeUp>
            <p className="showcase__sub">Desliza para ver cómo una idea suelta se convierte en un proyecto con estructura, identidad y plan de acción.</p>
          </FadeUp>
        </div>

        <FadeUp>
          <div
            className="compare"
            ref={wrap}
            data-cursor="Desliza"
            onPointerDown={(e) => {
              dragging.current = true;
              (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
              setFromEvent(e.clientX);
            }}
            onPointerMove={(e) => dragging.current && setFromEvent(e.clientX)}
            onPointerUp={() => (dragging.current = false)}
            onPointerCancel={() => (dragging.current = false)}
          >
            {/* AFTER (base layer) */}
            <div className="compare__after">
              <div className="nd">
                <div className="nd__head">
                  <span className="nd__tag">Proyecto estructurado</span>
                  <h4>Tu idea, <em>lista para crecer.</em></h4>
                  <div className="nd__parties">
                    <span><i className="nd__av nd__av--a">TÚ</i> Tu idea</span>
                    <span className="nd__amp">&</span>
                    <span><i className="nd__av nd__av--b">SR</i> Estrategia y diseño</span>
                  </div>
                </div>
                <div className="nd__grid">
                  <div className="nd__tile">
                    <span className="nd__ic"><Check size={16} /></span>
                    <small>Propuesta de valor</small>
                    <p>Qué ofreces, a quién y por qué te eligen.</p>
                  </div>
                  <div className="nd__tile nd__tile--blush">
                    <span className="nd__ic">Aa</span>
                    <small>Identidad visual</small>
                    <p>Logo, colores y tipografía con intención.</p>
                  </div>
                  <div className="nd__tile">
                    <span className="nd__ic"><Calendar size={16} /></span>
                    <small>Plan de acción</small>
                    <div className="nd__time">
                      <span /><span /><span /><span />
                    </div>
                    <p>Etapas claras, de la idea al lanzamiento.</p>
                  </div>
                  <div className="nd__tile nd__tile--ink">
                    <span className="nd__ic"><Clock size={16} /></span>
                    <small>Contenido</small>
                    <p>Estrategia para redes y comunicación.</p>
                  </div>
                </div>
                <div className="nd__note"><Spark size={12} /> Estrategia + creatividad + tecnología.</div>
              </div>
              <span className="compare__label compare__label--r">Proyecto real</span>
            </div>

            {/* BEFORE (clipped layer) */}
            <div className="compare__before" style={{ clipPath: `inset(0 ${100 - p}% 0 0)` }}>
              <div className="od od--notes">
                <h4>mis ideas ✎</h4>
                {NOTES.map((t, i) => (
                  <p key={i}>{t}</p>
                ))}
              </div>
              <span className="compare__label">Idea suelta</span>
            </div>

            <motion.div className="compare__handle" style={{ left: `${p}%` }}>
              <span className="compare__knob">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M9 6l-6 6 6 6M15 6l6 6-6 6" />
                </svg>
              </span>
            </motion.div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
