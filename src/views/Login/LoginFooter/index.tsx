import React from 'react';

type LoginWithComponentsProps = {
  src: string;
  alt: string;
};
const LoginWithComponents: React.FC<LoginWithComponentsProps> = ({
  src,
  alt,
}) => {
  return (
    <div className="w-10 h-10 cursor-pointer rounded bg-white border-2 border-gray-400 p-2 mr-2">
      <img className="m-auto mt-1" src={src} alt={alt} />
    </div>
  );
};

const LoginFooter: React.FC = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <LoginWithComponents src="/Login/Twitter.png" alt="twitter" />
      <LoginWithComponents src="/Login/Google.png" alt="google" />
      <LoginWithComponents src="/Login/Facebook.png" alt="facebook" />
      <div className="ml-2 font-body font-semibold">Or log in with</div>
    </div>
  );
};

export default LoginFooter;
