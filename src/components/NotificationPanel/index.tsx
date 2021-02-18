import React from 'react';
import ProjectUpdatesItems from '../ProjectUpdatesItems';
import { ProjectUpdateData } from '../sharedData';

const NotificationPanel: React.FC = () => {
  return (
    <div
      style={{ height: '24rem' }}
      className="h-64 bg-white p-4 rounded-l-3xl shadow-lg overflow-y-auto"
    >
      <div className="font-body text-blue font-semibold text-xl border-gray3 border-b-2 p-3">
        Notifications
      </div>
      <div className="p-2 pt-4">
        {/* {ProjectUpdateData.map((item, index) => <ProjectUpdatesItems key={index} items={item} style='grid-row' />)} */}
        <ProjectUpdatesItems
          items={ProjectUpdateData[0]}
          style="grid-cols-1 grid gap-6 w-11/12"
          outerDivWidth="17rem"
        />
      </div>
    </div>
  );
};

export default NotificationPanel;
