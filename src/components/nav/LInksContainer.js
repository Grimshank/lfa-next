import React from 'react';
import { motion } from 'framer-motion';
import NavLink from "@/components/nav/NavLink";

const LINKS = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "works",
    href: "#",
  },
  {
    title: "instruction",
    href: "#",
  },
  {
    title: "about",
    href: "/about",
  },
];

const LinksContainer = ({ setActive }) => {
  return (
    <motion.div className="space-y-4 pt-12 pl-4 md:pl-20 md:pt-6 sm:">
      {
        LINKS.map((l, idx) => {
          return (
            <NavLink key={l.title} href={l.href} idx={idx} setActive={setActive}>
              {l.title}
            </NavLink>
          );
        })
      }
    </motion.div>
  )
}

export default LinksContainer;
