import React from 'react';
import QuickActionItem from './QuickActionItem';
import SliderInput from './SliderInput';

const exploreRightComponentsItems = ['Budget', 'Hourly rate', 'Duration'];

const quickActionItems = [
  { label: 'Date Posted' },
  { label: 'Job type' },
  { label: 'Education level' },
  { label: 'Company' },
];

const ExploreRightComponents: React.FC = () => {
  return (
    <div>
      <div style={{ height: '29rem' }} className="">
        <div className="font-body font-bold text-xl">Filter by</div>
        {exploreRightComponentsItems.map((item, index) => (
          <div key={index} className="mt-4">
            <SliderInput title={item} />
          </div>
        ))}
      </div>
      <div>
        <div className="font-body font-bold text-xl mb-4">Quick filters</div>
        {quickActionItems.map((item, index) => (
          <QuickActionItem label={item.label} key={index} />
        ))}
      </div>
    </div>
  );
};

export default ExploreRightComponents;
