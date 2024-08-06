import React from 'react';

const HeroSection = () => {
  return (
    <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/footer.jpg')" }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white p-5">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to My Art Gallery</h1>
        <p className="text-xl md:text-2xl">Explore the world through my art.</p>
      </div>
    </div>
  );
}

export default HeroSection;
