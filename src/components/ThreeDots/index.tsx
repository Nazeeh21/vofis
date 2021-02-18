import React from 'react';

const ThreeDots: React.FC = () => {
  return (
    <div className="flex justify-around items-center w-6 cursor-pointer">
      <div
        style={{ backgroundColor: '#C5C3C6' }}
        className="w-1 h-1 mr-1 rounded-full"
      />
      <div
        style={{ backgroundColor: '#C5C3C6' }}
        className="w-1 h-1 mr-1 rounded-full"
      />
      <div
        style={{ backgroundColor: '#C5C3C6' }}
        className="w-1 h-1 mr-1 rounded-full"
      />
    </div>
  );
};

export default ThreeDots;
