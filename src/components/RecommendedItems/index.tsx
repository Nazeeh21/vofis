import React from 'react';
import { RecommendedItemsProps } from '../../sharedTypes/recommendedTypes';
import { ApplyButton } from '../RoundButton';

const RecommendedItems: React.FC<RecommendedItemsProps> = ({
  category,
  title,
  description,
  type,
}) => {
  return (
    <div className="w-96 mr-16 inline-block">
      <div className="font-inter text-gray-600 text-sm">{category}</div>
      <div className="font-display text-2xl font-semibold my-1 flex justify-between items-center">
        {title}
        <span className="mr-3">
          <img className="cursor-pointer" src="/save.png" alt="save" />
        </span>
      </div>
      <div className="font-body font-medium">{description}</div>
      <div className="flex justify-between items-center mt-2">
        <ApplyButton />
        <div className="font-inter font-medium text-gray3 text-sm">{type}</div>
      </div>
    </div>
  );
};

export default RecommendedItems;
