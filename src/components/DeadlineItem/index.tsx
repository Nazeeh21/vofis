import React from 'react';
import { DeadlineItemProps } from '../../sharedTypes/Deadlines';

const DeadlineItem: React.FC<DeadlineItemProps> = ({ label, deadline }) => {
  return (
    <div className="mt-10 w-full">
      <div className="flex justify-between items-center">
        <div className="font-dm">{label}</div>
        <div className="font-dm text-gray3">{deadline}</div>
      </div>
      <div className="w-full flex h-2 rounded-full mt-2">
        <div
          style={{ backgroundColor: '#1985A1' }}
          className="w-9/12 h-full rounded-full"
        ></div>
        <div
          style={{ backgroundColor: '#1985A1' }}
          className="w-3/12 opacity-10 h-full rounded-full"
        ></div>
      </div>
    </div>
  );
};

export default DeadlineItem;
