import { useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { EMAIL, FAQ, LOCATION, MAILTO, NAV, SOCIAL, WA_DEFAULT } from '../data';
import { FadeUp, MaskLine } from './RevealText';
import Logo from './Logo';
import { Arrow, Facebook, Instagram, LinkedIn, Mail, Pin, Plus, Spark, WhatsApp } from './Icons';
import { useParallax } from '../hooks/useParallax';
import { scrollToId } from '../utils/scroll';
import { ease } from '../utils/easings';

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="faq">
      <div className="container faq__grid">
        <div className="faq__side">
          <p className="eyebrow"><span className="eyebrow__line" /> Preguntas frecuentes</p>
          <h2 className="h2">
            <MaskLine>Todo lo que</MaskLine>
            <MaskLine delay={0.1}>necesitas <em>saber.</em></MaskLine>
          </h2>
          <FadeUp>
            <a className="faq__card" href={WA_DEFAULT} target="_blank" rel="noopener noreferrer">
              <span className="faq__card-ic"><WhatsApp size={20} /></span>
              <span>
                <b>¿Tienes otra pregunta?</b>
                <small>Escríbeme y conversemos sobre tu idea.</small>
              </span>
              <Arrow size={18} />
            </a>
          </FadeUp>
        </div>
        <div className="faq__list">
          {FAQ.map((f, i) => (
            <motion.div
              key={f.q}
              className={`faq__item ${open === i ? 'is-open' : ''}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: i * 0.06, duration: 0.6 }}
            >
              <button onClick={() => setOpen(open === i ? null : i)} aria-expanded={open === i}>
                <span>{f.q}</span>
                <motion.span className="faq__plus" animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.4, ease: ease('premium') }}>
                  <Plus size={18} />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: ease('premium') }}
                    className="faq__a"
                  >
                    <p>{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Contact() {
  const { ref, y } = useParallax(40);
  const [form, setForm] = useState({ name: '', email: '', msg: '' });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  // No backend yet: the form composes an email to Stephanie in the visitor's mail app.
  const send = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = MAILTO(
      `Nuevo proyecto — ${form.name}`,
      `${form.msg}

— ${form.name}
${form.email}`
    );
  };

  return (
    <section id="contacto" className="contact">
      <div className="container">
        <div className="contact__card" ref={ref}>
          <div className="contact__glow" />
          <div className="contact__content">
            <p className="eyebrow eyebrow--light"><Spark size={12} /> Hablemos</p>
            <h2 className="contact__title">
              <MaskLine>Convirtamos tu idea</MaskLine>
              <MaskLine delay={0.1}>en <em>proyecto.</em></MaskLine>
            </h2>
            <FadeUp>
              <p className="contact__sub">
                Si deseas conocer más sobre mi trabajo o explorar oportunidades de colaboración, escríbeme por el
                formulario o mediante los siguientes canales.
              </p>
            </FadeUp>
            <FadeUp>
              <form className="cform" onSubmit={send}>
                <div className="cform__row">
                  <label>
                    <span>Nombre</span>
                    <input required value={form.name} onChange={set('name')} placeholder="Tu nombre" />
                  </label>
                  <label>
                    <span>Correo electrónico</span>
                    <input required type="email" value={form.email} onChange={set('email')} placeholder="tu@correo.com" />
                  </label>
                </div>
                <label>
                  <span>Mensaje</span>
                  <textarea required rows={3} value={form.msg} onChange={set('msg')} placeholder="Cuéntame sobre tu idea o proyecto" />
                </label>
                <button className="btn btn--gold btn--lg" type="submit" data-cursor="Enviar">
                  Enviar mensaje <span className="btn__ic"><Arrow size={16} /></span>
                </button>
              </form>
            </FadeUp>
            <ul className="contact__info">
              <li><a href={`mailto:${EMAIL}`}><Mail size={18} /> {EMAIL}</a></li>
              <li><Pin size={18} /> {LOCATION}</li>
              <li className="contact__social">
                <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedIn size={16} /></a>
                <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
                <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={17} /></a>
              </li>
            </ul>
          </div>
          <div className="contact__visual">
            <span className="contact__circle" />
            <motion.img src="/images/stephanie.webp" alt="" style={{ y }} loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <Logo />
          <nav>
            {NAV.map((n) => (
              <a key={n.id} href={`#${n.id}`} onClick={(e) => { e.preventDefault(); scrollToId(n.id); }}>
                {n.label}
              </a>
            ))}
          </nav>
          <div className="footer__social">
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedIn size={16} /></a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
            <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={17} /></a>
            <a href={`mailto:${EMAIL}`} aria-label="Correo"><Mail size={18} /></a>
          </div>
        </div>
        <motion.div
          className="footer__word"
          initial={{ y: '40%', opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: ease('premium') }}
          aria-hidden
        >
          Stephanie <em>Romacho.</em>
        </motion.div>
        <p className="footer__motto">Estrategia, marketing y creatividad para transformar ideas en proyectos reales.</p>
        <div className="footer__bottom">
          <span>© {new Date().getFullYear()} Stephanie Romacho. Todos los derechos reservados.</span>
          <span>Diseño web por NEXIX Tech Studio</span>
        </div>
      </div>
    </footer>
  );
}

export function WhatsAppFloat() {
  const { scrollY } = useScroll();
  const [show, setShow] = useState(false);
  useMotionValueEvent(scrollY, 'change', (v) => setShow(v > 700));
  return (
    <AnimatePresence>
      {show && (
        <motion.a
          className="wa-float"
          href={WA_DEFAULT}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Escribir por WhatsApp"
          initial={{ scale: 0, rotate: -45 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0 }}
          transition={{ duration: 0.5, ease: ease('bounce') }}
        >
          <WhatsApp size={26} />
          <span className="wa-float__tip">¿Hablamos?</span>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
