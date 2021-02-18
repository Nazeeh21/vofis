import { useRouter } from 'next/router';
import React from 'react';
import HorizontalDivider from '../../components/HorizontalDivider';

const InfoItem = () => {
  return (
    <div className="flex flex-col my-8 font-body w-10/12">
      <div className="text-xl font-semibold">Deliverables</div>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur.
      </div>
    </div>
  );
};

const Contract: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-center w-full gap-6">
        <img
          onClick={() => router.back()}
          className="w-4 cursor-pointer"
          src="/icons/left-arrow.svg"
        />
        <h3 className="font-body font-semibold text-xl">Elephant House</h3>
      </div>

      <div className="flex font-display tracking-widest mt-8 text-sm text-gray3">
        <div>CONTRACTEE</div>
        <div className="ml-auto">CONTRACT</div>
      </div>

      <div className="flex font-body">
        <div className="text-2xl font-semibold">Samuel Spencer</div>
        <div className="ml-auto text-2xl font-semibold">Elephant House</div>
      </div>

      <div className="grid grid-cols-2 mt-8 font-body">
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </div>

        <div className="justify-self-end text-blue flex flex-col text-right mt-auto">
          <span className="text-2xl font-bold font-display">6 months</span>
          <span className="uppercase tracking-widest font-semibold">
            12 December 2020
          </span>
        </div>
      </div>

      <HorizontalDivider styles="my-8" />

      <InfoItem />
      <InfoItem />
      <InfoItem />
      <InfoItem />
    </>
  );
};

export default Contract;
