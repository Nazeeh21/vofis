import React from 'react';
import NavigationItems from '../NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/Index';
import classes from './Toolbar.module.css';

type Props = {
  drawerToggleClicked: () => void | null;
};
const Toolbar: React.FC<Props> = ({ drawerToggleClicked }) => {
  return (
    <header className={classes.Toolbar}>
      <DrawerToggle clicked={drawerToggleClicked} />

      {/* <nav className={classes.DesktopOnly}>
        <NavigationItems />
      </nav> */}
    </header>
  );
};

export default Toolbar;
