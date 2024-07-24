import React from 'react';
import { motion } from 'framer-motion';
import NavLink from "@/components/nav/NavLink";

const LINKS = [
  {
    title: "home",
    href: "#",
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
    href: "#",
  },
];

const LinksContainer = () => {
  return (
    <motion.div className="space-y-4 p-12 pl-4 md:pl-20">
      {
        LINKS.map((l, idx) => {
          return (
            <NavLink key={l.title} href={l.href} idx={idx}>
              {l.title}
            </NavLink>
          );
        })
      }
    </motion.div>
  )
}

export default LinksContainer;
