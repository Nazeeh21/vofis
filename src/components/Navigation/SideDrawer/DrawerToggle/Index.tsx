import React from 'react';
import classses from './DrawerToggle.module.css';

type Props = {
  clicked: () => void | null;
};
const DrawerToggle: React.FC<Props> = ({ clicked }) => {
  return (
    <div className={classses.DrawerToggle} onClick={clicked}>
      <img src="/LandingPage/ham-burger.png" alt="ham-burger" />
    </div>
  );
};

export default DrawerToggle;
