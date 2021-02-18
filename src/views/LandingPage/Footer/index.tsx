import React from 'react';

const LandingPageFooter: React.FC = () => {
  return (
    <div className="w-full">
      <div style={{ marginTop: '11%', zIndex: -1 }} className="absolute">
        <img src="/quarter-gray-dots.png" alt="Gray dots" />
      </div>
      <div className="bg-blue h-4 w-full" />
      <div className="flex pt-12 pb-10 pl-20 items-center">
        <div className="flex items-center  w-8/12">
          <img
            className="w-32 cursor-pointer"
            src="/logo-2.png"
            alt="Vofis logo"
            onClick={() => window.scrollTo(0, 0)}
          />
          <div className="ml-10">
            <div className="font-display text-8xl">Vof.is</div>
            <div style={{ color: '#BDBDBD' }} className="font-display text-3xl">
              Online Coworking and Discovery Platform
            </div>
          </div>
        </div>
        {/* <div className='w-1/12'> */}
        <div
          style={{
            width: '0px',
            height: '198px',
            border: '0.125px solid #46494C',
          }}
          className="ml-64"
        />
        {/* </div> */}
        <div className="w-4/12 ml-32 font-body font-semibold">
          <div className="mt-2">FAQs</div>
          <div className="mt-2">Contact us</div>
          <div className="mt-2">Terms and Conditions</div>
          <div className="mt-2">Copyright 2020</div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageFooter;
