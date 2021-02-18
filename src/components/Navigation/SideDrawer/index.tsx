import React from 'react';
import BackDrop from '../../Backdrop';
import classes from './SideDrawer.module.css';

type Props = {
  open: boolean;
  closed: () => void | null;
  children: React.ReactNode;
};

const SideDrawer: React.FC<Props> = ({ open, closed, children }) => {
  let attachedClasses = [classes.SideDrawer, classes.Close];

  if (open) {
    attachedClasses = [classes.SideDrawer, classes.Open];
  }

  return (
    <React.Fragment>
      <BackDrop show={open} clicked={closed} />
      <div className={attachedClasses.join(' ')}>
        <div style={{ height: '100vh' }} className="w-full ">
          {children}
        </div>
        {/* <div className={classes.Logo}>
          <img src="/logos/blue.svg" alt="Videowork" />
        </div> */}
        {/* <nav>
          <NavigationItems />
        </nav> */}
        <div className="mt-2"></div>
      </div>
    </React.Fragment>
  );
};

export default SideDrawer;
