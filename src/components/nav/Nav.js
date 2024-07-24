"use client";

import React, { useState } from 'react';
import {AnimatePresence} from "framer-motion";

import LinksOverlay from '@/components/nav/LinksOverlay';
import HamburgerButton from '@/components/nav/HamburgerButton';

const Nav = () => {
  const [active, setActive] = useState(false);

  return (
    <>
      <HamburgerButton active={active} setActive={setActive} />
      <AnimatePresence>
        {
          active && (
            <LinksOverlay setActive={setActive}/>
          )
        }
      </AnimatePresence>
    </>
  );
}

export default Nav;


