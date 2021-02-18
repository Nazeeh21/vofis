import React, { useState } from 'react';
import { RoundButton } from '../../components/RoundButton';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/dist/client/router';
import {
  CHANGE_ADD_MORE_DETAILS_PAGE_STATUS,
  CHANGE_NEXT_BUTTON_STATUS,
} from '../../store/actionTypes';
import SideDrawer from '../../components/Navigation/SideDrawer';
import DrawerToggle from '../../components/Navigation/SideDrawer/DrawerToggle/Index';

type NavProps = {
  label: string;
  clickHandler: () => void | null;
};

const Navigations: React.FC<NavProps> = ({ label, clickHandler }) => {
  return (
    <div
      onClick={clickHandler}
      className="font-semibold font-display text-lg md:ml-2 lg:ml-12 xl:ml-20 text-gray-600 cursor-pointer"
    >
      {label}
    </div>
  );
};

const SideDrawerNav: React.FC<NavProps> = ({ label, clickHandler }) => {
  return (
    <div
      onClick={clickHandler}
      className="font-medium font-body text-center mt-3 text-lg md:ml-8 lg:ml-12 xl:ml-20 text-gray-600 cursor-pointer"
    >
      {label}
    </div>
  );
};

const SideDrawerFooter: React.FC<NavProps> = ({ label, clickHandler }) => {
  return (
    <div
      onClick={clickHandler}
      className="font-normal font-body text-left mt-3 text-lg md:ml-8 lg:ml-12 xl:ml-20 text-gray-500 cursor-pointer"
    >
      {label}
    </div>
  );
};

const TopNavBar: React.FC = () => {
  // const currentPage = useSelector((state) => state.app.topNavBar);
  const dispatch = useDispatch();
  const router = useRouter();
  const currentPath = router.pathname;
  const nextButtonClicked = useSelector(
    (state) => state.app.nextButtonOnSignUpClicked
  );
  const showAddTeamMembersPage = useSelector(
    (state) => state.app.showAddTeamMembersPage
  );

  const [openSideDrawer, setOpenSideDrawer] = useState(false);

  const toggleSideDrawerHandler = () =>
    setOpenSideDrawer((prevState) => !prevState);

  return (
    <div className="mb-2 w-full">
      {(currentPath === '/login' || currentPath === '/signup') && (
        <div
          style={{ width: '50%', zIndex: -1 }}
          className="hidden md:fixed md:inline-block h-full bg-white right-0 top-0"
        />
      )}
      <div
        style={{ borderBottomRightRadius: '3rem' }}
        className={`grid grid-cols-2 w-full ${
          currentPath === '/' && 'bg-white'
        } items-center px-6 py-3 md:px-12 md:py-8 z-50 relative`}
      >
        <div className="flex items-center text-gray-600">
          <div className="w-16 cursor-pointer" onClick={() => router.push('/')}>
            <img src="/logo-2.png" alt="Vofis logo" />
          </div>

          <div className="inline-block md:hidden font-display text-black ml-4 font-extrabold text-xl">
            Vof.is
          </div>

          <div className="justify-self-end md:hidden">
            {/* <Toolbar
              drawerToggleClicked={toggleSideDrawerHandler}
            /> */}

            <div className="absolute top-5 right-4">
              <DrawerToggle clicked={toggleSideDrawerHandler} />
            </div>
            <div className="relative z-50 md:hidden ">
              <SideDrawer
                open={openSideDrawer}
                closed={toggleSideDrawerHandler}
              >
                <div className="flex justify-between h-20 bg-gray-200 pt-7 px-6">
                  <div className="font-inter font-semibold">MENU</div>
                  <div
                    className="cursor-pointer"
                    onClick={toggleSideDrawerHandler}
                  >
                    <img src="/LandingPage/ham-burger.png" alt="ham-burger" />
                  </div>
                </div>
                <div className="w-full">
                  <div className="w-10/12 m-auto mt-6">
                    <RoundButton
                      clickHandler={() => {
                        router.push('/signup');
                        toggleSideDrawerHandler();
                      }}
                      label="Sign up"
                      styles="font-bold bg-blue font-display text-lg text-white px-6 py-2 rounded-full"
                    />
                  </div>
                  <div className="w-10/12 m-auto mt-6">
                    <RoundButton
                      clickHandler={() => {
                        router.push('/login');
                        toggleSideDrawerHandler();
                      }}
                      label="Login"
                      styles="font-bold text-blue font-display text-lg bg-gray-300 px-6 py-2 rounded-full"
                    />
                  </div>
                  <div
                    style={{ height: '0.123rem' }}
                    className="bg-gray3 w-10/12 m-auto mt-6"
                  />
                  <div className="mt-6 m-auto">
                    <SideDrawerNav
                      clickHandler={() => {
                        router.push('/#about-us');
                        toggleSideDrawerHandler();
                      }}
                      label="About us"
                    />
                    <SideDrawerNav
                      clickHandler={() => {
                        router.push('/#services');
                        toggleSideDrawerHandler();
                      }}
                      label="Services"
                    />

                    <SideDrawerNav
                      clickHandler={() => {
                        router.push('/#testimony');
                        toggleSideDrawerHandler();
                      }}
                      label="Testimony"
                    />
                    <SideDrawerNav
                      clickHandler={() => {
                        router.push('/#about-us');
                        toggleSideDrawerHandler();
                      }}
                      label="Contact us"
                    />
                  </div>
                  <div
                    style={{ height: '0.125rem' }}
                    className="bg-gray3 w-10/12 m-auto mt-6"
                  />
                  <div className="pl-8 absolute bottom-0">
                    <SideDrawerFooter
                      label="FAQs"
                      clickHandler={() => {
                        return;
                      }}
                    />
                    <SideDrawerFooter
                      label="Help"
                      clickHandler={() => {
                        return;
                      }}
                    />
                    <SideDrawerFooter
                      label="Terms and Conditions"
                      clickHandler={() => {
                        return;
                      }}
                    />
                    <SideDrawerFooter
                      label="Copyright 2020"
                      clickHandler={() => {
                        return;
                      }}
                    />
                  </div>
                </div>
              </SideDrawer>
            </div>
          </div>
          <div className="hidden md:flex items-center">
            <Navigations
              clickHandler={() => router.push('/#about-us')}
              label="About us"
            />
            <Navigations
              clickHandler={() => router.push('/#services')}
              label="Services"
            />
            <Navigations
              clickHandler={() => router.push('/#about-us')}
              label="Contact us"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 font-medium justify-self-end items-center w-full">
          <div className="ml-6">
            {currentPath !== '/' && (
              <img
                className="hidden md:inline-block cursor-pointer"
                onClick={() => {
                  if (showAddTeamMembersPage) {
                    dispatch({
                      type: CHANGE_ADD_MORE_DETAILS_PAGE_STATUS,
                      value: false,
                    });
                  } else if (nextButtonClicked) {
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
          </div>
          <div className="justify-self-end md:flex hidden">
            <div className={`w-10 mr-10 ${currentPath !== '/' && 'hidden'}`}>
              <RoundButton
                clickHandler={() => {
                  dispatch({
                    type: CHANGE_ADD_MORE_DETAILS_PAGE_STATUS,
                    value: 'false',
                  });
                  router.push('/login');
                }}
                label="Login"
                styles="font-bold font-display text-lg text-gray-800 py-2"
              />
            </div>
            <div className={` ${currentPath !== '/' && 'hidden'}`}>
              <RoundButton
                clickHandler={() => {
                  router.push('/signup');
                }}
                label="Sign up"
                styles="font-bold text-blue font-display text-lg bg-gray-300 md:px-3 lg:px-6 py-2 rounded-full"
              />
            </div>
            <div className={`${currentPath === '/' && 'hidden'}`}>
              {currentPath === '/signup' ? (
                <div>
                  <RoundButton
                    clickHandler={() => {
                      dispatch({
                        type: CHANGE_ADD_MORE_DETAILS_PAGE_STATUS,
                        value: false,
                      });
                      router.push('/login');
                    }}
                    label="Login"
                    styles="font-semibold font-display text-lg text-gray-500 py-2"
                  />{' '}
                </div>
              ) : (
                <div>
                  <RoundButton
                    clickHandler={() => {
                      router.push('/signup');
                    }}
                    label="Sign up"
                    styles="font-semibold font-display text-lg text-gray-500 py-2"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      {currentPath === '/' && (
        <div className="absolute right-0 z-0 -mt-16 top-0">
          <img src="/gray-dots.png" alt="gray-dots" />
        </div>
      )}
    </div>
  );
};

export default TopNavBar;
