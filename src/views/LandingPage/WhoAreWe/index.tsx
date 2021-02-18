import React from 'react';
import { RoundButton } from '../../../components/RoundButton';

const WhoAreWe: React.FC = () => {
  return (
    <div
      id="about-us"
      style={{ borderTopRightRadius: '3rem', borderBottomRightRadius: '3rem' }}
      className="bg-white md:mb-0 mt-12 md:mt-56 xl:mt-44 md:px-6 lg:px-10 xl:px-16 flex flex-col md:flex-row pt-6 pb-12 w-full"
    >
      <div className="block pl-10 md:hidden mb-32">
        <div className="font-inter font-medium text-sm">ABOUT US</div>
        <div className="font-display font-semibold text-5xl">Who are we</div>
        <div
          style={{
            // position: 'absolute',
            width: '80%',
            height: '0px',
            border: '0.1px solid #46494C',
            // marginTop: '65%',
          }}
          className="absolute mt-2 left-0 md:hidden"
        />
      </div>
      {/* <div
        style={{ marginLeft: '21.8vh' }}
        className="md:absolute grid grid-cols-2 mt-20"
      >
        <div
          style={{
            // position: 'absolute',
            width: '99px',
            height: '0px',
            border: '0.5px solid #FFFFFF',
            // marginTop: '5.75rem',
          }}
          className="justify-self-end"
        >
          {' '}
        </div>
        <div
          style={{
            // position: 'absolute',
            width: '358px',
            height: '0px',
            border: '0.5px solid #46494C',
            // marginLeft: '-3.7rem',
          }}
        />
      </div> */}
      <div className="w-full md:w-5/12 mx-auto md:flex">
        <img
          className="-mt-20 w-10/12 m-auto md:w-auto"
          src="/LandingPage/who-are-we.png"
          alt="Who-are-we"
        />
      </div>
      <div className="w-full mx-auto md:ml-6 lg:ml-10 md:w-7/12">
        <div className="hidden md:block font-inter font-medium text-sm">
          ABOUT US
        </div>
        <div className="hidden md:block font-display font-semibold text-5xl">
          Who are we
        </div>
        <div className="flex mt-4"></div>
        <div className="font-body text-2xl font-normal px-4 md:pl-2 lg:px-4 md:px-0 md:mt-16 md:mr-16">
          We are a small team, who stumbled upon the same problems as probably
          you did. And when we couldn’t find the solution to this problem, we
          decided to take things into out own hands. And POFF!! The Vofis was
          born- with the ultra super power- making Work from Home not feel like
          super Mario (Jumping from one website to the next)
        </div>
        {/* <div className="font-inter text-sm px-2 py-2 bg-gray-300 rounded-sm mt-4 w-24 text-center cursor-pointer">
          Contact Us
        </div> */}
        <div className="w-6/12 ml-4 md:ml-0 md:w-24">
          <RoundButton
            label="Contact Us"
            styles="font-inter text-sm bg-gray-300 p-2 rounded mt-6"
          />
        </div>
      </div>
    </div>
  );
};

export default WhoAreWe;
