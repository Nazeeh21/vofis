import React from 'react';
import { LeftArrow, RightArrow } from '../../components/ArrowButtons';
import RecommendedItems from '../../components/RecommendedItems';
import { RecommendedProps } from '../../sharedTypes/recommendedTypes';

const Recommended: React.FC<RecommendedProps> = ({ items }) => {
  return (
    <div className="mt-6">
      <div className="flex justify-between items-center">
        <div className="text-gray-700 font-semibold text-2xl font-display">
          Recommended for you
        </div>
        <div className="flex items-center">
          <LeftArrow
            clickHandler={() => {
              document.getElementById(
                'recommended-items-dashboard'
              ).scrollLeft -= 80;
              return;
            }}
          />
          <div className="text-xl font-semibold text-gray-600 font-display mx-6">
            01 / 02
          </div>
          <RightArrow
            clickHandler={() => {
              document.getElementById(
                'recommended-items-dashboard'
              ).scrollLeft += 80;
              return;
            }}
          />
        </div>
      </div>
      <div
        id="recommended-items-dashboard"
        className="overflow-x-auto mt-4 flex"
      >
        {items.map((item, index) => (
          <div className="mr-16" key={index}>
            <RecommendedItems
              category={item.category}
              title={item.title}
              description={item.description}
              type={item.type}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recommended;
