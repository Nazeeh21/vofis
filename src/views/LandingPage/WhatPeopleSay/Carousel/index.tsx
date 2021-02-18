import React, { useState } from 'react';
import InnerDiv from './InnerDiv';

const data = [
  {
    src: '/LandingPage/carousel.png',
    title: 'FREELANCER',
    tagline: 'Everything I ever wanted !!',
    description:
      'This is THE product that I have been looking for years. It is super easy and convinient. Takes care of the papers and contracts and lets you focus on the work. I love it!',
    name: 'Tommy Smith',
  },
  {
    src: '/Signup/company-logo.png',
    title: 'COMPANY',
    tagline: 'Found genuine Freelancers !!',
    description:
      'This is THE product that I have been looking for years. It is super easy and convinient. Takes care of the papers and contracts and lets you focus on the work. I love it!',
    name: 'Facebook',
  },
  {
    src: '/LandingPage/who-are-we.png',
    title: 'FREELANCER',
    tagline: 'Good companies !!',
    description:
      'This is THE product that I have been looking for years. It is super easy and convinient. Takes care of the papers and contracts and lets you focus on the work. I love it!',
    name: 'Vofis Vofis',
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <div className="w-full flex items-center mb-10 md:mb-0">
      <div
        className={`outline-none w-16 md:w-auto justify-self-start cursor-pointer ${
          currentIndex === 0 && 'cursor-not-allowed'
        }`}
        onClick={() => {
          if (currentIndex !== 0) {
            setCurrentIndex((prevValue) => prevValue - 1);
          }
        }}
      >
        <img
          className="w-full"
          src="/LandingPage/left-arrow.png"
          alt="left arrow"
        />
      </div>
      <div className="px-5 md:px-16 lg:px-32 xl:px-44">
        <InnerDiv
          src={data[currentIndex].src}
          title={data[currentIndex].title}
          tagline={data[currentIndex].tagline}
          description={data[currentIndex].description}
          name={data[currentIndex].name}
        />
      </div>
      <div
        className={`outline-none w-16 md:w-auto justify-self-end cursor-pointer ${
          currentIndex === data.length - 1 && 'cursor-not-allowed'
        }`}
        onClick={() => {
          if (currentIndex !== data.length - 1) {
            setCurrentIndex((prevValue) => prevValue + 1);
          }
        }}
      >
        <img
          className="w-full"
          src="/LandingPage/right-arrow.png"
          alt="right arrow"
        />
      </div>
    </div>
  );
};

export default Carousel;
