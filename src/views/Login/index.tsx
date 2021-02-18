import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormElement } from '../../components/LoginAndSignUpComponents';
import { RoundButton } from '../../components/RoundButton';
import LoginAndSignUpLayout from '../../layout/LoginAndSignUpLayout';
import { googleProvider, signInWithPopup } from '../../services/firebase';
import { CHANGE_NEXT_BUTTON_STATUS, LOGIN } from '../../store/actionTypes';
import LoginFooter from './LoginFooter';

const LeftContent: React.FC = () => {
  return (
    <div className="text-white text-7xl font-bold font-display">
      <div className="md:mt-2 lg:mt-4 font-display">Lets get</div>
      <div className="md:mt-2 lg:mt-4 font-display">Ready</div>
      <div className="md:mt-2 lg:mt-4 font-display">to</div>
      <div className="md:mt-2 lg:mt-4 font-display">Rumble</div>
      <div className="font-inter text-gray-600 font-medium mt-4 text-sm">
        PROTIP: YOU CAN ADD GROUP
      </div>
      <div className="font-inter text-gray-600 font-medium text-sm">
        ROOMS INTO FOLDERS FOR BETTER
      </div>
      <div className="font-inter text-gray-600 font-medium text-sm">
        ORGANISATION
      </div>
    </div>
  );
};

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogin = async () => {
    const result = await signInWithPopup(googleProvider());

    if (!result) {
      return alert('An error occured while trying to sign you in.');
    }

    const { token } = result;

    dispatch({ type: LOGIN, token });

    router.push('/dashboard');
  };

  dispatch({ type: CHANGE_NEXT_BUTTON_STATUS, value: false });

  return (
    <div>
      <LoginAndSignUpLayout
        leftContent={<LeftContent />}
        imageSrc="/Login/login-image.png"
        imageLeftMargin="20%"
      >
        <div>
          <div className="font-display text-6xl font-bold text-gray-700 mb-28">
            Login
          </div>
          <div className={`${email !== '' && '-mt-6'}`}>
            <FormElement
              value={email}
              label="Email Address"
              onChange={(value) => setEmail(value)}
              placeHolder="Email Address"
            />{' '}
          </div>
          <div className={`${password !== '' && '-mt-6'}`}>
            <FormElement
              type="password"
              value={password}
              label="Password"
              onChange={(value) => setPassword(value)}
              placeHolder="Password"
            />{' '}
          </div>
          <div className="text-right mt-6 font-semibold font-inter text-blue text-sm cursor-pointer">
            FORGOT PASSWORD
          </div>
          <div className="w-10/12 md:w-5/12 lg:w-4/12 xl:w-3/12 m-auto mt-20">
            <RoundButton
              label="Log in"
              clickHandler={handleLogin}
              styles="bg-blue text-white text-xl font-medium font-display px-4 py-2 rounded"
            />
          </div>
          <div className="mt-10">
            <LoginFooter />
          </div>
        </div>
      </LoginAndSignUpLayout>
    </div>
  );
};

export default Login;
