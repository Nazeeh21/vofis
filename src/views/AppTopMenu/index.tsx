import React, { useState } from 'react';
import { MenuProps } from '../../sharedTypes/appTopMenu';
import AppTopMenuItem from '../../components/AppTopMenuItem';
import OutsideDetector from '../../hooks/OutsideDetector';
import PaymentNotifications from '../../components/PaymentNotifications';
import { PaymentNotificationItemProps } from '../../sharedTypes/PaymentNotificationTypes';
import NotificationPanel from '../../components/NotificationPanel';

const AppTopMenu: React.FC<MenuProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState(1);
  const [show, setShow] = useState(false);
  const [showPanels, setShowPanels] = useState([false, false]);

  const onClickOustide = () => {
    setShow(false);
    setShowPanels([false, false]);
  };

  const PaymentNotificationItems: PaymentNotificationItemProps[] = [
    {
      src: '/Dashboard/dollar-sign-green.png',
      description: '3400 deposited for completion of Phase 1',
    },
    {
      src: '/Dashboard/dollar-sign-red.png',
      description: 'Security Deposits for Working Elephant',
    },
    {
      src: '/Dashboard/dollar-sign-red.png',
      description: '3400 deposited for completion of Phase 1',
    },
    {
      src: '/Dashboard/dollar-sign-green.png',
      description: '3400 deposited for completion of Phase 1',
    },
    {
      src: '/Dashboard/dollar-sign-green.png',
      description: '3400 deposited for completion of Phase 1',
    },
    {
      src: '/Dashboard/dollar-sign-red.png',
      description: 'Security Deposits for Working Elephant',
    },
  ];

  const Panels: React.FC<{ index: number }> = ({ index }) => {
    if (index === 0) {
      return (
        <div className="absolute z-50 -ml-64 w-64 mt-0">
          {showPanels[0] && (
            <PaymentNotifications items={PaymentNotificationItems} />
          )}
        </div>
      );
    } else if (index === 3) {
      return (
        <div
          style={{ marginLeft: '-24rem', width: '20rem' }}
          className="absolute z-50 w-64 -ml-64 mt-0"
        >
          {showPanels[1] && <NotificationPanel />}
        </div>
      );
    } else {
      return null;
    }
  };

  return (
    <OutsideDetector
      styles="flex gap-4 items-center ml-auto"
      onDetected={onClickOustide}
    >
      {items.map((item, idx) => (
        <div key={idx}>
          <div className="">
            <Panels index={idx} />
          </div>
          <AppTopMenuItem
            index={idx}
            id={item.id}
            isActive={item.id === activeItem}
            setActive={setActiveItem}
            icon={item.icon}
            show={show}
            setShowPanel={(idx) => {
              if (idx === 0 || idx === 2) {
                const newShowPanels = [false, false];
                if (idx === 0) {
                  newShowPanels[idx] = !showPanels[idx];
                } else {
                  newShowPanels[1] = !showPanels[1];
                }
                setShowPanels(newShowPanels);
                // if(idx === 0) {
                //   setShowPanels([true, false])
                // } else if(idx === 2) {
                //   setShowPanels([false, true])
                // }
              }
            }}
            setShow={setShow}
          />
        </div>
      ))}
    </OutsideDetector>
  );
};

export default AppTopMenu;
