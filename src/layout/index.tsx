import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import TextureBackground from '../components/TextureBackground';
import AppLayout from './AppLayout';
import LandingPageLayout from './LandingPageLayout';

type Props = {
  children: React.ReactNode;
};

const landingRoutes = ['/signup', '/login', '/'];

function LayoutProvider({ children }: Props): React.ReactElement {
  const router = useRouter();
  const authenticated = useSelector((state) => state.auth.authenticated);

  useEffect(() => {
    console.log('AUTH', authenticated);
  }, []);

  const { pathname } = router;

  if (landingRoutes.includes(pathname)) {
    return (
      <div className="w-full h-full">
        <TextureBackground />
        <LandingPageLayout>{children}</LandingPageLayout>
      </div>
    );
  } else {
    return (
      <>
        <AppLayout>{children}</AppLayout>
      </>
    );
  }
}

export default LayoutProvider;
