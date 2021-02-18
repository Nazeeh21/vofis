import React from 'react';

const WhatWeDo: React.FC = () => {
  return (
    <div id="services" className="w-full h-auto">
      <div
        style={{
          borderTopRightRadius: '3rem',
          borderBottomLeftRadius: '3rem',
          height: '45rem',
          width: '26rem',
          zIndex: 0,
        }}
        className="hidden bg-white md:absolute md:block left-0 h-full"
      >
        <div
          style={{
            // position: 'absolute',
            width: '110%',
            height: '0px',
            border: '0.1px solid #46494C',
            marginTop: '65%',
          }}
          className=""
        />
      </div>
      <img
        style={{ marginLeft: '20rem', zIndex: 1 }}
        className="left-0 -mt-12 hidden md:absolute md:block"
        src="/gray-dots.png"
        alt="gray-dots"
      />

      <div
        style={{ zIndex: 10 }}
        className="relative md:grid md:grid-cols-2 md:grid-rows-1 w-full items-center "
      >
        <div className="md:mt-20 lg:mt-0 w-full pl-12 md:pl-24">
          <div className="font-inter font-medium text-sm">SERVICES</div>
          <div className="text-4xl font-semibold mb-8 font-display">
            What we do
          </div>
          <div
            style={{
              // position: 'absolute',
              width: '80%',
              height: '0px',
              border: '0.1px solid #46494C',
              // marginTop: '65%',
            }}
            className="absolute left-0 md:hidden"
          />
        </div>
        <div className="md:mt-20 lg:mt-0 justify-self-end">
          {/* <div
            style={{ borderTopLeftRadius: '2.8rem' }}
            className="z-50 relative h-24 bg-white"
          /> */}
          <img
            className="ml-6 md:ml-0 w-10/12 md:w-full"
            src="/LandingPage/what-we-do.png"
            alt="WhatWeDo"
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-2 md:mt-16 z-10 relative md:justify-around md:px-10 w-full  ">
        <div className="md:w-3/12 w-10/12 m-auto mt-10 md:mt-0">
          <div className="font-inter  text-gray-500 font-semibold text-sm">
            BUSINESS
          </div>
          <div className="font-semibold text-lg font-display">
            Help keep everything in one place
          </div>
          <div className="font-normal text-sm font-body">
            No need to keep jumping between different platforms. We help you
            keep everything in one place. Makes tracking and communicating about
            the project a breeze
          </div>
        </div>
        <div className="md:w-3/12 w-10/12 m-auto mt-10 md:mt-0">
          <div className="font-inter font-semibold text-gray-500 text-sm">
            STARTUP
          </div>
          <div className="font-semibold text-lg font-display">
            Find the perfect person for the job
          </div>
          <div className="font-normal text-sm font-body">
            You want to get something done, but it’s hard to find the perfect
            fit? We Hear You! Find the perfect person with the right budget.
            Hiring freelancers has never been so easy.
          </div>
        </div>
        <div className="md:w-3/12 w-10/12 m-auto mt-10 md:mt-0">
          <div className="font-inter font-semibold text-gray-500 text-sm">
            FREELANCERS
          </div>
          <div className="font-semibold text-lg font-display">
            Making contracts easier than ever
          </div>
          <div className="font-normal text-sm font-body">
            Contracts are the most crutial part of any project. Leave it to us
            to handle all the paperwork, while you focus on the project. No more
            unpaid labour, You get paid- GUARENTEED!
          </div>
        </div>
      </div>
    </div>
    // <div id='services' className="flex">

    //   <div>
    //  <div className="w-4/12">
    //     <img
    //       style={{ marginLeft: '20rem' }}
    //       className="left-0 -mt-12 absolute"
    //       src="/gray-dots.png"
    //       alt="gray-dots"
    //     />
    //     <div
    //       style={{
    //         borderTopRightRadius: '3rem',
    //         borderBottomLeftRadius: '3rem',
    //       }}
    //       className="bg-white w-10/12 pl-28 pt-64 pb-12"
    //     >
    // <div className="font-inter font-medium text-sm">SERVICES</div>
    // <div className="text-4xl font-semibold mb-8 font-display">
    //   What we do
    // </div>
    //       <div
    //         style={{
    //           position: 'absolute',
    //           width: '457px',
    //           height: '0px',
    //           border: '0.1px solid #46494C',
    //         }}
    //         className="left-0"
    //       ></div>
    // <div style={{ paddingTop: '0.4rem' }} className="-mr-12 mt-64">
    //   <div className="font-inter  text-gray-500 font-semibold text-sm">
    //     BUSINESS
    //   </div>
    //   <div className="font-semibold text-lg font-display">
    //     Help keep everything in one place
    //   </div>
    //   <div className="font-normal text-sm font-body">
    //     No need to keep jumping between different platforms. We help you
    //     keep everything in one place. Makes tracking and communicating
    //     about the project a breeze
    //   </div>
    // </div>
    //     </div>
    //   </div>
    //   <div
    //   // style={{ paddingLeft: '10.3rem' }}
    //   className="lg:pl-24 xl:pl-40 w-8/12 flex-col">
    //     <div className=''>
    //   <img
    //   className="absolute"
    //   src="/LandingPage/what-we-do.png"
    //   alt="WhatWeDe"
    // />
    //     </div>
    // <div
    //   style={{ borderTopLeftRadius: '2.8rem' }}
    //   className="z-50 mt-44 h-24 bg-white"
    // />
    //     <div style={{ marginTop: '19rem' }} className="flex">
    //       <div className="pr-14">
    //         <div className="font-inter font-semibold text-gray-500 text-sm">
    //           STARTUP
    //         </div>
    //         <div className="font-semibold text-lg font-display">
    //           Find the perfect person for the job
    //         </div>
    //         <div className="font-normal text-sm font-body">
    //           You want to get something done, but it’s hard to find the perfect
    //           fit? We Hear You! Find the perfect person with the right budget.
    //           Hiring freelancers has never been so easy.
    //         </div>
    //       </div>
    // <div className="pr-14">
    //   <div className="font-inter font-semibold text-gray-500 text-sm">
    //     FREELANCERS
    //   </div>
    //   <div className="font-semibold text-lg font-display">
    //     Making contracts easier than ever
    //   </div>
    //   <div className="font-normal text-sm font-body">
    //     Contracts are the most crutial part of any project. Leave it to us
    //     to handle all the paperwork, while you focus on the project. No
    //     more unpaid labour, You get paid- GUARENTEED!
    //   </div>
    // </div>
    //     </div>
    //   </div>
    //  </div>
    // </div>
  );
};

export default WhatWeDo;
