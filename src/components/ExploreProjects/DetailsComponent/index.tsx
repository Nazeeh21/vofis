import React from 'react';

type Props = {
  heading: string;
  description: string;
};
const DetailsComponent: React.FC<Props> = ({ heading, description }) => {
  return (
    <div className="w-full text-gray-700 my-6">
      <div className="text-xl font-medium font-display">{heading}</div>
      <div className="text-sm font-body font-medium">{description}</div>
    </div>
  );
};

export default DetailsComponent;
