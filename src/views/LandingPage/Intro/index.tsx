import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { RoundButton } from '../../../components/RoundButton';
import { ON_SIGN_UP } from '../../../constants';
import { CHANGE_LANDING_PAGE } from '../../../store/actionTypes';

const Intro: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  return (
    <div className="z-0 grid grid-cols-1 grid-rows-2 md:grid-cols-2 md:grid-rows-1 w-full md:pl-16 md:justify-center md:items-end relative  mb-20">
      <div className="md:hidden w-full mt-10">
        <div
          style={{
            borderTopRightRadius: '1.5rem',
            borderBottomLeftRadius: '1.5rem',
            height: '45rem',
            width: '30%',
            zIndex: -1,
          }}
          className="md:hidden mt-60 bg-white absolute block left-0 h-full"
        />
        <div className="m-auto w-10/12 sm:w-8/12">
          <img
            className="w-full"
            src="/LandingPage/intro-mobile.png"
            alt="mobile-intro"
          />
        </div>
      </div>
      <div className=" px-12 sm:px-16 md:px-4 lg:px-6 xl:px-12 md:mt-24 mt-10">
        <div className="font-display font-extrabold text-6xl">Vof.is</div>
        <div
          className="md:hidden absolute left-0 mt-2"
          style={{
            // position: 'absolute',
            width: '358px',
            height: '0px',
            border: '0.5px solid #46494C',
            // marginLeft: '-3.7rem',
          }}
        />
        <div
          style={{ color: '#BDBDBD' }}
          className="font-display font-semibold text-2xl md:mt-2 mt-6"
        >
          Online Coworking and Discovery Platform
        </div>
        <div className="font-body font-normal text-lg mt-6">
          Your personalised virtual office to make WFH with your team/
          freelancers easier than ever. We handle all the hassle, so you can
          focus on things that are important.
        </div>

        <div className="w-8/12 sm:w-6/12 md:w-6/12 lg:w-5/12 xl:w-4/12 mt-12">
          <RoundButton
            clickHandler={() => {
              dispatch({ type: CHANGE_LANDING_PAGE, value: ON_SIGN_UP });
              router.push('/signup');
            }}
            styles="text-white bg-blue md:text-blue md:bg-white rounded-full text-2xl py-2 px-4"
            label={
              <div className="flex items-center">
                Sign up
                <img
                  className="hidden md:inline-block w-10 h-4 ml-2"
                  src="/arrow-right.png"
                  alt="right-arrow"
                />
                <img
                  className="inline-block md:hidden w-10 h-4 ml-2"
                  src="/right-arrow-white.png"
                  alt="right-arrow"
                />
              </div>
            }
          ></RoundButton>
        </div>
      </div>
      <div className="hidden md:grid grid-rows-3 gap-4 lg:ml-0 xl:ml-16 -mt-6">
        <div className="flex">
          <img
            style={{ borderTopLeftRadius: '2rem' }}
            src="intro-images/intro-1.png"
            alt="intro-1"
          />
          <img className="ml-4" src="intro-images/intro-2.png" alt="intro-2" />
          <img className="ml-4" src="intro-images/intro-3.png" alt="intro-3" />
        </div>

        <div className="flex">
          <img src="intro-images/intro-4.png" alt="intro-4" />
          <img className="ml-4" src="intro-images/intro-5.png" alt="intro-5" />
          <img className="ml-4" src="intro-images/intro-6.png" alt="intro-6" />
        </div>
        <div className="flex">
          <img src="intro-images/intro-7.png" alt="intro-7" />
          <img
            style={{ marginLeft: '9.78rem' }}
            className="absolute z-20 -mt-4"
            src="intro-images/intro-8-head.png"
            alt="head"
          />
          <img
            style={{ marginLeft: '9.78rem', marginTop: '7.25rem' }}
            className="absolute z-20"
            src="intro-images/intro-8-hand.png"
            alt="hand"
          />
          <img className="ml-4" src="intro-images/intro-8.png" alt="intro-8" />
          <img className="ml-4" src="intro-images/intro-9.png" alt="intro-9" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
