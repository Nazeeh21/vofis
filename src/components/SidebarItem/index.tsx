import { useRouter } from 'next/router';
import React from 'react';
import { SidebarItemProps } from '../../sharedTypes/sidebar';

const sidebarIconsBasePath = '/icons/sidebar';

const iconSize = 9;

const SidebarItem: React.FC<SidebarItemProps> = ({ name, isActive }) => {
  const router = useRouter();

  const clickHandler = () => {
    router.push(`/${name}`);
  };

  if (!isActive) {
    return (
      <img
        onClick={clickHandler}
        src={`${sidebarIconsBasePath}/${name}_black.svg`}
        className={`h-${iconSize} cursor-pointer`}
      />
    );
  }

  if (isActive) {
    return (
      <div className="rounded-full bg-blue w-28 ml-8 p-3">
        <img
          onClick={clickHandler}
          src={`${sidebarIconsBasePath}/${name}_white.svg`}
          className={`h-${iconSize} cursor-pointer m-auto`}
        />
      </div>
    );
  }
};

export default SidebarItem;
