import React from 'react';

type Props = {
  color?: string;
  children?: React.ReactNode;
  styles?: string;
};

const HorizontalDivider: React.FC<Props> = ({
  color = 'white',
  styles = '',
}) => {
  return <hr className={`w-full border-${color} border-1 ${styles}`} />;
};

export default HorizontalDivider;
