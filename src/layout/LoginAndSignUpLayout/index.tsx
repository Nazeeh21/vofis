import { useRouter } from 'next/router';
import React from 'react';

type Props = {
  leftContent: React.ReactNode;
  imageSrc: string;
  imageLeftMargin: string;
  children: React.ReactNode;
};

const LoginAndSignUpLayout: React.FC<Props> = ({
  leftContent,
  imageSrc,
  imageLeftMargin,
  children,
}) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <div className="w-full">
      <div
        style={{ marginLeft: '40%', zIndex: -2 }}
        className="hidden md:inline-block absolute -mt-8"
      >
        <img src="/gray-dots.png" alt="Gray dots" />
        <img src="/gray-dots.png" alt="Gray dots" />
      </div>
      <div
        style={{ zIndex: -2 }}
        className="hidden md:inline-block absolute bottom-0 left-0 -mt-8"
      >
        <img src="/gray-dots.png" alt="Gray dots" />
      </div>
      <div className="w-full h-full md:grid md:grid-cols-2">
        <div className="hidden md:inline-block md:px-10 lg:px-20">
          {leftContent}
        </div>
        <div className="px-5 md:px-10 lg:mx-16 xl:mx-20 z-20 relative">
          <div className="z-50 relative pb-10 ">{children}</div>
        </div>
      </div>
      <div
        className={`hidden md:inline-block ${
          pathname === '/login' && 'md:ml-28 lg:ml-24 md:w-6/12'
        } ${
          pathname === '/signup' && 'md:w-6/12 md:ml-16 lg:ml-20'
        } xl:ml-0 md:fixed bottom-0 w-auto xl:w-full z-0`}
      >
        <img
          style={{ marginLeft: imageLeftMargin }}
          src={imageSrc}
          alt="bottom image"
        />
      </div>
    </div>
  );
};

export default LoginAndSignUpLayout;
