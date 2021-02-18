import React from 'react';
// import NavigationItem from './NavigationItem/Index'
import classes from './NavigationItems.module.css';

const NavigationItems: React.FC = () => {
  return (
    <ul className={classes.NavigationItems}>
      Home
      {/* <NavigationItem link="/" exact>
        <img src="/logos/blue.svg" alt="VideoWork" />
      </NavigationItem> */}
    </ul>
  );
};

export default NavigationItems;
