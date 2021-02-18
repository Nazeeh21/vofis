import React from 'react';
import { DashboardAnalyticsItem } from '../../sharedTypes/dashboardAnalytics';

const Index: React.FC<DashboardAnalyticsItem> = ({
  figure,
  changeInPercent,
  unitString,
  timeString,
  title,
  currency,
}) => {
  const isChangePositive = changeInPercent > 0;

  return (
    <div className="w-full grid grid-cols-2 px-4 items-center">
      {/* Col 1 */}
      <div className="grid grid-rows-2 gap-4">
        <div className="flex items-baseline">
          <span className="font-display text-4xl font-bold">
            {currency} {figure}
          </span>{' '}
          {unitString && (
            <span className="text-gray3 font-bold font-body">
              &nbsp;/ {unitString}
            </span>
          )}
        </div>
        <span
          style={{ textTransform: 'uppercase', letterSpacing: '0.2rem' }}
          className="font-inter font-semibold mt-2 text-gray text-xs"
        >
          {title}
        </span>
      </div>

      {/* Col 2 */}
      <div className="grid grid-rows-2 items-center">
        {/* Row 1 */}
        <span
          style={{ textTransform: 'lowercase' }}
          className="text-gray text-xs font-display text-gray-500"
        >
          {timeString}
        </span>
        {/* Row 2 */}
        <div
          style={{
            backgroundColor: `${isChangePositive ? '#87C289' : '#F8877F'}`,
            width: '5.5rem',
          }}
          className="rounded-full py-1 px-2 font-inter text-white flex items-center justify-around"
        >
          <div className="w-3 mr-1">
            <img
              className="w-full"
              src={`/Dashboard/${
                isChangePositive ? 'upwards-arrow' : 'downwards-arrow'
              }.png`}
              alt="arrow"
            />
          </div>
          <div>{Math.abs(changeInPercent).toFixed(2)}%</div>
        </div>
      </div>
    </div>
  );
};

export default Index;
