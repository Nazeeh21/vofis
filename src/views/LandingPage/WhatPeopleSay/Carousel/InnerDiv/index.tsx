import React from 'react';

type InnerDivProps = {
  src: string;
  title: string;
  tagline: string;
  description: string;
  name: string;
};

const InnerDiv: React.FC<InnerDivProps> = ({
  src,
  title,
  tagline,
  description,
  name,
}) => {
  return (
    <div className="w-full flex flex-col md:flex-row gap-0 md:gap-16  items-center">
      <div className="w-10/12 md:w-5/12 lg:w-4/12 xl:w-3/12 ">
        <img
          className="w-full rounded-full h-auto"
          src={src}
          alt="carousel-1"
        />
        <div className="block md:hidden text-center font-body font-bold mt-10">
          {name}
        </div>
      </div>
      <div className="text-center md:text-left md:w-7/12 lg:w-7/12 xl:w-8/12">
        <div className="font-inter text-sm font-normal text-gray-500 mt-8">
          {title}
        </div>
        <div className="font-display font-semibold text-3xl">{tagline}</div>
        <div className="font-body font-medium mt-4 text-lg">{description}</div>
        <div className="hidden md:block font-body font-bold mt-10">{name}</div>
      </div>
    </div>
  );
};

export default InnerDiv;
