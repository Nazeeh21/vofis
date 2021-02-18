import React from 'react';
import HorizontalDivider from '../../HorizontalDivider';
import ActionListItem from '../ActionListItem';

type ItemProps = {
  title: string;
  desc: string;
  isLast?: boolean;
};

const actionListitems = [
  'Archive contracts',
  'Send contracts',
  'Renew contracts',
];

const metricItems: ItemProps[] = [
  {
    title: '13',
    desc: 'contracts',
  },
  {
    title: '7',
    desc: 'new contracts',
  },
  {
    title: '4',
    desc: 'ongoing contracts',
  },
  {
    title: '5',
    desc: 'contracts renewed',
  },
  {
    title: '6 month',
    desc: 'average time frame',
    isLast: true,
  },
];

const MetricItem: React.FC<ItemProps> = ({ title, desc, isLast = false }) => {
  return (
    <div className="flex flex-col font-display">
      <span className="text-2xl font-bold text-gray-700">{title}</span>
      <span className="tracking-widest uppercase text-gray3 mb-4">{desc}</span>
      {!isLast && <HorizontalDivider color="gray-300 mb-4" />}
    </div>
  );
};

const ContractsRightComponents: React.FC = () => {
  return (
    <div className="w-full font-body text-right">
      <h3 className="font-bold text-xl text-blue mb-8">Overview</h3>
      {metricItems.map(({ title, desc, isLast }, idx) => (
        <MetricItem title={title} desc={desc} key={idx} isLast={isLast} />
      ))}
      <div>
        <div className="font-body font-bold absolute bottom-6 left-6 text-left">
          Quick actions
          <div className="mt-4">
            {actionListitems.map((item, index) => (
              <div key={index} className="mb-2">
                <ActionListItem label={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContractsRightComponents;
