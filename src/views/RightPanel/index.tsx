import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Index: React.FC<Props> = ({ children }) => {
  return (
    <div
      style={{ height: '80vh', borderTopLeftRadius: '30px' }}
      className="bg-white py-8 px-12 w-2/12 absolute bottom-0 right-0 mt-auto"
    >
      {children}
    </div>
  );
};

export default Index;
