import React from 'react';

const QuickActionItem: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div className="flex justify-between items-center">
      <div className="font-body font-medium cursor-pointer mb-4">{label}</div>
      <div className="cursor-pointer">
        <img src="/down-arrow.png" alt="down arrow" />
      </div>
    </div>
  );
};

export default QuickActionItem;
