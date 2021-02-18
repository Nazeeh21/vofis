import React from 'react';

type Props = {
  labels: string[];
  children: React.ReactNode;
  styles?: string;
};

const Table: React.FC<Props> = ({ labels, children, styles }) => {
  return (
    <table
      style={{ borderSpacing: '0 2rem' }}
      className={`w-full font-body border-separate ${styles}`}
    >
      <thead>
        {labels.map((label, idx) => (
          <th className="text-gray3 font-light" key={idx}>
            {label}
          </th>
        ))}
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
};

export default Table;
