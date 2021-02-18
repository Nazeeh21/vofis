import React from 'react';
import { DashboardRightCompItemProps } from '../../../../sharedTypes/RightComponentTypes';
import ThreeDots from '../../../ThreeDots';

const DashboardRightCompItem: React.FC<DashboardRightCompItemProps> = ({
  src,
  alt,
  label,
}) => {
  return (
    <div className="flex justify-between items-center mt-6">
      <div className="flex items-center">
        <img className="w-8 h-auto" src={src} alt={alt} />
        <div className="ml-2 font-body font-medium text-sm">
          {label.length > 7 ? label.slice(0, 6) + '...' : label}
        </div>
      </div>
      <div>
        <ThreeDots />
      </div>
    </div>
  );
};

export default DashboardRightCompItem;
