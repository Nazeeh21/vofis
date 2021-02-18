import React from 'react';

type Props = {
  label: string | JSX.Element;
  styles: string;
  clickHandler?: () => void | null;
};

export const RoundButton: React.FC<Props> = ({
  label,
  styles,
  clickHandler,
}) => {
  const buttonStyles =
    ' items-center w-full justify-center cursor-pointer flex';
  return (
    <div onClick={clickHandler} className={`${buttonStyles} ${styles}`}>
      {label}
    </div>
  );
};

type ApplyButtonProps = {
  label?: string;
};

export const ApplyButton: React.FC<ApplyButtonProps> = ({
  label = 'Apply',
}) => {
  return (
    <div className="cursor-pointer bg-white border-gray-500 border-2 rounded px-4 py-2 text-gray-700 font-display font-semibold text-md">
      {label}
    </div>
  );
};
