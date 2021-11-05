import React from "react";

const MainHero = ({ title }) => {
  return (
    <header className=" mb-8 py-5 bg-gray-900">
      <div className="max-w-screen-xl mx-auto px-4 md:px-16 lg:px-32">
        <h1
          className="text-white-l-ddev md:text-4xl text-3xl"
          style={{ fontFamily: "'DotGothic16'" }}
        >
          <span className="text-green-ddev font-mono text-3xl">&gt; </span>
          {title} _
        </h1>
      </div>
    </header>
  );
};

export default MainHero;
