import { useRouter } from 'next/router';
import React from 'react';
import ContractsRightComponents from './ContractsRightComponents';
import DashboardRightComponent from './DashboardRightComponent';
import ExploreRightComponents from './ExploreRightComponents';
import NewsPanelRightComp from './NewsPanelRightComp';
import PaymentsRightComponent from './PaymentsRightComponent';

const dashboardRightCompItems = [
  {
    src: '/dashboardRightComp/folder.png',
    alt: 'folder',
    label: 'Vofis',
  },
  {
    src: '/dashboardRightComp/folder.png',
    alt: 'folder',
    label: 'OCG',
  },
  {
    src: '/dashboardRightComp/files.png',
    alt: 'files',
    label: 'Elephant house',
  },
  {
    src: '/dashboardRightComp/folder.png',
    alt: 'folder',
    label: 'Creatives',
  },
  {
    src: '/dashboardRightComp/files.png',
    alt: 'files',
    label: 'Pencil Pros',
  },
];

const newsPanelRightCompItems = [
  { label: 'Design' },
  { label: 'Art' },
  { label: 'Fashion' },
  { label: 'Illustrations' },
];

const RightPanelComponents: React.FC = () => {
  const router = useRouter();
  const { pathname } = router;
  const parentRoute = pathname.split('/')[1];

  if (parentRoute === 'dashboard') {
    return (
      <div className="w-full">
        <DashboardRightComponent items={dashboardRightCompItems} />
      </div>
    );
  }

  if (parentRoute === 'news') {
    return (
      <div className="w-full">
        <NewsPanelRightComp items={newsPanelRightCompItems} />
      </div>
    );
  }

  if (parentRoute === 'explore') {
    return (
      <div className="w-full">
        <ExploreRightComponents />
      </div>
    );
  }

  if (parentRoute === 'contracts') {
    return <ContractsRightComponents />;
  }

  if (parentRoute === 'payments') {
    return <PaymentsRightComponent />;
  }

  return <div className="w-full"></div>;
};

export default RightPanelComponents;
