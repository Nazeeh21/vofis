import React from 'react';
import HorizontalDivider from '../../HorizontalDivider';

type AccordionProps = {
  label: string;
  isLast?: boolean;
};

const Accordion: React.FC<AccordionProps> = ({ label, isLast = false }) => {
  return (
    <div className="w-full mb-6">
      <div className="flex items-center mb-6">
        <span>{label}</span>
        <img
          className="ml-auto h-4 cursor-pointer"
          src="/icons/down-arrow.svg"
        />
      </div>
      {!isLast && <HorizontalDivider color="gray-300" />}
    </div>
  );
};

const filters: AccordionProps[] = [
  {
    label: 'Due Payment',
  },
  {
    label: 'Balance Amount',
  },
  {
    label: 'Date',
  },
  {
    label: 'Company',
    isLast: true,
  },
];

const PaymentsRightComponent: React.FC = () => {
  return (
    <div className="w-full text-left font-body">
      <p className="font-bold mb-8">Quick filters</p>
      {filters.map(({ label, isLast }, idx) => (
        <Accordion label={label} isLast={isLast} key={idx} />
      ))}
    </div>
  );
};

export default PaymentsRightComponent;
