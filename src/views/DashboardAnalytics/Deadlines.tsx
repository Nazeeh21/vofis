import React from 'react';
import DeadlineItem from '../../components/DeadlineItem';
import { DeadlineProps } from '../../sharedTypes/Deadlines';

const Deadlines: React.FC<DeadlineProps> = ({ items }) => {
  return (
    <div className="border-gray-500 border-l-2 h-full pl-8">
      <div className="text-gray-700 font-semibold text-2xl font-display">
        Upcoming Deadlines
      </div>
      <div className="font-body font-medium mt-4">
        Stay on top of your deadline. 3 projects have deadline in the upcoming
        week.
      </div>
      {items.map((item, index) => (
        <DeadlineItem key={index} label={item.label} deadline={item.deadline} />
      ))}
    </div>
  );
};

export default Deadlines;
