import React from 'react';
import Searchbar from '../../components/Searchbar';
import TextureBackground from '../../components/TextureBackground';
import AppTopMenu from '../../views/AppTopMenu';
import Sidebar from '../../views/Sidebar';
import { sidebarItems, topMenuItems } from '../../config/constants';
import RightPanel from '../../views/RightPanel';
import RightPanelComponents from '../../components/RightPanelComponents/index';
import { useRouter } from 'next/router';

type Props = {
  children: React.ReactNode;
};

const AppLayout: React.FC = ({ children }: Props) => {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <TextureBackground />
      <div style={{ maxHeight: '100vh' }} className="flex gap-4 w-full">
        <Sidebar items={sidebarItems} />
        <div
          style={{ height: '93vh', marginTop: '7vh', width: '92.5%' }}
          className="flex flex-col  items-center"
        >
          <div className="flex w-full px-4">
            {pathname === '/dashboard' && (
              <div className="flex font-display font-bold items-center text-5xl w-7/12">
                <div className="text-gray3 opacity-50 mr-3">Good morning,</div>
                <div className="text-gray-700">Jonny</div>
              </div>
            )}
            <div
              className={`${
                pathname === '/dashboard' ? 'w-3/12 mr-6' : 'w-8/12'
              }`}
            >
              <Searchbar />
            </div>
            <AppTopMenu items={topMenuItems} />
          </div>
          <div className="flex w-full mx-auto">
            <div
              style={{
                marginTop: '5vh',
                overflowY: 'scroll',
                maxHeight: '80vh',
                width: '77%',
              }}
              className="py-5 px-6 w-9/12"
            >
              {children}
            </div>
            <RightPanel>
              <RightPanelComponents />
            </RightPanel>
          </div>
        </div>
      </div>
    </>
  );
};

export default AppLayout;
