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
    href: "/works",
  },
  {
    title: "instruction",
    href: "/instruction",
  },
  {
    title: "about",
    href: "/about",
  },
  {
    title: "faq",
    href: "/faq",
  }
];

const LinksContainer = ({ setActive }) => {
  return (
    <motion.div className="space-y-4 pt-12 pl-24 md:pl-20 md:pt-6">
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
