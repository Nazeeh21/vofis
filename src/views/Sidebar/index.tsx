import { useRouter } from 'next/router';
import React from 'react';
import SidebarItem from '../../components/SidebarItem';
import { SidebarProps } from '../../sharedTypes/sidebar';

const Sidebar: React.FC<SidebarProps> = ({ items }) => {
  const router = useRouter();
  const { pathname } = router;
  const parentRoute = pathname.split('/')[1];

  return (
    <div
      style={{ height: '100vh', width: '8vw' }}
      className="flex flex-col bg-white w-min px-0 py-8 my-8"
    >
      <img
        onClick={() => router.push('/')}
        src="/logo.png"
        className="w-16 cursor-pointer mx-auto mb-auto"
      />
      <div className="flex flex-col w-full gap-12">
        {items.map((item) => (
          <SidebarItem
            isActive={parentRoute === item.name}
            key={item.id}
            name={item.name}
            id={item.id}
          />
        ))}
      </div>
      <h3 className="font-display text-center text-3xl font-bold mt-auto mx-auto">
        Vof.is
      </h3>
    </div>
  );
};

export default Sidebar;
