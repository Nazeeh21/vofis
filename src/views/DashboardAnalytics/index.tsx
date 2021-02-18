import React from 'react';
import DashboardAnalyticsItem from '../../components/DashboardAnalyticsItem';
import { DashboardAnalyticsProps } from '../../sharedTypes/dashboardAnalytics';

const Index: React.FC<DashboardAnalyticsProps> = ({
  items,
  transparent = false,
}) => {
  return (
    <div
      className={`${
        !transparent && 'bg-white'
      } rounded-lg p-4 justify-around grid grid-cols-3`}
    >
      {items.map((item) => {
        const {
          id,
          timeString,
          title,
          unitString,
          changeInPercent,
          figure,
          currency,
        } = item;

        return (
          <div key={id} className="flex w-full">
            <DashboardAnalyticsItem
              id={id}
              changeInPercent={changeInPercent}
              figure={figure}
              title={title}
              key={id}
              timeString={timeString}
              unitString={unitString}
              currency={currency}
            />
            {id !== items.length && (
              <div
                style={{ width: '0.1rem' }}
                className="h-full -ml-6 bg-gray-400"
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Index;
