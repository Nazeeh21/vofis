import React from 'react';
import { DashboardRightCompProps } from '../../../sharedTypes/RightComponentTypes';
import DashboardRightCompItem from './DashboardRightCompItem';

const DashboardRightComponent: React.FC<DashboardRightCompProps> = ({
  items,
}) => {
  return (
    <div>
      <div className="font-semibold text-xl font-display mb-2">
        Recently Opened
      </div>
      {items.map((item, index) => (
        <DashboardRightCompItem
          key={index}
          src={item.src}
          alt={item.alt}
          label={item.label}
        />
      ))}
    </div>
  );
};

export default DashboardRightComponent;
