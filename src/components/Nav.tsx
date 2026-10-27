import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion';
import Logo, { Monogram } from './Logo';
import { EMAIL, MAILTO, NAV, SOCIAL } from '../data';
import { lockScroll, scrollToId } from '../utils/scroll';
import { ease } from '../utils/easings';
import { Arrow, Facebook, Instagram, LinkedIn, Mail } from './Icons';
import { INTRO } from './Loader';

export default function Nav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('inicio');

  useMotionValueEvent(scrollY, 'change', (v) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(v > 40);
    setHidden(v > prev && v > 600 && !open);
  });

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    NAV.forEach((n) => {
      const el = document.getElementById(n.id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  useEffect(() => lockScroll(open), [open]);

  const go = (id: string) => {
    setOpen(false);
    setTimeout(() => scrollToId(id), open ? 450 : 0);
  };

  return (
    <>
      <motion.header
        className={`nav ${scrolled ? 'nav--scrolled' : ''} ${open ? 'nav--open' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: hidden ? -110 : 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: hidden || scrolled ? 0 : INTRO, ease: ease('premium') }}
      >
        <div className="nav__inner">
          <a href="#inicio" onClick={(e) => { e.preventDefault(); go('inicio'); }} aria-label="Inicio">
            <Logo />
          </a>

          <nav className="nav__links" aria-label="Principal">
            {NAV.map((n) => (
              <a
                key={n.id}
                href={`#${n.id}`}
                className={active === n.id ? 'is-active' : ''}
                onClick={(e) => { e.preventDefault(); go(n.id); }}
              >
                {active === n.id && (
                  <motion.span layoutId="nav-pill" className="nav__pill" transition={{ type: 'spring', stiffness: 380, damping: 32 }} />
                )}
                <span>{n.label}</span>
              </a>
            ))}
          </nav>

          <a className="nav__cta" href="/resume">
            <Arrow size={17} />
            <span>Ver mi CV</span>
          </a>

          <button className="nav__burger" onClick={() => setOpen((o) => !o)} aria-label={open ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={open}>
            <span />
            <span />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="menu"
            initial={{ clipPath: 'circle(0% at calc(100% - 44px) 40px)' }}
            animate={{ clipPath: 'circle(150% at calc(100% - 44px) 40px)' }}
            exit={{ clipPath: 'circle(0% at calc(100% - 44px) 40px)' }}
            transition={{ duration: 0.75, ease: ease('premium') }}
          >
            <div className="menu__glow" />
            <Monogram size={240} light className="menu__mark" />
            <ul className="menu__list">
              {NAV.map((n, i) => (
                <li key={n.id}>
                  <span className="mask">
                    <motion.a
                      href={`#${n.id}`}
                      onClick={(e) => { e.preventDefault(); go(n.id); }}
                      initial={{ y: '110%' }}
                      animate={{ y: 0 }}
                      exit={{ y: '110%' }}
                      transition={{ duration: 0.7, delay: 0.2 + i * 0.06, ease: ease('premium') }}
                    >
                      <small>0{i + 1}</small>
                      {n.label}
                    </motion.a>
                  </span>
                </li>
              ))}
            </ul>
            <motion.div
              className="menu__foot"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 0.55, duration: 0.6 }}
            >
              <a className="btn btn--gold btn--block" href={MAILTO()}>
                <Mail size={18} /> Escríbeme <Arrow size={18} />
              </a>
              <div className="menu__meta">
                <span>{EMAIL}</span>
                <span className="menu__social">
                  <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={18} /></a>
                  <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><LinkedIn size={16} /></a>
                  <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={16} /></a>
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
