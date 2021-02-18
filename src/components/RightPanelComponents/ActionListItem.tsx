import React from 'react';

type ActionListItemProps = {
  label: string;
};

const ActionListItem: React.FC<ActionListItemProps> = ({ label }) => {
  return <div className="font-body font-normal cursor-pointer">{label}</div>;
};

export default ActionListItem;
