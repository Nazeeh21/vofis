import React from 'react';

type Props = {
  children: React.ReactNode;
};

const TableCell: React.FC<Props> = ({ children }) => {
  return <td className="p-6">{children}</td>;
};

export default TableCell;
