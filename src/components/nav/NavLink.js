import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NavLink = ({ children, href, idx, setActive }) => {
  const pathname = usePathname();

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -8
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          delay: 0.75 + idx * 0.125,
          duration: 0.5,
          ease: 'easeInOut',
        },
      }}
      exit={{
        opacity: 0,
        y: -8
      }}
      className={`block text-5xl font-semibold ${pathname === href ? 'text-[#ED9238]/100' : 'text-white/100'} transition-colors hover:text-white/100 md:text-7xl`}
    >
      <Link href={href} onClick={() => setActive((pv) => !pv)}>
        {children}
      </Link>
    </motion.div>
  );
};

export default NavLink;
