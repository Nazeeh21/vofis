import React from 'react';

type Arrow = {
  clickHandler: (value?) => void | null;
  disableCursor?: boolean;
};

export const LeftArrow: React.FC<Arrow> = ({
  clickHandler,
  disableCursor = false,
}) => {
  return (
    <img
      onClick={clickHandler}
      className={`${
        disableCursor ? 'cursor-not-allowed' : 'cursor-pointer'
      } w-2 h-4`}
      src="left-arrow.png"
      alt="Left arrow"
    />
  );
};

export const RightArrow: React.FC<Arrow> = ({
  clickHandler,
  disableCursor = false,
}) => {
  return (
    <img
      onClick={clickHandler}
      className={`${
        disableCursor ? 'cursor-not-allowed' : 'cursor-pointer'
      } w-2 h-4`}
      src="right-arrow.png"
      alt="Right arrow"
    />
  );
};
