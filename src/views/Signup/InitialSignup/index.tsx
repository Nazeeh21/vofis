import React from 'react';
import {
  FormElement,
  ResourceOrBusiness,
  TitleDiv,
} from '../../../components/LoginAndSignUpComponents';
import { RoundButton } from '../../../components/RoundButton';

export const InitialSignUpLeftContent: React.FC = () => {
  return (
    <div className="">
      <TitleDiv title="Discover" subTitle="NEW PROJECTS" />
      <TitleDiv title="Detail" subTitle="CONTRACTS" />
      <TitleDiv title="Develop" subTitle="ON PROJECTS TOGETHER" />
      <TitleDiv title="Deliver" subTitle="PROJECTS ON TIME" />
    </div>
  );
};

type RightContentProps = {
  name: string;
  onNameChange: (value: string) => void;
  email: string;
  onEmailChange: (value: string) => void;
  industry: string;
  onIndustryChange: (value: string) => void;
  businessOrResource: string | null;
  onBusinessOrResourceChange: (value: string) => void;
  nextButtonClicked: () => void;
};

export const InitialSignUpRightContent: React.FC<RightContentProps> = ({
  name,
  onNameChange,
  email,
  onEmailChange,
  industry,
  onIndustryChange,
  businessOrResource,
  onBusinessOrResourceChange,
  nextButtonClicked,
}) => {
  return (
    <div className="">
      <div className="text-5xl text-gray-700 font-semibold font-display mb-6">
        Sign up
      </div>
      <div className={`${name !== '' && '-mt-6'}`}>
        <FormElement
          label="Name"
          value={name}
          onChange={onNameChange}
          placeHolder="Name"
        />
      </div>
      <div className={`${email !== '' && '-mt-6'}`}>
        <FormElement
          label="Email address"
          value={email}
          onChange={onEmailChange}
          placeHolder="Email address"
        />
      </div>

      <div className="mt-8">
        <select
          value={industry}
          onChange={(e) => onIndustryChange(e.target.value)}
          className="w-full font-bold border-t-0 border-r-0 border-l-0 border-gray-700 focus:border-blue border-b-4 outline-none text-2xl text-gray-400 font-body"
        >
          <option label="Industry" />
        </select>
      </div>
      <div className="text-xl text-gray-700 font-semibold font-display mt-8">
        You are a
      </div>
      <div className="flex items-center -mt-4 justify-center gap-16 md:gap-8 lg:gap-16 h-52">
        <div
          className="text-center"
          onClick={() => onBusinessOrResourceChange('resource')}
        >
          <ResourceOrBusiness
            src={`${
              businessOrResource === null
                ? '/Signup/resource.png'
                : businessOrResource === 'resource'
                ? '/Signup/white-resource.png'
                : '/Signup/resource.png'
            }`}
            alt="Resource"
            imageStyle={`${
              businessOrResource === 'resource'
                ? 'bg-gray-700 rounded-full lg:w-auto md:w-32'
                : 'w-28 bg-white md:bg-gray-200 mt-4'
            }`}
          />
        </div>
        <div
          className="text-center"
          onClick={() => onBusinessOrResourceChange('business')}
        >
          <ResourceOrBusiness
            src={`${
              businessOrResource === null
                ? '/Signup/business.png'
                : businessOrResource === 'business'
                ? '/Signup/selected-business.png'
                : '/Signup/business.png'
            }`}
            // src="/Signup/business.png"
            alt="Business"
            imageStyle={`${
              businessOrResource === 'business'
                ? 'bg-gray-700 lg:w-auto md:w-32'
                : 'w-28 bg-white md:bg-gray-200 mt-4'
            }`}
          />
        </div>
      </div>
      <div className="flex items-center justify-center gap-28 -mt-10">
        <div className="font-body font-semibold text-lg mt-2">Resource</div>
        <div className="font-body font-semibold text-lg mt-2">Business</div>
      </div>
      <div className="w-10/12 md:w-5/12 lg:w-4/12 xl:w-3/12 m-auto mt-10">
        <RoundButton
          label="Next"
          clickHandler={nextButtonClicked}
          styles="bg-blue text-white text-xl font-medium font-display px-4 py-2 rounded"
        />
      </div>
    </div>
  );
};
