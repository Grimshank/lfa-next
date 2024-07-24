import React from 'react';
import LinksContainer from '@/components/nav/LInksContainer';
import Logo from '@/components/nav/Logo';

const LinksOverlay = () => {
  return (
    <nav className="fixed right-4 top-4 z-40 h-[calc(100vh_-_32px)] w-[calc(100%_-_32px)] overflow-hidden">
      <Logo />
      <LinksContainer />
      {
        /*
        <FooterCTAs />
        */
      }
    </nav>
  );
}

export default LinksOverlay;
