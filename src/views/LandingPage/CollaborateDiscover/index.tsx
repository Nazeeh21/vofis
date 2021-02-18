import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { useDispatch } from 'react-redux';
import { RoundButton } from '../../../components/RoundButton';
import { CHANGE_NEXT_BUTTON_STATUS } from '../../../store/actionTypes';

const CollaborateDiscover: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  return (
    <div className=" md:mb-0 md:mt-0 text-center w-full bg-white pt-8 md:pt-20 md:pb-14">
      <div className="font-display text-5xl font-semibold text-gray-700">
        Collaborate, Discover, and WFH
      </div>
      <div className="font-inter text-sm font-semibold mt-4">
        WE&apos;LL HANDLE THE ICKY PARTS{' '}
      </div>
      {/* <div className="m-auto w-60 bg-gray-300 rounded-full py-2 text-2xl text-blue mt-10 cursor-pointer">
        Join us Now
      </div> */}
      <div className="w-60 m-auto mt-10">
        <RoundButton
          clickHandler={() => {
            dispatch({ type: CHANGE_NEXT_BUTTON_STATUS, value: false });
            router.push('/signup');
          }}
          label="Join us Now"
          styles="text-blue bg-gray-300 rounded-full py-2 text-2xl"
        />
      </div>
      <div className=" bg-blue w-full h-2 mb-14 mt-10 block md:hidden" />
    </div>
  );
};

export default CollaborateDiscover;
