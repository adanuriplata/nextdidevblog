import React from 'react';

interface HeroProps {
  title: string;
}

export const Hero = ({ title }: HeroProps) => {
  return (
    <header className="mb-8 py-5 bg-gray-900 mt-20">
      <div className="max-w-screen-2xl mx-auto px-8 md:px-16 lg:px-32">
        <h1
          className="text-white-l-ddev md:text-4xl text-3xl"
          style={{ fontFamily: "'DotGothic16'" }}
        >
          <span className="text-green-ddev font-mono text-3xl animate-pulse">
            &gt;{' '}
          </span>
          {title} <span className="">_</span>
        </h1>
      </div>
    </header>
  );
};

export default Hero;
