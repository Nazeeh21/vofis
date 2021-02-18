import React from 'react';
import './LoginAndSignUpComponents.module.css';

type TitleProps = {
  title: string;
  subTitle: string;
};

export const TitleDiv: React.FC<TitleProps> = ({ title, subTitle }) => {
  return (
    <div>
      <div
        // style={{ lineHeight: 1, fontSize: '5.5rem' }}
        className="text-white font-bold font-display mt-2 text-7xl"
      >
        {title}
      </div>
      <div className="font-inter text-sm font-semibold text-gray-600 mt-2">
        {subTitle}
      </div>
    </div>
  );
};

type FormElementProps = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeHolder: string;
  type?: string;
};

export const FormElement: React.FC<FormElementProps> = ({
  label,
  value,
  onChange,
  placeHolder,
  type = 'text',
}) => {
  return (
    <div className="mt-10">
      {value !== '' && (
        <div className="font-semibold text-gray-400 font-display">{label}</div>
      )}
      <div className="inputForm">
        <input
          id="input-form"
          type={type}
          style={{ backgroundColor: 'transparent' }}
          className="bg-transparent w-full font-bold border-t-0 border-r-0 border-l-0 border-gray-700 focus:border-blue border-b-4 outline-none text-2xl text-black font-body"
          value={value}
          placeholder={placeHolder}
          onChange={(e) => onChange(e.target.value)}
        />
      </div>
    </div>
  );
};

type ResourceOrBusinessProps = {
  src: string;
  alt: string;
  imageStyle: string;
};

export const ResourceOrBusiness: React.FC<ResourceOrBusinessProps> = ({
  src,
  alt,
  imageStyle,
}) => {
  return (
    <div className="cursor-pointer text-center font-body h-36">
      <div className="">
        <div className={`rounded-full p-6 ${imageStyle}`}>
          <img className="m-auto w-auto" src={src} alt={alt} />
        </div>
      </div>
      {/* <div className={`font-body font-medium text-lg mt-2 ${labelStyle}`}>{label}</div> */}
    </div>
  );
};

type ProfileDetailsProps = {
  src: string;
  text: string;
  alt: string;
};

export const ProfileDetails: React.FC<ProfileDetailsProps> = ({
  src,
  text,
  alt,
}) => {
  return (
    <div className="flex mt-2">
      <img src={src} alt={alt} />
      <div className="font-body ml-2">{text}</div>
    </div>
  );
};

type TeamMemberDetailsProps = {
  nameInitials: string;
  name: string;
  email: string;
  backgroundColor: string;
};

export const TeamMemberDetails: React.FC<TeamMemberDetailsProps> = ({
  nameInitials,
  name,
  email,
  backgroundColor,
}) => {
  return (
    <div className="w-full flex items-center">
      <div
        style={{ backgroundColor: backgroundColor }}
        className="p-2 mr-3 rounded text-center text-white font-inter"
      >
        {nameInitials.toUpperCase()}
      </div>
      <div>
        <div className="font-inter font-semibold text-xl">{name}</div>
        <div className="font-inter text-gray-600 text-sm">{email}</div>
      </div>
    </div>
  );
};
