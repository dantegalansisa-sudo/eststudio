import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ease } from '../utils/easings';

/** Seconds until the hero starts its entrance (loader duration). */
export const INTRO = 1.5;

export default function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const t = setTimeout(() => setShow(false), INTRO * 1000 - 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="loader"
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.9, ease: ease('premium') }}
        >
          <motion.span
            className="loader__mark"
            initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0.4 }}
            animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
            transition={{ duration: 1, ease: ease('smooth') }}
          >
            S<i>R</i>
          </motion.span>
          <motion.p
            initial={{ opacity: 0, letterSpacing: '0.2em' }}
            animate={{ opacity: 1, letterSpacing: '0.5em' }}
            transition={{ duration: 1.1, delay: 0.15 }}
          >
            STEPHANIE ROMACHO
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
