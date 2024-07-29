import React from 'react';
import ShuffleGrid from '@/components/hero/ShuffleGrid';

function ShuffleHero({ works }) {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
      <div>
        <h1 className="text-[#5280BB]">live a life of color</h1>
        <h3 className="text-black text-4xl md:text-6xl font-semibold">
          LeCrone Fine Art
        </h3>
      </div>
      <ShuffleGrid works={works} />
    </section>
  );
}

export default ShuffleHero;
