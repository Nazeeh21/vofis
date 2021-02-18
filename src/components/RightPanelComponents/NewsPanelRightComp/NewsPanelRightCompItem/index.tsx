import React from 'react';
import { NewsPanelRightComponentItemProps } from '../../../../sharedTypes/RightComponentTypes';

const NewsPanelRightCompItem: React.FC<NewsPanelRightComponentItemProps> = ({
  label,
}) => {
  return (
    <div className="font-body font-medium cursor-pointer mb-4">{label}</div>
  );
};

export default NewsPanelRightCompItem;
