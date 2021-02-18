import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import React from 'react';
import {
  CHANGE_ADD_MORE_DETAILS_PAGE_STATUS,
  CHANGE_NEXT_BUTTON_STATUS,
  LOGIN,
} from '../../../store/actionTypes';
import {
  FormElement,
  TeamMemberDetails,
} from '../../../components/LoginAndSignUpComponents';
import { RoundButton } from '../../../components/RoundButton';
import { googleProvider, signInWithPopup } from '../../../services/firebase';

type AddTeamMembersPageRightContentProps = {
  adminName: string;
  onAdminNameChange: (value: string) => void | null;
  email: string;
  onEmailChange: (value: string) => void | null;
  mobileNumber: string;
  onMobileNumberChange: (value: string) => void | null;
};
export const AddTeamMembersPageLeftContent: React.FC = () => {
  return (
    <div className="w-full">
      <div>
        <div className="text-white text-6xl lg:text-7xl xl:text-8xl font-bold font-display">
          <div>Lets set up</div>
          <div className="mt-2">your</div>
          <div className="mt-2">virtual</div>
          <div className="mt-2">office</div>
        </div>
        <div className="font-inter text-gray-700 font-medium mt-6 text-sm">
          <div>PROTIP: ADD ALL YOUR TEAM</div>
          <div>MEMBERS</div>
        </div>
      </div>
    </div>
  );
};

export const AddTeamMembersPageRightContent: React.FC<AddTeamMembersPageRightContentProps> = ({
  adminName,
  onAdminNameChange,
  email,
  onEmailChange,
  mobileNumber,
  onMobileNumberChange,
}) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleSignup = async () => {
    const result = await signInWithPopup(googleProvider());

    if (!result) {
      return alert('An error occured while trying to sign you in.');
    }

    const { token } = result;

    dispatch({ type: LOGIN, token });

    router.push('/dashboard');
  };

  return (
    <div className="w-full sm:px-4 md:px-0">
      <div className="flex justify-between">
        {router.pathname !== '/' && (
          <img
            className="md:hidden cursor-pointer"
            onClick={() => {
              dispatch({
                type: CHANGE_ADD_MORE_DETAILS_PAGE_STATUS,
                value: false,
              });
              dispatch({ type: CHANGE_NEXT_BUTTON_STATUS, value: false });
            }}
            src="/LandingPage/AppTopNavArrow.png"
            alt="Left Arrow"
          />
        )}
        <div className="font-display font=semibold text-gray-600 text-sm">
          STEP 3/3
        </div>
      </div>
      <div className="text-4xl text-gray-700 font-semibold font-display">
        Just a few more things
      </div>
      <div className="flex items-center xs:gap-4 md:gap-4 lg:gap-6 xl:gap-8">
        <div>
          <img
            className="w-40 mt-10"
            src="/Signup/company-logo.png"
            alt="Profile Pic"
          />
        </div>
        <div className="pt-4 ml-2 xs:ml-4 sm:ml-6 md:ml-0">
          <FormElement
            label="Admin name"
            placeHolder="Admin name"
            value={adminName}
            onChange={(value) => {
              onAdminNameChange(value);
            }}
          />
          <FormElement
            label="Email"
            placeHolder="Email"
            value={email}
            onChange={(value) => {
              onEmailChange(value);
            }}
          />
          <FormElement
            label="Mobile number"
            type="number"
            placeHolder="Mobile number"
            value={mobileNumber}
            onChange={(value) => {
              onMobileNumberChange(value);
            }}
          />
        </div>
      </div>
      <div className="flex justify-between items-center mt-10">
        <div className="text-3xl text-gray-700 font-semibold font-display mb-6">
          Add your team members
        </div>
        <div className="-mt-4 lg:-mt-6">
          <img
            className="cursor-pointer"
            src="/Signup/add-blue.png"
            alt="add"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 justify-center xl:grid-cols-2 grid-flow-row gap-6">
        <TeamMemberDetails
          name="Desagen Muppets"
          nameInitials="dm"
          email="desagenmuppets@gmail.com"
          backgroundColor="#87C289"
        />
        <TeamMemberDetails
          name="Desagen Muppets"
          nameInitials="dm"
          email="desagenmuppets@gmail.com"
          backgroundColor="#F8877F"
        />
        <TeamMemberDetails
          name="Desagen Muppets"
          nameInitials="dm"
          email="desagenmuppets@gmail.com"
          backgroundColor="#C5C3C6"
        />
        <TeamMemberDetails
          name="Desagen Muppets"
          nameInitials="dm"
          email="desagenmuppets@gmail.com"
          backgroundColor="#19191D"
        />
        <TeamMemberDetails
          name="Desagen Muppets"
          nameInitials="dm"
          email="desagenmuppets@gmail.com"
          backgroundColor="#1985A1"
        />
      </div>
      <div className="w-10/12 md:w-5/12 lg:w-4/12 xl:w-3/12 m-auto mt-10">
        <RoundButton
          label="Let's go"
          clickHandler={handleSignup}
          styles="bg-blue text-white text-xl font-medium font-display px-4 py-2 rounded"
        />
      </div>
    </div>
  );
};
