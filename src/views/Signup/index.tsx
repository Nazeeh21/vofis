import React, { useState } from 'react';
import LoginAndSignUpLayout from '../../layout/LoginAndSignUpLayout';
import { useDispatch, useSelector } from 'react-redux';
import {
  InitialSignUpLeftContent,
  InitialSignUpRightContent,
} from './InitialSignup';
import {
  SignUpDetailsLeftContent,
  SignUpDetailsRightContent,
} from './SignUpDetails';
import { CHANGE_NEXT_BUTTON_STATUS } from '../../store/actionTypes';
import {
  AddTeamMembersPageLeftContent,
  AddTeamMembersPageRightContent,
} from './AddTeamMembersPage';

const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [industry, setIndustry] = useState('');
  const [businessOrResource, setBusinessOrResource] = useState('resource');

  const [portfolio, setPortfolio] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [description, setDescription] = useState('');
  const [website, setWebsite] = useState('');
  const [companySize, setCompanySize] = useState('');

  const [adminName, setAdminName] = useState('');
  const [companyEmail, setCompanyEmail] = useState('');
  const [companyMobileNumber, setCompanyMobileNumber] = useState('');

  const dispatch = useDispatch();

  const nextButtonClicked = useSelector(
    (state) => state.app.nextButtonOnSignUpClicked
  );

  const showAddTeamMembersPage = useSelector(
    (state) => state.app.showAddTeamMembersPage
  );
  if (businessOrResource === 'business' && showAddTeamMembersPage) {
    return (
      <div>
        <LoginAndSignUpLayout
          leftContent={<AddTeamMembersPageLeftContent />}
          imageSrc="/Signup/black-man.png"
          imageLeftMargin="25%"
        >
          <AddTeamMembersPageRightContent
            adminName={adminName}
            onAdminNameChange={setAdminName}
            email={companyEmail}
            onEmailChange={setCompanyEmail}
            mobileNumber={companyMobileNumber}
            onMobileNumberChange={setCompanyMobileNumber}
          />
        </LoginAndSignUpLayout>
      </div>
    );
  }

  if (nextButtonClicked) {
    return (
      <div>
        <LoginAndSignUpLayout
          leftContent={<SignUpDetailsLeftContent />}
          imageSrc="/Signup/signup-2.png"
          imageLeftMargin="10%"
        >
          <SignUpDetailsRightContent
            businessOrResource={businessOrResource}
            portfolio={portfolio}
            onPortfolioChanged={(value) => setPortfolio(value)}
            phoneNumber={phoneNumber}
            onPhoneNumberChanged={(value) => setPhoneNumber(value)}
            description={description}
            onDescriptionChanged={(value) => setDescription(value)}
            website={website}
            onWebsiteChanged={(value) => setWebsite(value)}
            companySize={companySize}
            onCompanySizeChanged={(value) => setCompanySize(value)}
          />
        </LoginAndSignUpLayout>
      </div>
    );
  }

  return (
    <div>
      <LoginAndSignUpLayout
        leftContent={<InitialSignUpLeftContent />}
        imageSrc="/Signup/signup-1.png"
        imageLeftMargin="23%"
      >
        <InitialSignUpRightContent
          name={name}
          onNameChange={(value) => setName(value)}
          email={email}
          onEmailChange={(value) => setEmail(value)}
          industry={industry}
          onIndustryChange={(value) => setIndustry(value)}
          businessOrResource={businessOrResource}
          onBusinessOrResourceChange={(value) => setBusinessOrResource(value)}
          nextButtonClicked={() => {
            dispatch({ type: CHANGE_NEXT_BUTTON_STATUS, value: true });
            // setShowDetailsPage(true);
          }}
        />
      </LoginAndSignUpLayout>
    </div>
  );
};

export default Signup;
