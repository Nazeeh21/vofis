import React from 'react';

const Searchbar: React.FC = () => {
  return (
    <div className="bg-white flex p-4 gap-8 justify-self-start w-full">
      <img src="/icons/search.svg" />
      <input
        type="text"
        className="bg-white font-body text-gray3 w-full"
        placeholder="Search anything..."
      />
    </div>
  );
};

export default Searchbar;
