import React from 'react';
import { loremIpsum } from '../../constants';
import { DashboardAnalyticsItem } from '../../sharedTypes/dashboardAnalytics';
import DashboardAnalytics from '../../views/DashboardAnalytics';
import Deadlines from '../../views/DashboardAnalytics/Deadlines';
import ProjectUpdates from '../../views/DashboardAnalytics/ProjectUpdates';
import Recommended from '../../views/DashboardAnalytics/Recommended';

const dashboardItems: DashboardAnalyticsItem[] = [
  {
    changeInPercent: 10,
    figure: 200,
    id: 1,
    timeString: 'Since last month',
    title: 'Profile views',
    unitString: 'week',
  },
  {
    changeInPercent: -4.5,
    figure: 3,
    id: 2,
    timeString: 'Since last month',
    title: 'New Contracts',
    unitString: 'this month',
  },
  {
    changeInPercent: 7,
    figure: 3500,
    id: 3,
    timeString: 'Since last month',
    title: 'Income this month',
    unitString: '',
  },
];

const recommendedItems = [
  {
    category: 'DESIGN',
    title: 'Apple in.',
    description: loremIpsum,
    type: 'PART-TIME',
  },
  {
    category: 'ILLUSTRATION',
    title: 'Elephant House',
    description: loremIpsum,
    type: 'FULL-TIME',
  },
];

const deadlineItems = [
  {
    label: 'Vofis',
    deadline: '5 days left',
  },
  {
    label: 'OCG',
    deadline: '9 days left',
  },
  {
    label: 'Elephant House',
    deadline: '4 days left',
  },
  {
    label: 'Pencil Pros',
    deadline: '2 Jan 2021',
  },
  {
    label: 'Creatives',
    deadline: '28 Feb 2021',
  },
];

const Dashboard: React.FC = () => {
  return (
    <div className="w-full">
      <DashboardAnalytics items={dashboardItems} />
      <div className="grid grid-cols-3 grid-rows-1 p-4 mt-4">
        <div className="col-span-2 mr-8">
          <ProjectUpdates />
          <Recommended items={recommendedItems} />
        </div>
        <div>
          <Deadlines items={deadlineItems} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
