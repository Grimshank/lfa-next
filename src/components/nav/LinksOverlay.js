import React from 'react';
import LinksContainer from '@/components/nav/LinksContainer';
import Logo from '@/components/nav/Logo';
import FooterCTAs from '@/components/nav/FooterCTAs';

const LinksOverlay = ({ setActive }) => {
  return (
    <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(100%_-_32px)] overflow-hidden">
      <Logo />
      <LinksContainer setActive={setActive} />
      <FooterCTAs />
    </nav>
  );
}

export default LinksOverlay;
