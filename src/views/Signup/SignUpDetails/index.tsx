import { useRouter } from 'next/router';
import React from 'react';
import {
  FormElement,
  ProfileDetails,
} from '../../../components/LoginAndSignUpComponents';
import { RoundButton } from '../../../components/RoundButton';
import { googleProvider, signInWithPopup } from '../../../services/firebase';
import {
  CHANGE_ADD_MORE_DETAILS_PAGE_STATUS,
  CHANGE_NEXT_BUTTON_STATUS,
  LOGIN,
} from '../../../store/actionTypes';
import { useDispatch, useSelector } from 'react-redux';

export const SignUpDetailsLeftContent: React.FC = () => {
  return (
    <div>
      <div className="text-white text-8xl font-bold font-display">
        <div>Almost</div>
        <div className="mt-2">done!</div>
      </div>
      <div className="font-inter text-gray-700 font-medium mt-6 text-sm">
        <div>PROTIP: FOR BETTER REACH ADD</div>
        <div>PROFILE PHOTO AND PORTFOLIO</div>
        <div>LINK</div>
      </div>
    </div>
  );
};

type RightContentProps = {
  portfolio: string;
  onPortfolioChanged: (value: string) => void;
  phoneNumber: string;
  onPhoneNumberChanged: (value: string) => void;
  description: string;
  onDescriptionChanged: (value: string) => void;
  businessOrResource: string;
  website: string;
  onWebsiteChanged: (value: string) => void;
  companySize: string;
  onCompanySizeChanged: (value: string) => void;
};

export const SignUpDetailsRightContent: React.FC<RightContentProps> = ({
  portfolio,
  onPortfolioChanged,
  phoneNumber,
  onPhoneNumberChanged,
  description,
  onDescriptionChanged,
  businessOrResource,
  website,
  onWebsiteChanged,
  companySize,
  onCompanySizeChanged,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const nextButtonClicked = useSelector(
    (state) => state.app.nextButtonOnSignUpClicked
  );

  const handleSignup = async () => {
    if (businessOrResource === 'resource') {
      const result = await signInWithPopup(googleProvider());

      if (!result) {
        return alert('An error occured while trying to sign you in.');
      }

      const { token } = result;

      dispatch({ type: LOGIN, token });

      router.push('/dashboard');
    } else {
      dispatch({ type: CHANGE_ADD_MORE_DETAILS_PAGE_STATUS, value: true });
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        {router.pathname !== '/' && (
          <img
            className="md:hidden cursor-pointer"
            onClick={() => {
              if (nextButtonClicked) {
                dispatch({ type: CHANGE_NEXT_BUTTON_STATUS, value: false });
                // router.reload();
              } else {
                router.push('/');
              }
            }}
            src="/LandingPage/AppTopNavArrow.png"
            alt="Left Arrow"
          />
        )}
        {businessOrResource === 'business' ? (
          <div className="font-display font=semibold text-gray-600 text-sm">
            STEP 2/3
          </div>
        ) : (
          <div className="font-display font=semibold text-gray-600 text-sm">
            STEP 2/2
          </div>
        )}
      </div>

      <div className="text-4xl text-gray-700 font-semibold font-display mb-6">
        Just a few more things
      </div>
      <div className="flex xs:gap-4 md:gap-4 lg:gap-6 xl:gap-8">
        <div className="mr-2 mt-6 sm:mt-0 md:mr-0">
          <img
            className="absolute w-24 rounded-full h-auto md:hidden"
            src="/Signup/add-white.png"
            alt="change-profile-pic"
          />
          <img
            className="w-40"
            src={`${
              businessOrResource === 'resource'
                ? '/LandingPage/carousel.png'
                : '/Signup/company-logo.png'
            }`}
            alt="Profile Pic"
          />

          <div className="md:flex hidden  items-center w-full justify-around mt-2">
            <img
              className="md:w-5 lg:w-6 lg:h-6 h-auto xl:w-auto cursor-pointer"
              src="/Signup/pencil.png"
              alt="pencil"
            />
            <div className="font-body lg:w-32 xl:w-auto ml-2">
              {businessOrResource === 'resource' ? (
                <div>Profile photo</div>
              ) : (
                <div>Company logo</div>
              )}
            </div>
          </div>
        </div>
        <div className="pt-4">
          <ProfileDetails src="/Signup/user.png" alt="user" text="Jonny Kyle" />
          <ProfileDetails
            src="/Signup/mail.png"
            alt="mail"
            text="jonnykyle@gmail.com"
          />
          <ProfileDetails
            src="/Signup/briefcase.png"
            alt="briefcase"
            text="Design"
          />
        </div>
      </div>
      {businessOrResource === 'resource' ? (
        <div className={`${portfolio !== '' && '-mt-6'}`}>
          <FormElement
            label="Portfolio"
            value={portfolio}
            onChange={(value) => onPortfolioChanged(value)}
            placeHolder="Portfolio"
          />{' '}
        </div>
      ) : (
        <div className={`${website !== '' && '-mt-6'}`}>
          <FormElement
            label="Website"
            value={website}
            onChange={(value) => onWebsiteChanged(value)}
            placeHolder="Website"
          />{' '}
        </div>
      )}
      {businessOrResource === 'resource' ? (
        <div className={`${phoneNumber !== '' && '-mt-6'}`}>
          <FormElement
            label="Phone number"
            value={phoneNumber}
            type="number"
            onChange={(value) => onPhoneNumberChanged(value)}
            placeHolder="Phone number"
          />{' '}
        </div>
      ) : (
        <div className="mt-8">
          <div className="font-semibold text-gray-400 font-display">
            Company Size
          </div>
          <select
            value={companySize}
            onChange={(e) => onCompanySizeChanged(e.target.value)}
            placeholder="Company Size"
            className="w-full border-t-0 border-r-0 border-l-0 border-gray-700 focus:border-blue border-b-4 outline-none text-2xl text-gray-400 font-body"
          >
            {/* <option label="Your Company Size" /> */}
            <option label="1" value="1" />
            <option label="2" value="2" />
            <option label="3" value="3" />
          </select>
        </div>
      )}
      <div className={`${description !== '' && '-mt-6'}`}>
        <FormElement
          label="Description"
          value={description}
          onChange={(value) => onDescriptionChanged(value)}
          placeHolder="Description"
        />{' '}
      </div>
      <div className="w-10/12 md:w-5/12 lg:w-4/12 xl:w-3/12 m-auto mt-10">
        <RoundButton
          label="Sign up"
          // clickHandler={() => {
          //   router.push('/dashboard');
          // }}
          clickHandler={handleSignup}
          styles="bg-blue text-white text-xl font-medium font-display px-4 py-2 rounded"
        />
      </div>
    </div>
  );
};
