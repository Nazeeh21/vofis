import React from 'react';
import TopNavBar from '../../views/TopNavbar';

type Props = {
  children: React.ReactNode;
};

function LandingPageLayout({ children }: Props): React.ReactElement {
  return (
    <div style={{ height: '100vh' }} className="w-full">
      <TopNavBar />
      {children}
    </div>
  );
}

export default LandingPageLayout;
