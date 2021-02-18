import { useRouter } from 'next/router';
import React from 'react';
import CollaborateDiscover from './CollaborateDiscover';
import LandingPageFooter from './Footer';
import Intro from './Intro';
import WhatPeopleSay from './WhatPeopleSay';
import WhatWeDo from './WhatWeDo';
import WhoAreWe from './WhoAreWe';

const LandingPage: React.FC = () => {
  const router = useRouter();
  const currentpath = router.pathname;
  return (
    <div className="font-display font-bold w-full">
      <Intro />
      <WhatWeDo />
      <WhoAreWe />
      <WhatPeopleSay />
      <CollaborateDiscover />
      {currentpath === '/' && (
        <div className="hidden md:block">
          <LandingPageFooter />
        </div>
      )}
    </div>
  );
};

export default LandingPage;
