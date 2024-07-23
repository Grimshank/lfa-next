import React from 'react';
import { motion } from 'framer-motion';

const UNDERLAY_VARIANTS = {
  open: {
    width: "calc(100% - 32px)",
    height: "calc(100dvh - 32px)",
    transition: { type: "spring", mass: 3, stiffness: 400, damping: 50 },
  },
  closed: {
    width: "80px",
    height: "80px",
    transition: {
      delay: 0.75,
      type: "spring",
      mass: 3,
      stiffness: 400,
      damping: 50,
    },
  },
};

const HamburgerButton = ({ active, setActive }) => {
  return (
    <>
      <motion.div
        initial={ false }
        animate={ active ? 'open' : 'closed' }
        variants={ UNDERLAY_VARIANTS }
        style={{ top: 16, right: 16 }}
        className="fixed z-10 rounded-xl bg-[#ED9238] shadow-lg shadow-[#ED9238]/20"
      />

      <motion.button
        initial={ false }
        animate={ active ? 'open' : 'closed' }
        onClick={ () => setActive((pv) => !pv) }
        className={`group fixed right-4 top-4 z-50 h-20 w-20 bg-white/0 transition-all hover:bg-white/20 ${active ? 'rounded-bl-xl rounded-tr-xl' : 'rounded-xl' }`}
      >

      </motion.button>
    </>
  );
}

export default HamburgerButton;
