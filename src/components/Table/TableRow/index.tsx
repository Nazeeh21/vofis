import React from 'react';

type Props = {
  children: React.ReactNode;
};

const TableRow: React.FC<Props> = ({ children }) => {
  return <tr className="w-full bg-white">{children}</tr>;
};

export default TableRow;
