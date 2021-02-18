import React from 'react';
import Carousel from './Carousel';

const WhatPeopleSay: React.FC = () => {
  return (
    <div id="testimony" className="mt-20 px-5 h-auto md:px-20 mb-10 md:mb-20">
      <img
        // style={{ marginLeft: '20rem' }}
        className="right-0 w-4/12 md:w-auto -mt-44 overflow-hidden absolute"
        src="/gray-dots.png"
        alt="gray-dots"
      />
      <div className="font-inter font-semibold text-sm">TESTIMONY</div>
      <div className="font-display font-semibold text-5xl">
        What people say about us
      </div>
      <div className="mt-24 h-auto md:h-80">
        <Carousel />
      </div>
    </div>
  );
};

export default WhatPeopleSay;
