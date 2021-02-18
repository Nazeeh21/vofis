import React from 'react';
import { ItemProps } from '../../sharedTypes/appTopMenu';

const AppTopMenuItem: React.FC<ItemProps> = ({
  index,
  icon,
  isActive,
  show,
  setShow,
  setActive,
  id,
  setShowPanel,
}) => {
  const bgColor = isActive && show ? 'blue' : 'white';

  const clickHandler: () => void = () => {
    if (!isActive) {
      setShow(true);
    } else {
      setShow((show) => !show);
    }
    setShowPanel(index);
    setActive(id);
  };

  return (
    <div
      onClick={clickHandler}
      className={`${
        show && ((index === 0 && isActive) || (index === 2 && isActive))
          ? 'rounded-r-full'
          : 'rounded-full'
      } bg-${bgColor} w-12 h-12 p-0 cursor-pointer flex items-center`}
    >
      <img src={icon} alt={icon} className="h-6 mx-auto my-0" />
    </div>
  );
};

export default AppTopMenuItem;
